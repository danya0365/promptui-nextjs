/**
 * ShowcaseDetailPresenterServerFactory
 */

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { StaticShowcaseLivePreviewRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseLivePreviewRepository';
import { ShowcaseDetailPresenter } from './ShowcaseDetailPresenter';

export class ShowcaseDetailPresenterServerFactory {
  static create(): ShowcaseDetailPresenter {
    const repository = new StaticShowcaseItemRepository();
    const livePreviewRepository = new StaticShowcaseLivePreviewRepository();
    return new ShowcaseDetailPresenter(repository, livePreviewRepository);
  }
}

export function createServerShowcaseDetailPresenter(): ShowcaseDetailPresenter {
  return ShowcaseDetailPresenterServerFactory.create();
}
