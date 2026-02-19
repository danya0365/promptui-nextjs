/**
 * GalleryPresenter
 * Handles business logic for the Gallery page
 * Receives repository via dependency injection
 */

import {
    IShowcaseItemRepository,
    ShowcaseItem,
    ShowcaseStats
} from '@/src/application/repositories/IShowcaseItemRepository';
import { Metadata } from 'next';

export interface GalleryViewModel {
  items: ShowcaseItem[];
  stats: ShowcaseStats;
  totalCount: number;
  page: number;
  perPage: number;
}

export class GalleryPresenter {
  constructor(private readonly repository: IShowcaseItemRepository) {}

  async getViewModel(
    page: number = 1,
    perPage: number = 12
  ): Promise<GalleryViewModel> {
    try {
      const [paginatedResult, stats] = await Promise.all([
        this.repository.getPaginated(page, perPage),
        this.repository.getStats(),
      ]);

      return {
        items: paginatedResult.data,
        stats,
        totalCount: paginatedResult.total,
        page,
        perPage,
      };
    } catch (error) {
      console.error('Error getting gallery view model:', error);
      throw error;
    }
  }

  async getItemsByCategory(category: string): Promise<ShowcaseItem[]> {
    try {
      return await this.repository.getByCategory(category);
    } catch (error) {
      console.error('Error filtering by category:', error);
      throw error;
    }
  }

  async getAllItems(): Promise<ShowcaseItem[]> {
    try {
      return await this.repository.getAll();
    } catch (error) {
      console.error('Error getting all items:', error);
      throw error;
    }
  }

  async getItemById(id: string): Promise<ShowcaseItem | null> {
    try {
      return await this.repository.getById(id);
    } catch (error) {
      console.error('Error getting item by id:', error);
      throw error;
    }
  }

  generateMetadata(): Metadata {
    return {
      title: 'แกลเลอรี — PromptUI',
      description:
        'สำรวจ UI ตัวอย่างทั้งหมด พร้อม prompt สำหรับ AI ให้คุณ copy ไปใช้ได้เลย',
    };
  }
}
