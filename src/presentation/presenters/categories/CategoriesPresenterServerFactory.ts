import { MockShowcaseItemRepository } from '@/src/infrastructure/repositories/mock/MockShowcaseItemRepository';
import { CategoriesPresenter } from './CategoriesPresenter';

export function createServerCategoriesPresenter(): CategoriesPresenter {
  return new CategoriesPresenter(new MockShowcaseItemRepository());
}
