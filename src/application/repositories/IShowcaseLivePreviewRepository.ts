/**
 * IShowcaseLivePreviewRepository
 * Repository interface for LivePreview (demo) data access
 * Each ShowcaseItem can have multiple LivePreviews, one per AI Agent
 * Following Clean Architecture — Application Layer
 */

/** Supported AI agent identifiers */
export type AiAgent =
  | 'antigravity'
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'copilot'
  | 'v0'
  | 'bolt';

/**
 * ShowcaseLivePreview — links a showcase to a specific AI agent's demo
 * Relationship: ShowcaseItem (1) → (N) ShowcaseLivePreview
 */
export interface ShowcaseLivePreview {
  id: string;
  showcaseId: string; // → ShowcaseItem.id
  aiAgent: AiAgent;
  isActive: boolean;
  createdAt: string;
}

export interface IShowcaseLivePreviewRepository {
  getByShowcaseId(showcaseId: string): Promise<ShowcaseLivePreview[]>;
  getByAiAgent(agent: AiAgent): Promise<ShowcaseLivePreview[]>;
  getAll(): Promise<ShowcaseLivePreview[]>;
  getShowcaseIdsWithPreviews(): Promise<string[]>;
}
