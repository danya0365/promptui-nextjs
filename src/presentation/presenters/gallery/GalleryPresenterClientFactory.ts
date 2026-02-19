/**
 * Client-side factory injecting StaticShowcaseItemRepository
 * and StaticShowcaseLivePreviewRepository
 */

'use client';

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { StaticShowcaseLivePreviewRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseLivePreviewRepository';
import { GalleryPresenter } from './GalleryPresenter';

export class GalleryPresenterClientFactory {
  static create(): GalleryPresenter {
    const repository = new StaticShowcaseItemRepository();
    const livePreviewRepository = new StaticShowcaseLivePreviewRepository();
    return new GalleryPresenter(repository, livePreviewRepository);
  }
}

export function createClientGalleryPresenter(): GalleryPresenter {
  return GalleryPresenterClientFactory.create();
}
