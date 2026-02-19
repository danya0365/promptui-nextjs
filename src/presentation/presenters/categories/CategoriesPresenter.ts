/**
 * CategoriesPresenter
 * Handles business logic for the Categories page
 */

import {
    IShowcaseItemRepository,
    ShowcaseItem,
    ShowcaseStats,
} from '@/src/application/repositories/IShowcaseItemRepository';
import { Metadata } from 'next';

export interface CategoryCardData {
  id: string;
  label: string;
  icon: string;
  itemCount: number;
  items: ShowcaseItem[];
}

export interface CategoriesViewModel {
  categories: CategoryCardData[];
  stats: ShowcaseStats;
}

export class CategoriesPresenter {
  constructor(private readonly repository: IShowcaseItemRepository) {}

  async getViewModel(
    categoryConfig: ReadonlyArray<{ id: string; label: string; icon: string }>
  ): Promise<CategoriesViewModel> {
    try {
      const [stats, allItems] = await Promise.all([
        this.repository.getStats(),
        this.repository.getAll(),
      ]);

      // Build category cards (skip "all")
      const categories: CategoryCardData[] = categoryConfig
        .filter((c) => c.id !== 'all')
        .map((cat) => {
          const items = allItems.filter((item) => item.category === cat.id);
          return {
            id: cat.id,
            label: cat.label,
            icon: cat.icon,
            itemCount: items.length,
            items: items.slice(0, 3), // preview first 3
          };
        });

      return { categories, stats };
    } catch (error) {
      console.error('Error getting categories view model:', error);
      throw error;
    }
  }

  generateMetadata(): Metadata {
    return {
      title: 'หมวดหมู่ — PromptUI',
      description:
        'สำรวจ UI ตัวอย่างจากทุกหมวดหมู่ — Login, Dashboard, Landing Page, E-Commerce และอื่น ๆ',
    };
  }
}
