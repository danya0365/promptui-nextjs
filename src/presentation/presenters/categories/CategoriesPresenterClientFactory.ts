'use client';

import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { CategoriesPresenter } from './CategoriesPresenter';

export function createClientCategoriesPresenter(): CategoriesPresenter {
  return new CategoriesPresenter(new MockShowcaseItemRepository());
}
