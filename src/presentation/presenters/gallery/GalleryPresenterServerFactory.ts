/**
 * GalleryPresenterServerFactory
 * Server-side factory injecting StaticShowcaseItemRepository
 */

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { GalleryPresenter } from './GalleryPresenter';

export class GalleryPresenterServerFactory {
  static create(): GalleryPresenter {
    const repository = new StaticShowcaseItemRepository();
    return new GalleryPresenter(repository);
  }
}

export function createServerGalleryPresenter(): GalleryPresenter {
  return GalleryPresenterServerFactory.create();
}
