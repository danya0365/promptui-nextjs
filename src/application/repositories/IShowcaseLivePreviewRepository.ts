/**
 * IShowcaseLivePreviewRepository
 * Repository interface for LivePreview (demo) data access
 * Each ShowcaseItem can have multiple LivePreviews, one per AI Model
 * Following Clean Architecture — Application Layer
 */

/**
 * AI Model identifiers — the actual LLM that generated the demo
 * These are models, NOT editors/tools (e.g. Copilot, v0, Bolt are editors)
 */
import { AiModel } from '@/src/config/site.config';

export type { AiModel };

/**
 * ShowcaseLivePreview — links a showcase to a specific AI model's demo
 * Relationship: ShowcaseItem (1) → (N) ShowcaseLivePreview
 */
export interface ShowcaseLivePreview {
  id: string;
  showcaseId: string; // → ShowcaseItem.id
  aiModel: AiModel;
  isActive: boolean;
  createdAt: string;
}

export interface IShowcaseLivePreviewRepository {
  getByShowcaseId(showcaseId: string): Promise<ShowcaseLivePreview[]>;
  getByAiModel(model: AiModel): Promise<ShowcaseLivePreview[]>;
  getAll(): Promise<ShowcaseLivePreview[]>;
  getShowcaseIdsWithPreviews(): Promise<string[]>;
}
