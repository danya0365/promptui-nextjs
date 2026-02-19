/**
 * GalleryPresenterServerFactory
 * Server-side factory injecting MockShowcaseItemRepository
 */

import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { GalleryPresenter } from './GalleryPresenter';

export class GalleryPresenterServerFactory {
  static create(): GalleryPresenter {
    const repository = new MockShowcaseItemRepository();
    return new GalleryPresenter(repository);
  }
}

export function createServerGalleryPresenter(): GalleryPresenter {
  return GalleryPresenterServerFactory.create();
}
