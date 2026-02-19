/**
 * IShowcaseItemRepository
 * Repository interface for ShowcaseItem data access
 * Following Clean Architecture — Application Layer
 */

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  thumbnailUrl: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ShowcaseStats {
  totalItems: number;
  activeItems: number;
  featuredItems: number;
  categoryCounts: Record<string, number>;
}

export interface CreateShowcaseItemData {
  title: string;
  description: string;
  category: string;
  prompt: string;
  thumbnailUrl?: string;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  isFeatured?: boolean;
}

export interface UpdateShowcaseItemData {
  title?: string;
  description?: string;
  category?: string;
  prompt?: string;
  thumbnailUrl?: string;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  isFeatured?: boolean;
  isActive?: boolean;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

export interface IShowcaseItemRepository {
  getById(id: string): Promise<ShowcaseItem | null>;
  getAll(): Promise<ShowcaseItem[]>;
  getPaginated(page: number, perPage: number, category?: string): Promise<PaginatedResult<ShowcaseItem>>;
  getByCategory(category: string): Promise<ShowcaseItem[]>;
  getFeatured(): Promise<ShowcaseItem[]>;
  create(data: CreateShowcaseItemData): Promise<ShowcaseItem>;
  update(id: string, data: UpdateShowcaseItemData): Promise<ShowcaseItem>;
  delete(id: string): Promise<boolean>;
  getStats(): Promise<ShowcaseStats>;
}
