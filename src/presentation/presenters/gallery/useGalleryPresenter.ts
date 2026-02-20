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
  displayedItems: ShowcaseItem[];
  totalFilteredCount: number;
  clientPage: number;
  isClientFilterActive: boolean;
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
  setClientPage: (page: number) => void;
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
  
  const [fullCategoryItems, setFullCategoryItems] = useState<ShowcaseItem[]>(
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
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [clientPage, setClientPage] = useState(1);
  const [livePreviewMap, setLivePreviewMap] = useState<
    Record<string, ShowcaseLivePreview[]>
  >(initialViewModel?.livePreviewMap || {});
  
  // Track agent-filtered showcase IDs (empty = show all)
  const [agentShowcaseIds, setAgentShowcaseIds] = useState<string[] | null>(null);

  // Fetch full category items to allow accurate client-side filtering cross-pages
  useEffect(() => {
    const category = viewModel?.activeCategory || 'all';
    presenter.getItemsByCategory(category).then(items => {
      if (isMountedRef.current) {
        setFullCategoryItems(items);
      }
    }).catch(console.error);
  }, [presenter, viewModel?.activeCategory]);

  const isClientFilterActive = !(!searchTerm.trim() && activeDifficulty === 'all' && agentShowcaseIds === null && activeCategory === (viewModel?.activeCategory || 'all'));

  const filteredItems = useMemo(() => {
    // If no client-side filters are active, show the paginated items from server
    if (!isClientFilterActive) {
      return viewModel?.items || [];
    }

    let result = fullCategoryItems;

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeDifficulty !== 'all') {
      result = result.filter((item) => item.difficulty === activeDifficulty);
    }

    if (agentShowcaseIds !== null) {
      result = result.filter((item) => agentShowcaseIds.includes(item.id));
    }

    return result;
  }, [isClientFilterActive, fullCategoryItems, viewModel?.items, searchTerm, activeDifficulty, agentShowcaseIds, activeCategory, viewModel?.activeCategory]);

  const displayedItems = useMemo(() => {
    if (!isClientFilterActive) return filteredItems;
    const perPage = viewModel?.perPage || 12;
    return filteredItems.slice((clientPage - 1) * perPage, clientPage * perPage);
  }, [isClientFilterActive, filteredItems, clientPage, viewModel?.perPage]);

  // Reset page when filters change
  useEffect(() => {
    setClientPage(1);
  }, [searchTerm, activeDifficulty, agentShowcaseIds, activeCategory]);

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
        setFullCategoryItems(items);
        setLivePreviewMap(vm.livePreviewMap);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [presenter]);

  /**
   * Category filter (uses repository)
   */
  const setActiveCategory = useCallback(
    async (category: string) => {
      setActiveCategoryState(category);
      try {
        const items = await presenter.getItemsByCategory(category);
        if (isMountedRef.current) {
          setFullCategoryItems(items);
        }
      } catch (err) {
        console.error('Error filtering:', err);
      }
    },
    [presenter]
  );

  /**
   * Search filter (client-side)
   */
  const setSearchTerm = useCallback((term: string) => {
    setSearchTermState(term);
  }, []);

  /**
   * Difficulty filter (client-side)
   */
  const setActiveDifficulty = useCallback((difficulty: string) => {
    setActiveDifficultyState(difficulty);
  }, []);

  /**
   * AI Agent filter — fetches showcase IDs with previews from this agent
   */
  const setActiveAiModel = useCallback(
    async (agent: string) => {
      setActiveAiModelState(agent);

      if (agent === 'all') {
        setAgentShowcaseIds(null);
        return;
      }

      try {
        const ids = await presenter.getShowcaseIdsByModel(agent);
        if (isMountedRef.current) {
          setAgentShowcaseIds(ids);
        }
      } catch (err) {
        console.error('Error filtering by agent:', err);
      }
    },
    [presenter]
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

  // Sync with initialViewModel updates (e.g. server-side pagination)
  useEffect(() => {
    if (initialViewModel) {
      setViewModel(initialViewModel);
    }
  }, [initialViewModel]);

  // Load on mount if no data
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
      displayedItems,
      totalFilteredCount: filteredItems.length,
      clientPage,
      isClientFilterActive,
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
      setClientPage,
      copyPrompt,
      setViewMode,
      setError,
    },
  ];
}
