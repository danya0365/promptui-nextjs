/**
 * GalleryPresenterClientFactory
 * Client-side factory injecting MockShowcaseItemRepository
 */

'use client';

import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { GalleryPresenter } from './GalleryPresenter';

export class GalleryPresenterClientFactory {
  static create(): GalleryPresenter {
    const repository = new MockShowcaseItemRepository();
    return new GalleryPresenter(repository);
  }
}

export function createClientGalleryPresenter(): GalleryPresenter {
  return GalleryPresenterClientFactory.create();
}
