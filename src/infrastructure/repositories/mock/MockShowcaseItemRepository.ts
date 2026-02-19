/**
 * MockShowcaseItemRepository
 * Mock implementation for development and testing
 * Following Clean Architecture — Infrastructure Layer
 */

import {
    CreateShowcaseItemData,
    IShowcaseItemRepository,
    PaginatedResult,
    ShowcaseItem,
    ShowcaseStats,
    UpdateShowcaseItemData,
} from '@/src/application/repositories/IShowcaseItemRepository';

const MOCK_SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'showcase-001',
    title: 'Glassmorphism Login Form',
    description:
      'ฟอร์ม Login สุดหรูพร้อม glassmorphism effect, gradient border, และ floating label animation',
    category: 'login',
    prompt:
      'Create a premium login form with glassmorphism effect. Use frosted glass background with blur, gradient border animation, floating labels that animate on focus, a gradient submit button with hover glow, and social login buttons. Dark mode support with deep purple tones.',
    thumbnailUrl: '/thumbnails/glass-login.webp',
    tags: ['glassmorphism', 'login', 'animation', 'dark-mode'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-15T10:30:00.000Z',
    updatedAt: '2025-06-15T10:30:00.000Z',
  },
  {
    id: 'showcase-002',
    title: 'Analytics Dashboard',
    description:
      'Dashboard แบบโมเดิร์นพร้อมกราฟ, สถิติแบบเรียลไทม์ และ sidebar navigation',
    category: 'dashboard',
    prompt:
      'Build a modern analytics dashboard with a collapsible sidebar, stat cards with trend indicators, area charts and bar graphs, a data table with sorting, and a notification bell. Use a dark theme with neon accent colors and smooth transition animations.',
    thumbnailUrl: '/thumbnails/analytics-dash.webp',
    tags: ['dashboard', 'charts', 'analytics', 'dark-theme'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-14T09:00:00.000Z',
    updatedAt: '2025-06-14T09:00:00.000Z',
  },
  {
    id: 'showcase-003',
    title: 'SaaS Landing Page',
    description:
      'Landing page สำหรับ SaaS product พร้อม hero section, pricing table และ testimonials',
    category: 'landing',
    prompt:
      'Design a SaaS landing page with an animated hero section featuring floating 3D elements, a feature grid with icon cards, a pricing table with popular plan highlight, customer testimonials carousel, and a CTA section with gradient background. Responsive for mobile.',
    thumbnailUrl: '/thumbnails/saas-landing.webp',
    tags: ['landing-page', 'saas', 'pricing', 'responsive'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-13T08:00:00.000Z',
    updatedAt: '2025-06-13T08:00:00.000Z',
  },
  {
    id: 'showcase-004',
    title: 'Product Card Grid',
    description:
      'การ์ดสินค้าแบบ E-Commerce พร้อม hover effect, quick view และ add-to-cart animation',
    category: 'ecommerce',
    prompt:
      'Create an e-commerce product card grid. Each card has an image with zoom-on-hover, a quick view overlay, price with discount badge, star ratings, and an add-to-cart button with spring animation. Include a filter sidebar and sort dropdown.',
    thumbnailUrl: '/thumbnails/product-cards.webp',
    tags: ['ecommerce', 'card', 'hover-effect', 'grid'],
    difficulty: 'beginner',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-12T11:00:00.000Z',
    updatedAt: '2025-06-12T11:00:00.000Z',
  },
  {
    id: 'showcase-005',
    title: 'Multi-Step Registration',
    description:
      'ฟอร์มลงทะเบียนแบบ multi-step พร้อม progress bar, validation และ smooth transitions',
    category: 'form',
    prompt:
      'Build a multi-step registration form with a progress bar showing current step, form validation with inline error messages, smooth slide transitions between steps, file upload with drag-and-drop, and a completion celebration animation. Use a clean, minimal design.',
    thumbnailUrl: '/thumbnails/multi-step-form.webp',
    tags: ['form', 'multi-step', 'validation', 'animation'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-11T15:30:00.000Z',
    updatedAt: '2025-06-11T15:30:00.000Z',
  },
  {
    id: 'showcase-006',
    title: 'Profile Card Collection',
    description:
      'การ์ดโปรไฟล์แบบ 3D flip, glassmorphism และ neon border effects',
    category: 'card',
    prompt:
      'Design a collection of profile cards with 3D flip animation on hover revealing social links, glassmorphism background, neon gradient borders, avatar with status indicator, skill progress bars, and a follow button with spring animation. Dark mode with vibrant accents.',
    thumbnailUrl: '/thumbnails/profile-cards.webp',
    tags: ['card', '3d-flip', 'glassmorphism', 'neon'],
    difficulty: 'intermediate',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-10T14:00:00.000Z',
    updatedAt: '2025-06-10T14:00:00.000Z',
  },
  {
    id: 'showcase-007',
    title: 'Minimal Blog Landing',
    description:
      'หน้า Blog แบบ minimal ด้วย typography สวย ๆ, reading progress bar และ dark mode',
    category: 'landing',
    prompt:
      'Create a minimal blog landing page with beautiful typography, a featured article hero with gradient overlay, article cards with reading time estimates, a categories sidebar, a reading progress bar at top, and a newsletter signup section. Support both light and dark themes.',
    thumbnailUrl: '/thumbnails/blog-landing.webp',
    tags: ['blog', 'typography', 'minimal', 'dark-mode'],
    difficulty: 'beginner',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-09T10:00:00.000Z',
    updatedAt: '2025-06-09T10:00:00.000Z',
  },
  {
    id: 'showcase-008',
    title: 'Neon Dashboard Widgets',
    description:
      'Dashboard widgets แบบ cyberpunk พร้อม neon glow, animated charts และ glassmorphism panels',
    category: 'dashboard',
    prompt:
      'Build cyberpunk-style dashboard widgets with neon glow effects, animated radial progress rings, glassmorphism stat panels, a mini line chart with gradient fill, notification badges with pulse animation, and a dark background with grid pattern. Use cyan and magenta as accent colors.',
    thumbnailUrl: '/thumbnails/neon-widgets.webp',
    tags: ['dashboard', 'cyberpunk', 'neon', 'widgets'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-08T12:00:00.000Z',
    updatedAt: '2025-06-08T12:00:00.000Z',
  },
];

export class MockShowcaseItemRepository implements IShowcaseItemRepository {
  private items: ShowcaseItem[] = [...MOCK_SHOWCASE_ITEMS];

  async getById(id: string): Promise<ShowcaseItem | null> {
    await this.delay(100);
    return this.items.find((item) => item.id === id) || null;
  }

  async getAll(): Promise<ShowcaseItem[]> {
    await this.delay(100);
    return [...this.items].filter((item) => item.isActive);
  }

  async getPaginated(
    page: number,
    perPage: number
  ): Promise<PaginatedResult<ShowcaseItem>> {
    await this.delay(100);
    const activeItems = this.items.filter((item) => item.isActive);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return {
      data: activeItems.slice(start, end),
      total: activeItems.length,
      page,
      perPage,
    };
  }

  async getByCategory(category: string): Promise<ShowcaseItem[]> {
    await this.delay(100);
    if (category === 'all') return this.getAll();
    return this.items.filter(
      (item) => item.category === category && item.isActive
    );
  }

  async getFeatured(): Promise<ShowcaseItem[]> {
    await this.delay(100);
    return this.items.filter((item) => item.isFeatured && item.isActive);
  }

  async create(data: CreateShowcaseItemData): Promise<ShowcaseItem> {
    await this.delay(200);
    const newItem: ShowcaseItem = {
      id: `showcase-${Date.now()}`,
      title: data.title,
      description: data.description,
      category: data.category,
      prompt: data.prompt,
      thumbnailUrl: data.thumbnailUrl || '',
      tags: data.tags || [],
      difficulty: data.difficulty || 'beginner',
      isFeatured: data.isFeatured || false,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.items.unshift(newItem);
    return newItem;
  }

  async update(
    id: string,
    data: UpdateShowcaseItemData
  ): Promise<ShowcaseItem> {
    await this.delay(200);
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('ShowcaseItem not found');

    const updatedItem: ShowcaseItem = {
      ...this.items[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    this.items[index] = updatedItem;
    return updatedItem;
  }

  async delete(id: string): Promise<boolean> {
    await this.delay(200);
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  async getStats(): Promise<ShowcaseStats> {
    await this.delay(100);
    const activeItems = this.items.filter((item) => item.isActive);
    const categoryCounts: Record<string, number> = {};
    activeItems.forEach((item) => {
      categoryCounts[item.category] =
        (categoryCounts[item.category] || 0) + 1;
    });

    return {
      totalItems: activeItems.length,
      activeItems: activeItems.length,
      featuredItems: activeItems.filter((item) => item.isFeatured).length,
      categoryCounts,
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const mockShowcaseItemRepository = new MockShowcaseItemRepository();
