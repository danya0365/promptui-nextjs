'use client';

import { siteConfig } from '@/src/config/site.config';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CategoriesPresenter, CategoriesViewModel } from './CategoriesPresenter';
import { createClientCategoriesPresenter } from './CategoriesPresenterClientFactory';

export interface CategoriesPresenterState {
  viewModel: CategoriesViewModel | null;
  loading: boolean;
  error: string | null;
}

export interface CategoriesPresenterActions {
  loadData: () => Promise<void>;
  setError: (error: string | null) => void;
}

export function useCategoriesPresenter(
  initialViewModel?: CategoriesViewModel,
  presenterOverride?: CategoriesPresenter
): [CategoriesPresenterState, CategoriesPresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientCategoriesPresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);
  const [viewModel, setViewModel] = useState<CategoriesViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const vm = await presenter.getViewModel(siteConfig.categories);
      if (isMountedRef.current) setViewModel(vm);
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [presenter]);

  useEffect(() => {
    if (!initialViewModel) loadData();
  }, [loadData, initialViewModel]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return [
    { viewModel, loading, error },
    { loadData, setError },
  ];
}
