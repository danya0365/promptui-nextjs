/**
 * ShowcaseDetailPresenter
 * Handles business logic for the Showcase Detail page
 */

import {
    IShowcaseItemRepository,
    ShowcaseItem,
} from '@/src/application/repositories/IShowcaseItemRepository';
import {
    IShowcaseLivePreviewRepository,
    ShowcaseLivePreview,
} from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { Metadata } from 'next';

export interface ShowcaseDetailViewModel {
  item: ShowcaseItem;
  relatedItems: ShowcaseItem[];
  livePreviews: ShowcaseLivePreview[];
}

export class ShowcaseDetailPresenter {
  constructor(
    private readonly repository: IShowcaseItemRepository,
    private readonly livePreviewRepository: IShowcaseLivePreviewRepository
  ) {}

  async getViewModel(id: string): Promise<ShowcaseDetailViewModel | null> {
    try {
      const item = await this.repository.getById(id);
      if (!item) return null;

      // Get related items from same category (excluding current)
      const categoryItems = await this.repository.getByCategory(item.category);
      const relatedItems = categoryItems
        .filter((i) => i.id !== id)
        .slice(0, 3);

      // Get live previews for this showcase
      const livePreviews =
        await this.livePreviewRepository.getByShowcaseId(id);

      return { item, relatedItems, livePreviews };
    } catch (error) {
      console.error('Error getting showcase detail:', error);
      throw error;
    }
  }

  async generateMetadata(id: string): Promise<Metadata> {
    try {
      const item = await this.repository.getById(id);
      if (!item) {
        return {
          title: 'ไม่พบ UI — PromptUI',
          description: 'ไม่พบ UI ตัวอย่างที่ต้องการ',
        };
      }
      return {
        title: `${item.title} — PromptUI`,
        description: item.description,
      };
    } catch {
      return {
        title: 'รายละเอียด UI — PromptUI',
        description: 'ดูรายละเอียด UI ตัวอย่างพร้อม prompt สำหรับ AI',
      };
    }
  }
}
