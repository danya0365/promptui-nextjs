import { StaticShowcaseItemRepository } from '@/src/infrastructure/repositories/static/StaticShowcaseItemRepository';
import { CategoriesPresenter } from './CategoriesPresenter';

export function createServerCategoriesPresenter(): CategoriesPresenter {
  return new CategoriesPresenter(new StaticShowcaseItemRepository());
}
