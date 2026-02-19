/**
 * StaticShowcaseItemRepository
 * Static data implementation — hardcoded showcase items
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

const SHOWCASE_ITEMS: ShowcaseItem[] = [
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
  {
    id: 'showcase-009',
    title: 'Finance Banking Dashboard',
    description:
      'Dashboard สำหรับแอปธนาคารพร้อมยอดเงิน, กราฟรายรับ-รายจ่าย, การ์ดบัญชี และรายการธุรกรรมล่าสุด',
    category: 'dashboard',
    prompt:
      'Create a premium finance/banking dashboard with a wallet balance hero card showing total balance with trend percentage, a mini area chart for income vs expenses over 6 months, credit/debit card carousel with 3D tilt effect, recent transactions list with category icons and color-coded amounts (green for income, red for expense), quick action buttons (transfer, pay, top-up, invest), and a spending breakdown donut chart. Use a sophisticated dark navy theme with gold and emerald accents. Add subtle glassmorphism on cards.',
    thumbnailUrl: '/thumbnails/finance-dashboard.webp',
    tags: ['dashboard', 'finance', 'banking', 'charts', 'dark-theme'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-07T10:00:00.000Z',
    updatedAt: '2025-06-07T10:00:00.000Z',
  },
  {
    id: 'showcase-010',
    title: 'Project Management Board',
    description:
      'Kanban board สำหรับจัดการโปรเจค พร้อม drag & drop, progress bars และ team member avatars',
    category: 'dashboard',
    prompt:
      'Build a project management dashboard with a Kanban board layout (columns: To Do, In Progress, Review, Done) with task cards that show title, priority badge (low/medium/high/urgent), due date, assignee avatar, and subtask progress bar. Include a top bar with project selector dropdown, team member avatar stack with online indicators, a timeline Gantt chart mini-view, and sprint progress stats (completed, remaining, blocked). Use a clean white/light gray theme with vibrant colored priority badges. Add smooth hover lift animations on cards.',
    thumbnailUrl: '/thumbnails/project-board.webp',
    tags: ['dashboard', 'kanban', 'project-management', 'productivity'],
    difficulty: 'advanced',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-06T09:00:00.000Z',
    updatedAt: '2025-06-06T09:00:00.000Z',
  },
  {
    id: 'showcase-011',
    title: 'Health & Fitness Tracker',
    description:
      'Dashboard สุขภาพพร้อม step counter, heart rate monitor, calorie tracker และ sleep analysis',
    category: 'dashboard',
    prompt:
      'Design a health and fitness tracker dashboard with a daily step counter radial progress ring with animated fill, heart rate monitor showing current BPM with a live pulse line chart, calorie intake vs burn bar comparison, sleep analysis showing duration and quality phases (deep, light, REM) in stacked bars, weekly activity heatmap calendar, workout log with exercise type icons, and hydration tracker with water glass fill animation. Use a fresh green and blue gradient theme on dark background. Add pulse animation on heart rate and smooth counting animations on numbers.',
    thumbnailUrl: '/thumbnails/fitness-dashboard.webp',
    tags: ['dashboard', 'health', 'fitness', 'charts', 'animation'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T11:00:00.000Z',
    updatedAt: '2025-06-05T11:00:00.000Z',
  },
  {
    id: 'showcase-012',
    title: 'Social Media Analytics',
    description:
      'Dashboard วิเคราะห์โซเชียลมีเดียพร้อมกราฟ engagement, follower growth และ content performance',
    category: 'dashboard',
    prompt:
      'Create a social media analytics dashboard with platform tabs (Instagram, Twitter, TikTok, YouTube) each with its brand color, a follower growth line chart with gradient fill showing 30-day trend, engagement rate gauge meter, top performing posts grid with thumbnail preview and engagement stats (likes, comments, shares), audience demographics pie chart (age groups, gender), best posting time heatmap, and a content calendar mini-view. Use a modern dark theme with each social platform accent color dynamically applied. Add counting animations on stats and smooth chart transitions when switching platforms.',
    thumbnailUrl: '/thumbnails/social-analytics.webp',
    tags: ['dashboard', 'social-media', 'analytics', 'charts'],
    difficulty: 'advanced',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-04T14:00:00.000Z',
    updatedAt: '2025-06-04T14:00:00.000Z',
  },
  {
    id: 'showcase-013',
    title: 'E-Commerce Admin Panel',
    description:
      'แผงควบคุม E-Commerce พร้อมยอดขาย, สถานะออร์เดอร์, สินค้าขายดี และ revenue chart',
    category: 'dashboard',
    prompt:
      'Build an e-commerce admin dashboard with KPI stat cards at top (total revenue with sparkline, orders count, conversion rate, average order value) each with trend arrow indicators, a revenue vs orders dual-axis area/bar combo chart, order status pipeline (pending → processing → shipped → delivered) with counts, best-selling products table with rank numbers and mini product images and sales bars, recent orders list with status badges (processing=blue, shipped=amber, delivered=green, cancelled=red), and a world map showing sales by country with hover tooltips. Use a professional light theme with indigo as primary accent.',
    thumbnailUrl: '/thumbnails/ecommerce-admin.webp',
    tags: ['dashboard', 'ecommerce', 'admin', 'charts', 'table'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T08:00:00.000Z',
    updatedAt: '2025-06-03T08:00:00.000Z',
  },
  {
    id: 'showcase-014',
    title: 'IoT Smart Home Dashboard',
    description:
      'Dashboard สำหรับบ้านอัจฉริยะ พร้อมควบคุมอุปกรณ์ IoT, กราฟพลังงาน และ room controls',
    category: 'dashboard',
    prompt:
      'Design a smart home IoT dashboard with a house floor plan overview showing room zones with device indicators, device control cards for lights (on/off toggle with brightness slider), thermostat (circular temperature dial with current vs target), security cameras (grid of live feed placeholders with status dot), energy consumption area chart showing daily usage over a week, quick scene buttons (Good Morning, Movie Night, Away Mode, Sleep) with relevant icons, weather widget showing current conditions and 5-day forecast, and a device status list with online/offline badges. Use a warm dark theme with amber and cyan accents. Add toggle switch animations and smooth slider interactions.',
    thumbnailUrl: '/thumbnails/smart-home.webp',
    tags: ['dashboard', 'iot', 'smart-home', 'controls', 'dark-theme'],
    difficulty: 'intermediate',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-02T10:00:00.000Z',
    updatedAt: '2025-06-02T10:00:00.000Z',
  },
];

export class StaticShowcaseItemRepository implements IShowcaseItemRepository {
  private items: ShowcaseItem[] = [...SHOWCASE_ITEMS];

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
    perPage: number,
    category?: string
  ): Promise<PaginatedResult<ShowcaseItem>> {
    await this.delay(100);
    let activeItems = this.items.filter((item) => item.isActive);

    if (category && category !== 'all') {
      activeItems = activeItems.filter((item) => item.category === category);
    }

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

export const staticShowcaseItemRepository = new StaticShowcaseItemRepository();
