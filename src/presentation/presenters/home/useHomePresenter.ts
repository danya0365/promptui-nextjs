'use client';

import type { ShowcaseItem } from '@/src/application/repositories/IShowcaseItemRepository';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HomePresenter, HomeViewModel } from './HomePresenter';
import { createClientHomePresenter } from './HomePresenterClientFactory';

export interface HomePresenterState {
  viewModel: HomeViewModel | null;
  loading: boolean;
  error: string | null;
  activeCategory: string;
  filteredItems: ShowcaseItem[];
  copiedId: string | null;
}

export interface HomePresenterActions {
  loadData: () => Promise<void>;
  setActiveCategory: (category: string) => void;
  copyPrompt: (item: ShowcaseItem) => void;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Home presenter
 * Manages state, category filtering, and prompt copying
 */
export function useHomePresenter(
  initialViewModel?: HomeViewModel,
  presenterOverride?: HomePresenter
): [HomePresenterState, HomePresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientHomePresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [viewModel, setViewModel] = useState<HomeViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategoryState] = useState('all');
  const [filteredItems, setFilteredItems] = useState<ShowcaseItem[]>(
    initialViewModel?.allItems || []
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  /**
   * Load data from presenter
   */
  const loadData = useCallback(async () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel();
      if (isMountedRef.current) {
        setViewModel(newViewModel);
        setFilteredItems(newViewModel.allItems);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      if (isMountedRef.current) {
        const errorMessage =
          err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        console.error('Error loading home data:', err);
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [presenter]);

  /**
   * Filter items by category
   */
  const setActiveCategory = useCallback(
    async (category: string) => {
      setActiveCategoryState(category);
      try {
        const items = await presenter.getItemsByCategory(category);
        if (isMountedRef.current) setFilteredItems(items);
      } catch (err) {
        console.error('Error filtering:', err);
      }
    },
    [presenter]
  );

  /**
   * Copy prompt to clipboard
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
    { viewModel, loading, error, activeCategory, filteredItems, copiedId },
    { loadData, setActiveCategory, copyPrompt, setError },
  ];
}
