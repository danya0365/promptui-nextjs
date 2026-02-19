/**
 * GalleryPresenter
 * Handles business logic for the Gallery page
 * Receives repositories via dependency injection
 */

import {
    IShowcaseItemRepository,
    ShowcaseItem,
    ShowcaseStats
} from '@/src/application/repositories/IShowcaseItemRepository';
import {
    IShowcaseLivePreviewRepository,
    ShowcaseLivePreview,
} from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { Metadata } from 'next';

export interface GalleryViewModel {
  items: ShowcaseItem[];
  stats: ShowcaseStats;
  totalCount: number;
  page: number;
  perPage: number;
  /** Map of showcaseId → list of live previews */
  livePreviewMap: Record<string, ShowcaseLivePreview[]>;
}

export class GalleryPresenter {
  constructor(
    private readonly repository: IShowcaseItemRepository,
    private readonly livePreviewRepository: IShowcaseLivePreviewRepository
  ) {}

  async getViewModel(
    page: number = 1,
    perPage: number = 12
  ): Promise<GalleryViewModel> {
    try {
      const [paginatedResult, stats, allPreviews] = await Promise.all([
        this.repository.getPaginated(page, perPage),
        this.repository.getStats(),
        this.livePreviewRepository.getAll(),
      ]);

      // Build lookup map: showcaseId → previews[]
      const livePreviewMap: Record<string, ShowcaseLivePreview[]> = {};
      allPreviews.forEach((p) => {
        if (!livePreviewMap[p.showcaseId]) livePreviewMap[p.showcaseId] = [];
        livePreviewMap[p.showcaseId].push(p);
      });

      return {
        items: paginatedResult.data,
        stats,
        totalCount: paginatedResult.total,
        page,
        perPage,
        livePreviewMap,
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

  async getShowcaseIdsByModel(model: string): Promise<string[]> {
    try {
      if (model === 'all') {
        return await this.livePreviewRepository.getShowcaseIdsWithPreviews();
      }
      const previews = await this.livePreviewRepository.getByAiModel(
        model as import('@/src/application/repositories/IShowcaseLivePreviewRepository').AiModel
      );
      return previews.map((p) => p.showcaseId);
    } catch (error) {
      console.error('Error getting showcases by model:', error);
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
