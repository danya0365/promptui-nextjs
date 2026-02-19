/**
 * StaticShowcaseLivePreviewRepository
 * Static data for live preview availability per showcase × AI agent
 * Following Clean Architecture — Infrastructure Layer
 */

import {
    AiAgent,
    IShowcaseLivePreviewRepository,
    ShowcaseLivePreview,
} from '@/src/application/repositories/IShowcaseLivePreviewRepository';

const LIVE_PREVIEWS: ShowcaseLivePreview[] = [
  {
    id: 'lp-001',
    showcaseId: 'showcase-001',
    aiAgent: 'antigravity',
    isActive: true,
    createdAt: '2025-06-15T10:30:00.000Z',
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

  async getByAiAgent(agent: AiAgent): Promise<ShowcaseLivePreview[]> {
    if (agent === ('all' as string)) return this.getAll();
    return this.previews.filter(
      (p) => p.aiAgent === agent && p.isActive
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
