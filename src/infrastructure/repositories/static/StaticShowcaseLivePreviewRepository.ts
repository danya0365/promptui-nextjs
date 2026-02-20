
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
  {
    id: 'lp-003',
    showcaseId: 'showcase-002',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-16T09:00:00.000Z',
  },
  {
    id: 'lp-004',
    showcaseId: 'showcase-008',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-17T14:00:00.000Z',
  },
  {
    id: 'lp-005',
    showcaseId: 'showcase-003',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T09:00:00.000Z',
  },
  {
    id: 'lp-006',
    showcaseId: 'showcase-004',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T10:00:00.000Z',
  },
  {
    id: 'lp-007',
    showcaseId: 'showcase-005',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T11:00:00.000Z',
  },
  {
    id: 'lp-008',
    showcaseId: 'showcase-006',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T12:00:00.000Z',
  },
  {
    id: 'lp-009',
    showcaseId: 'showcase-007',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T13:00:00.000Z',
  },
  {
    id: 'lp-010',
    showcaseId: 'showcase-009',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T14:00:00.000Z',
  },
  {
    id: 'lp-011',
    showcaseId: 'showcase-010',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T15:00:00.000Z',
  },
  {
    id: 'lp-012',
    showcaseId: 'showcase-011',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T16:00:00.000Z',
  },
  {
    id: 'lp-013',
    showcaseId: 'showcase-012',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T17:00:00.000Z',
  },
  {
    id: 'lp-014',
    showcaseId: 'showcase-013',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T18:00:00.000Z',
  },
  {
    id: 'lp-015',
    showcaseId: 'showcase-014',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T19:00:00.000Z',
  },
  {
    id: 'lp-016',
    showcaseId: 'showcase-015',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T20:00:00.000Z',
  },
  {
    id: 'lp-017',
    showcaseId: 'showcase-016',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T21:00:00.000Z',
  },
  {
    id: 'lp-018',
    showcaseId: 'showcase-017',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T22:00:00.000Z',
  },
  {
    id: 'lp-019',
    showcaseId: 'showcase-018',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T23:00:00.000Z',
  },
  {
    id: 'lp-020',
    showcaseId: 'showcase-019',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-18T23:30:00.000Z',
  },
  {
    id: 'lp-021',
    showcaseId: 'showcase-020',
    aiModel: 'gemini-3-pro',
    isActive: true,
    createdAt: '2025-06-19T00:00:00.000Z',
  },
  {
    id: 'lp-022',
    showcaseId: 'showcase-021',
    aiModel: 'gemini-3.1-pro',
    isActive: true,
    createdAt: '2025-06-19T01:00:00.000Z',
  },
  {
    id: 'lp-023',
    showcaseId: 'showcase-022',
    aiModel: 'gemini-3.1-pro',
    isActive: true,
    createdAt: '2025-06-19T02:00:00.000Z',
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
