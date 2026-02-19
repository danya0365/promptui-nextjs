'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    ShowcaseDetailPresenter,
    ShowcaseDetailViewModel,
} from './ShowcaseDetailPresenter';
import { createClientShowcaseDetailPresenter } from './ShowcaseDetailPresenterClientFactory';

export interface ShowcaseDetailPresenterState {
  viewModel: ShowcaseDetailViewModel | null;
  loading: boolean;
  error: string | null;
  copied: boolean;
}

export interface ShowcaseDetailPresenterActions {
  loadData: () => Promise<void>;
  copyPrompt: () => void;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for ShowcaseDetail page
 */
export function useShowcaseDetailPresenter(
  id: string,
  initialViewModel?: ShowcaseDetailViewModel,
  presenterOverride?: ShowcaseDetailPresenter
): [ShowcaseDetailPresenterState, ShowcaseDetailPresenterActions] {
  const presenter = useMemo(
    () => presenterOverride ?? createClientShowcaseDetailPresenter(),
    [presenterOverride]
  );

  const isMountedRef = useRef(true);
  const [viewModel, setViewModel] =
    useState<ShowcaseDetailViewModel | null>(initialViewModel || null);
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const vm = await presenter.getViewModel(id);
      if (isMountedRef.current) setViewModel(vm);
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, [id, presenter]);

  const copyPrompt = useCallback(() => {
    if (!viewModel?.item) return;
    navigator.clipboard.writeText(viewModel.item.prompt).then(() => {
      setCopied(true);
      setTimeout(() => {
        if (isMountedRef.current) setCopied(false);
      }, 2500);
    });
  }, [viewModel]);

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
    { viewModel, loading, error, copied },
    { loadData, copyPrompt, setError },
  ];
}
