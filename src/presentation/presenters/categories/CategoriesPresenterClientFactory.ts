'use client';

import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { CategoriesPresenter } from './CategoriesPresenter';

export function createClientCategoriesPresenter(): CategoriesPresenter {
  return new CategoriesPresenter(new StaticShowcaseItemRepository());
}
