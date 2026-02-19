'use client';

import type { ShowcaseItem } from '@/src/application/repositories/IShowcaseItemRepository';
import type { ShowcaseLivePreview } from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GalleryPresenter, GalleryViewModel } from './GalleryPresenter';
import { createClientGalleryPresenter } from './GalleryPresenterClientFactory';

export interface GalleryPresenterState {
  viewModel: GalleryViewModel | null;
  loading: boolean;
  error: string | null;
  searchTerm: string;
  activeCategory: string;
  activeDifficulty: string;
  activeAiModel: string;
  filteredItems: ShowcaseItem[];
  copiedId: string | null;
  viewMode: 'grid' | 'list';
  /** Map of showcaseId → live previews for badge rendering */
  livePreviewMap: Record<string, ShowcaseLivePreview[]>;
}

export interface GalleryPresenterActions {
  loadData: () => Promise<void>;
  setSearchTerm: (term: string) => void;
  setActiveCategory: (category: string) => void;
  setActiveDifficulty: (difficulty: string) => void;
  setActiveAiModel: (agent: string) => void;
  copyPrompt: (item: ShowcaseItem) => void;
  setViewMode: (mode: 'grid' | 'list') => void;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Gallery presenter
 * Manages search, category/difficulty/ai-agent filters, view mode, and prompt copying
 */
export function useGalleryPresenter(
  initialViewModel?: GalleryViewModel,
  presenterOverride?: GalleryPresenter
): [GalleryPresenterState, GalleryPresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientGalleryPresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<GalleryViewModel | null>(
    initialViewModel || null
  );
  const [allItems, setAllItems] = useState<ShowcaseItem[]>(
    initialViewModel?.items || []
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTermState] = useState('');
  const [activeCategory, setActiveCategoryState] = useState(
    initialViewModel?.activeCategory || 'all'
  );
  const [activeDifficulty, setActiveDifficultyState] = useState('all');
  const [activeAiModel, setActiveAiModelState] = useState('all');
  const [filteredItems, setFilteredItems] = useState<ShowcaseItem[]>(
    initialViewModel?.items || []
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [livePreviewMap, setLivePreviewMap] = useState<
    Record<string, ShowcaseLivePreview[]>
  >(initialViewModel?.livePreviewMap || {});
  // Track agent-filtered showcase IDs (empty = show all)
  const [agentShowcaseIds, setAgentShowcaseIds] = useState<string[] | null>(
    null
  );

  /**
   * Apply search, difficulty, and agent filter client-side
   */
  const applyFilters = useCallback(
    (
      items: ShowcaseItem[],
      search: string,
      difficulty: string,
      agentIds: string[] | null
    ) => {
      let result = items;

      if (search.trim()) {
        const q = search.toLowerCase();
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags.some((t) => t.toLowerCase().includes(q))
        );
      }

      if (difficulty !== 'all') {
        result = result.filter((item) => item.difficulty === difficulty);
      }

      // Agent filter: only show showcases that have a live preview from this agent
      if (agentIds !== null) {
        result = result.filter((item) => agentIds.includes(item.id));
      }

      return result;
    },
    []
  );

  /**
   * Load initial data
   */
  const loadData = useCallback(async () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const [vm, items] = await Promise.all([
        presenter.getViewModel(),
        presenter.getAllItems(),
      ]);
      if (isMountedRef.current) {
        setViewModel(vm);
        setAllItems(items);
        setLivePreviewMap(vm.livePreviewMap);
        setFilteredItems(
          applyFilters(items, searchTerm, activeDifficulty, agentShowcaseIds)
        );
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [presenter, applyFilters, searchTerm, activeDifficulty, agentShowcaseIds]);

  /**
   * Category filter (uses repository)
   */
  const setActiveCategory = useCallback(
    async (category: string) => {
      setActiveCategoryState(category);
      try {
        const items = await presenter.getItemsByCategory(category);
        if (isMountedRef.current) {
          setAllItems(items);
          setFilteredItems(
            applyFilters(items, searchTerm, activeDifficulty, agentShowcaseIds)
          );
        }
      } catch (err) {
        console.error('Error filtering:', err);
      }
    },
    [presenter, applyFilters, searchTerm, activeDifficulty, agentShowcaseIds]
  );

  /**
   * Search filter (client-side)
   */
  const setSearchTerm = useCallback(
    (term: string) => {
      setSearchTermState(term);
      setFilteredItems(
        applyFilters(allItems, term, activeDifficulty, agentShowcaseIds)
      );
    },
    [allItems, activeDifficulty, agentShowcaseIds, applyFilters]
  );

  /**
   * Difficulty filter (client-side)
   */
  const setActiveDifficulty = useCallback(
    (difficulty: string) => {
      setActiveDifficultyState(difficulty);
      setFilteredItems(
        applyFilters(allItems, searchTerm, difficulty, agentShowcaseIds)
      );
    },
    [allItems, searchTerm, agentShowcaseIds, applyFilters]
  );

  /**
   * AI Agent filter — fetches showcase IDs with previews from this agent
   */
  const setActiveAiModel = useCallback(
    async (agent: string) => {
      setActiveAiModelState(agent);

      if (agent === 'all') {
        setAgentShowcaseIds(null);
        setFilteredItems(
          applyFilters(allItems, searchTerm, activeDifficulty, null)
        );
        return;
      }

      try {
        const ids = await presenter.getShowcaseIdsByModel(agent);
        if (isMountedRef.current) {
          setAgentShowcaseIds(ids);
          setFilteredItems(
            applyFilters(allItems, searchTerm, activeDifficulty, ids)
          );
        }
      } catch (err) {
        console.error('Error filtering by agent:', err);
      }
    },
    [presenter, allItems, searchTerm, activeDifficulty, applyFilters]
  );

  /**
   * Copy prompt
   */
  const copyPrompt = useCallback((item: ShowcaseItem) => {
    navigator.clipboard.writeText(item.prompt).then(() => {
      setCopiedId(item.id);
      setTimeout(() => {
        if (isMountedRef.current) setCopiedId(null);
      }, 2000);
    });
  }, []);

  // Load on mount
  useEffect(() => {
    if (!initialViewModel) loadData();
  }, [loadData, initialViewModel]);

  // Cleanup
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return [
    {
      viewModel,
      loading,
      error,
      searchTerm,
      activeCategory,
      activeDifficulty,
      activeAiModel,
      filteredItems,
      copiedId,
      viewMode,
      livePreviewMap,
    },
    {
      loadData,
      setSearchTerm,
      setActiveCategory,
      setActiveDifficulty,
      setActiveAiModel,
      copyPrompt,
      setViewMode,
      setError,
    },
  ];
}
