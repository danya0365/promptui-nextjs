/**
 * GalleryPresenterClientFactory
 * Client-side factory injecting StaticShowcaseItemRepository
 */

'use client';

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { GalleryPresenter } from './GalleryPresenter';

export class GalleryPresenterClientFactory {
  static create(): GalleryPresenter {
    const repository = new StaticShowcaseItemRepository();
    return new GalleryPresenter(repository);
  }
}

export function createClientGalleryPresenter(): GalleryPresenter {
  return GalleryPresenterClientFactory.create();
}
