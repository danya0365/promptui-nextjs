/**
 * ShowcaseDetailPresenterClientFactory
 */

'use client';

import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { ShowcaseDetailPresenter } from './ShowcaseDetailPresenter';

export class ShowcaseDetailPresenterClientFactory {
  static create(): ShowcaseDetailPresenter {
    const repository = new MockShowcaseItemRepository();
    return new ShowcaseDetailPresenter(repository);
  }
}

export function createClientShowcaseDetailPresenter(): ShowcaseDetailPresenter {
  return ShowcaseDetailPresenterClientFactory.create();
}
