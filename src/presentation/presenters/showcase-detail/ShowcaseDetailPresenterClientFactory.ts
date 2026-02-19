/**
 * ShowcaseDetailPresenterClientFactory
 */

'use client';

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { ShowcaseDetailPresenter } from './ShowcaseDetailPresenter';

export class ShowcaseDetailPresenterClientFactory {
  static create(): ShowcaseDetailPresenter {
    const repository = new StaticShowcaseItemRepository();
    return new ShowcaseDetailPresenter(repository);
  }
}

export function createClientShowcaseDetailPresenter(): ShowcaseDetailPresenter {
  return ShowcaseDetailPresenterClientFactory.create();
}
