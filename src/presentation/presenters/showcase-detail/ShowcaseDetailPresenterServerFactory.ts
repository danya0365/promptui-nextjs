/**
 * ShowcaseDetailPresenterServerFactory
 */

import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { ShowcaseDetailPresenter } from './ShowcaseDetailPresenter';

export class ShowcaseDetailPresenterServerFactory {
  static create(): ShowcaseDetailPresenter {
    const repository = new MockShowcaseItemRepository();
    return new ShowcaseDetailPresenter(repository);
  }
}

export function createServerShowcaseDetailPresenter(): ShowcaseDetailPresenter {
  return ShowcaseDetailPresenterServerFactory.create();
}
