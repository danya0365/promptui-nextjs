/**
 * HomePresenter
 * Handles business logic for the Home page
 * Receives repository via dependency injection
 */

import {
    IShowcaseItemRepository,
    ShowcaseItem,
    ShowcaseStats,
} from '@/src/application/repositories/IShowcaseItemRepository';
import { Metadata } from 'next';

export interface HomeViewModel {
  featuredItems: ShowcaseItem[];
  allItems: ShowcaseItem[];
  stats: ShowcaseStats;
}

/**
 * Presenter for Home page
 * ✅ Receives repository via constructor injection
 */
export class HomePresenter {
  constructor(private readonly repository: IShowcaseItemRepository) {}

  /**
   * Get view model for the home page
   */
  async getViewModel(): Promise<HomeViewModel> {
    try {
      const [allItems, featuredItems, stats] = await Promise.all([
        this.repository.getAll(),
        this.repository.getFeatured(),
        this.repository.getStats(),
      ]);

      return {
        featuredItems,
        allItems,
        stats,
      };
    } catch (error) {
      console.error('Error getting home view model:', error);
      throw error;
    }
  }

  /**
   * Get items filtered by category
   */
  async getItemsByCategory(category: string): Promise<ShowcaseItem[]> {
    try {
      return await this.repository.getByCategory(category);
    } catch (error) {
      console.error('Error filtering by category:', error);
      throw error;
    }
  }

  /**
   * Generate metadata for SEO
   */
  generateMetadata(): Metadata {
    return {
      title: 'PromptUI — UI Showcase Gallery',
      description:
        'ค้นพบ UI สวย ๆ พร้อม prompt ที่ใช้สร้าง — copy ไปใช้กับ AI ได้ทันที',
    };
  }
}
