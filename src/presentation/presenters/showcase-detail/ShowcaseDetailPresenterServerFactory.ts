/**
 * ShowcaseDetailPresenterServerFactory
 */

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { ShowcaseDetailPresenter } from './ShowcaseDetailPresenter';

export class ShowcaseDetailPresenterServerFactory {
  static create(): ShowcaseDetailPresenter {
    const repository = new StaticShowcaseItemRepository();
    return new ShowcaseDetailPresenter(repository);
  }
}

export function createServerShowcaseDetailPresenter(): ShowcaseDetailPresenter {
  return ShowcaseDetailPresenterServerFactory.create();
}
