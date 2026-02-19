
import {
  AiModel,
  IShowcaseLivePreviewRepository,
  ShowcaseLivePreview,
} from '@/src/application/repositories/IShowcaseLivePreviewRepository';

const LIVE_PREVIEWS: ShowcaseLivePreview[] = [
  {
    id: 'lp-001',
    showcaseId: 'showcase-001',
    aiModel: 'claude-4-sonnet',
    isActive: true,
    createdAt: '2025-06-15T10:30:00.000Z',
  },
  {
    id: 'lp-002',
    showcaseId: 'showcase-001',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-15T11:00:00.000Z',
  },
];

export class StaticShowcaseLivePreviewRepository
  implements IShowcaseLivePreviewRepository
{
  private previews: ShowcaseLivePreview[] = [...LIVE_PREVIEWS];

  async getByShowcaseId(showcaseId: string): Promise<ShowcaseLivePreview[]> {
    return this.previews.filter(
      (p) => p.showcaseId === showcaseId && p.isActive
    );
  }

  async getByAiModel(model: AiModel): Promise<ShowcaseLivePreview[]> {
    if (model === ('all' as string)) return this.getAll();
    return this.previews.filter(
      (p) => p.aiModel === model && p.isActive
    );
  }

  async getAll(): Promise<ShowcaseLivePreview[]> {
    return this.previews.filter((p) => p.isActive);
  }

  async getShowcaseIdsWithPreviews(): Promise<string[]> {
    const ids = new Set(
      this.previews.filter((p) => p.isActive).map((p) => p.showcaseId)
    );
    return Array.from(ids);
  }
}

export const staticShowcaseLivePreviewRepository =
  new StaticShowcaseLivePreviewRepository();
