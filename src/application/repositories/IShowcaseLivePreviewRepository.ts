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
export type AiModel =
  | 'gpt-4o'
  | 'gpt-4.1'
  | 'claude-3.7-sonnet'
  | 'claude-4-sonnet'
  | 'gemini-2.5-pro'
  | 'gemini-2.5-flash'
  | 'deepseek-v3'
  | 'deepseek-r1'
  | 'grok-3'
  | 'llama-4';

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
