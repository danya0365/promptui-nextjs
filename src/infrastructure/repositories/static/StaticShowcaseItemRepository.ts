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
  {
    id: 'showcase-015',
    title: 'Music Player Dashboard',
    description: 'Music Player UI พร้อม Waveform animation, Playlist management และ Dark theme',
    category: 'dashboard',
    prompt: 'Design a sleek music player dashboard with a vinyl record spin animation, real-time waveform visualizer, collapsible playlist sidebar, and glassmorphism player controls. Use a dark purple/midnight theme with neon accents.',
    thumbnailUrl: '/thumbnails/music-player.webp',
    tags: ['dashboard', 'music', 'streaming', 'dark-theme'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-01T15:00:00.000Z',
    updatedAt: '2025-06-01T15:00:00.000Z',
  },
  {
    id: 'showcase-016',
    title: 'Smart Calendar App',
    description: 'แอปปฏิทินแบบ Modern Clean UI พร้อม drag & drop events และ view switching',
    category: 'productivity',
    prompt: 'Create a modern calendar app interface with clean grid view, color-coded events, sidebar mini-calendar, view switcher (month/week/day), and floating create button. Use a clean material design inspired look with soft shadows.',
    thumbnailUrl: '/thumbnails/calendar-app.webp',
    tags: ['calendar', 'productivity', 'scheduler', 'clean-ui'],
    difficulty: 'intermediate',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-01T16:00:00.000Z',
    updatedAt: '2025-06-01T16:00:00.000Z',
  },
  {
    id: 'showcase-017',
    title: 'Cloud File Manager',
    description: 'File Manager UI พร้อม Folder Grid, Breadcrumbs navigation และ Storage usage visualizer',
    category: 'dashboard',
    prompt: 'Build a cloud file manager dashboard with a folder grid layout, file list view with file type icons, breadcrumb navigation, sidebar storage meter, and drag-drop upload zone. Use a crisp, professional blue/white color scheme.',
    thumbnailUrl: '/thumbnails/file-manager.webp',
    tags: ['file-manager', 'dashboard', 'cloud', 'clean-ui'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-01T17:00:00.000Z',
    updatedAt: '2025-06-01T17:00:00.000Z',
  },
  {
    id: 'showcase-018',
    title: 'AI Chat Interface',
    description: 'แชทบอท UI (ChatGPT Style) พร้อม code highlighting และ streaming text effect',
    category: 'dashboard',
    prompt: 'Design a modern AI chat interface similar to ChatGPT. Include a sidebar for chat history, a main chat window with bubble messages, avatar icons, markdown support for code blocks with syntax highlighting, and a floating input area with send button. Use a clean dark mode theme.',
    thumbnailUrl: '/thumbnails/ai-chat.webp',
    tags: ['chat', 'ai', 'messaging', 'dark-mode'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-01T18:00:00.000Z',
    updatedAt: '2025-06-01T18:00:00.000Z',
  },
  {
    id: 'showcase-019',
    title: 'Travel Booking App',
    description: 'แอปจองที่เที่ยวแบบ Masonry Grid พร้อม Filter bar และ Map toggle button',
    category: 'ecommerce',
    prompt: 'Create a travel booking application with a masonry grid layout for location cards. Each card should feature a large image, location name, rating, dates, and price. Include a sticky top navigation with search bar, a horizontal scrollable category filter (Islands, Camping, etc.), and a floating "Show Map" button.',
    thumbnailUrl: '/thumbnails/travel-app.webp',
    tags: ['travel', 'booking', 'masonry', 'card'],
    difficulty: 'intermediate',
    isFeatured: false,
    isActive: true,
    createdAt: '2025-06-01T19:00:00.000Z',
    updatedAt: '2025-06-01T19:00:00.000Z',
  },
  {
    id: 'showcase-020',
    title: 'Recipe & Cooking App',
    description: 'แอปสอนทำอาหารพร้อม Interactive Ingredient Checklist และ Nutrition Chart',
    category: 'mobile',
    prompt: 'Build a recipe cooking app interface. Start with a large hero image, floating back/save buttons, detailed recipe title and description. Include cooking stats (prep time, cook time, difficulty), an interactive ingredient list where items can be checked off, and a nutrition facts visualization using circular charts. Use a warm, appetizing color palette.',
    thumbnailUrl: '/thumbnails/recipe-app.webp',
    tags: ['recipe', 'cooking', 'mobile', 'interactive'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-01T20:00:00.000Z',
    updatedAt: '2025-06-01T20:00:00.000Z',
  },
  {
    id: 'showcase-021',
    title: 'Neo-Brutalism Prompt Gallery',
    description: 'แกลเลอรี Prompt ดีไซน์ Neo-Brutalism ขอบดำหนา สีสันสดใสป๊อปๆ จัดเรียงซ้อนกันสไตล์คอมิกส์',
    category: 'card',
    prompt: 'Create a neo-brutalist prompt gallery interface. Use thick black borders, flat vibrant yellow accents, and hard offset shadows. Each card should have an author handle, publish date, a bold typography headline, a thumbnail image with a gradient overlay, a prompt description, a dark monolith container for the underlying prompt text with a monospace font and a "copy" button, and a footer with a "Try it out" button and share icons. Add a header with a search bar and tag count filters styled in the same bold brutalist aesthetic.',
    thumbnailUrl: '/thumbnails/neo-brutalism.webp',
    tags: ['brutalism', 'neo-brutalism', 'gallery', 'prompt'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T10:00:00.000Z',
    updatedAt: '2025-06-02T10:00:00.000Z',
  },
  {
    id: 'showcase-022',
    title: 'Futuristic Glassmorphism Directory',
    description: 'หน้า Directory รวมคอลเล็กชันรูปแบบ Glassmorphism แห่งอนาคต พร้อมเอฟเฟกต์เบลอและแสงตกกระทบ',
    category: 'dashboard',
    prompt: 'Create a futuristic glassmorphism web directory layout.\n\nStructure:\n- 3 column grid\n- Tall content cards\n- Header with tab navigation\n- Floating counter badge\n- Small label tag on featured cards\n\nStyle:\n- Frosted glass panels with backdrop blur\n- Soft gradient background (blue to purple)\n- Rounded corners (16px)\n- Subtle soft shadows\n- Light glow accents\n- Thin modern sans-serif typography\n- Airy spacing and smooth UI feel\n\nMood:\nElegant, futuristic, soft, premium SaaS aesthetic.',
    thumbnailUrl: '/thumbnails/glass-dir.webp',
    tags: ['glassmorphism', 'directory', 'futuristic', 'grid'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T11:00:00.000Z',
    updatedAt: '2025-06-02T11:00:00.000Z',
  },
  {
    id: 'showcase-023',
    title: 'Retro 90s Tech Magazine',
    description: 'เรโทร UI สไตล์นิตยสารไอทียุค 90 โทนสีจี๊ดจ๊าด (Cyan, Magenta, Lime) และการจัดวางช่องแบบอิสระ',
    category: 'landing',
    prompt: 'Design a retro 90s inspired tech magazine web layout.\n\nStructure:\n- 3 column editorial grid\n- Large vertical cards\n- Top navigation tabs\n- Highlight badge with bold numbers\n- Featured label sticker element\n\nStyle:\n- Vibrant color palette (cyan, magenta, lime)\n- Playful background patterns\n- Slight grain texture\n- Bold condensed typography\n- Mixed font sizes\n- Slightly exaggerated spacing\n- Fun and energetic composition\n\nMood:\nCreative, expressive, nostalgic, tech-zine inspired.',
    thumbnailUrl: '/thumbnails/retro-mag.webp',
    tags: ['retro', 'magazine', '90s', 'vibrant', 'grid'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T12:00:00.000Z',
    updatedAt: '2025-06-02T12:00:00.000Z',
  },
  {
    id: 'showcase-024',
    title: 'Luxury Minimal Editorial Directory',
    description: 'แพลตฟอร์มบทความดีไซน์เรียบหรูระดับพรีเมียม โทนสีครีม-ถ่าน และตัวหนังสือแบบมีหัวเสา (Serif) สะอาดตา',
    category: 'dashboard',
    prompt: 'Create a luxury minimal editorial web directory.\n\nStructure:\n- 3 column grid\n- Tall elegant content cards\n- Refined header tabs\n- Subtle numeric counter badge\n- Discreet featured label\n\nStyle:\n- Neutral color palette (cream, charcoal, muted gold)\n- Thin serif headlines\n- Large white space\n- Ultra clean spacing\n- Very subtle shadows\n- Smooth rounded corners (8px)\n\nMood:\nPremium, calm, high-end publication.',
    thumbnailUrl: '/thumbnails/luxury-editorial.webp',
    tags: ['luxury', 'editorial', 'minimal', 'magazine'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T13:00:00.000Z',
    updatedAt: '2025-06-02T13:00:00.000Z',
  },
  {
    id: 'showcase-025',
    title: 'Cyberpunk Dark Web Interface',
    description: 'เทอร์มินัลสไตล์ Hacker โลกอนาคต โทนดำตัดกับแสงนีออน (Cyan/Pink) พร้อมเอฟเฟกต์ Glitch และ Monospace Font',
    category: 'dashboard',
    prompt: 'Design a cyberpunk dark web interface layout.\n\nStructure:\n- 3 column grid system\n- Tall glowing content panels\n- Neon-style header tabs\n- Bright counter badge\n- Digital-style label tag\n\nStyle:\n- Dark background (#0A0A0A)\n- Neon accents (cyan / pink)\n- Subtle glow effects\n- Futuristic monospace typography\n- Light grid overlay texture\n- Slight inner glow borders\n\nMood:\nFuturistic hacker terminal meets modern web platform.',
    thumbnailUrl: '/thumbnails/cyberpunk.webp',
    tags: ['cyberpunk', 'dark', 'neon', 'dashboard', 'terminal'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T14:00:00.000Z',
    updatedAt: '2025-06-02T14:00:00.000Z',
  },
  {
    id: 'showcase-026',
    title: 'Calm Organic Web Directory',
    description: 'แพลตฟอร์มโทนสีธรรมชาติ (Earth-tone) มุมโค้งมน (20px) พร้อมเงาบางเบา ให้อารมณ์ผ่อนคลาย สงบ และเป็นมิตร',
    category: 'dashboard',
    prompt: 'Create a calm organic web directory layout inspired by nature.\n\nStructure:\n- 3 column grid\n- Vertical content cards\n- Simple header navigation\n- Rounded counter badge\n- Soft label marker on featured items\n\nStyle:\n- Earth-tone color palette (sage, sand, clay)\n- Soft rounded corners (20px)\n- Light shadow depth\n- Warm serif headlines\n- Generous breathing space\n- Natural texture inspired UI\n\nMood:\nHuman-centered, mindful, peaceful tech product.',
    thumbnailUrl: '/thumbnails/organic-dir.webp',
    tags: ['organic', 'calm', 'nature', 'earth-tone', 'directory'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T15:00:00.000Z',
    updatedAt: '2025-06-02T15:00:00.000Z',
  },
  {
    id: 'showcase-027',
    title: 'Swiss-Inspired Modern Directory',
    description: 'แพลตฟอร์มแนวคิด Swiss Design เน้นความเป๊ะของ Grid พื้นหลังขาวเรียบสะอาดตา และตัวอักษรสีดำเด่นชัด (Helvetica-style)',
    category: 'dashboard',
    prompt: 'Create a Swiss-inspired modern web directory layout.\n\nStructure:\n- Strict 3-column grid system\n- Vertical content cards\n- Clean header with tab navigation\n- Minimal numeric counter badge\n- Small structured featured label\n\nStyle:\n- Pure white background\n- Black typography only\n- Accent color: muted red\n- Strict alignment and spacing system\n- Thin borders (1-2px)\n- Helvetica-style sans-serif\n- Large asymmetric headlines\n- Strong negative space\n\nMood:\nPrecise, intelligent, structured, timeless design.',
    thumbnailUrl: '/thumbnails/swiss-dir.webp',
    tags: ['swiss', 'modern', 'minimal', 'grid', 'typography'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T16:00:00.000Z',
    updatedAt: '2025-06-02T16:00:00.000Z',
  },
  {
    id: 'showcase-028',
    title: 'Bold AI Startup Web Directory',
    description: 'แพลตฟอร์มไดเรกทอรีแอป AI แนว Startup สไตล์สีเข้ม (Dark gradient) ตัดด้วยแสง Electric blue',
    category: 'dashboard',
    prompt: 'Design a bold AI startup web directory interface.\n\nStructure:\n- 3 column responsive grid\n- Tall modern cards\n- Interactive header tabs\n- Animated counter badge\n- Highlight ribbon on featured cards\n\nStyle:\n- Dark gradient background (deep navy to black)\n- Electric blue accent\n- Subtle glow and light reflections\n- Smooth rounded corners (12px)\n- Soft layered shadows\n- Clean geometric sans-serif\n- Spacious, modern SaaS layout\n\nMood:\nInnovative, fast-growing tech startup, future-ready.',
    thumbnailUrl: '/thumbnails/ai-startup-dir.webp',
    tags: ['ai', 'startup', 'dark-mode', 'directory', 'grid'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T17:00:00.000Z',
    updatedAt: '2025-06-02T17:00:00.000Z',
  },
  {
    id: 'showcase-029',
    title: 'Academic Web Archive',
    description: 'แพลตฟอร์มคลังข้อมูลวิชาการ โทนสีเบจ สบายตา ดูน่าเชื่อถือ และเป็นระเบียบ (Scholarly style)',
    category: 'dashboard',
    prompt: 'Create an academic-style web archive layout.\n\nStructure:\n- 3 column grid\n- Tall structured content cards\n- Simple top navigation tabs\n- Formal numeric counter\n- Small classification label tag\n\nStyle:\n- Soft beige background\n- Dark navy typography\n- Serif headline font\n- Subtle divider lines\n- Minimal decoration\n- Balanced margins\n- Organized metadata presentation\n\nMood:\nTrustworthy, scholarly, informative, archival.',
    thumbnailUrl: '/thumbnails/academic-archive.webp',
    tags: ['academic', 'scholarly', 'archive', 'serif', 'minimal'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T18:00:00.000Z',
    updatedAt: '2025-06-02T18:00:00.000Z',
  },
  {
    id: 'showcase-030',
    title: 'Gaming Platform Directory',
    description: 'หน้าไดเรกทอรีแพลตฟอร์มเกม โทนสีเข้มตัดนีออน ดุดัน มีพลัง (Gaming style)',
    category: 'dashboard',
    prompt: 'Design a gaming platform directory interface.\n\nStructure:\n- 3 column grid\n- Tall immersive content cards\n- Dynamic header navigation tabs\n- Bold animated counter badge\n- Featured glow tag\n\nStyle:\n- Dark charcoal background\n- Vibrant accent colors (orange or neon green)\n- Slight card elevation\n- Rounded corners (10px)\n- Bold gaming-style typography\n- Rich thumbnail emphasis\n- Subtle hover animation\n\nMood:\nEnergetic, immersive, competitive, engaging.',
    thumbnailUrl: '/thumbnails/gaming-platform.webp',
    tags: ['gaming', 'platform', 'neon', 'dark-mode', 'immersive'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T19:00:00.000Z',
    updatedAt: '2025-06-02T19:00:00.000Z',
  },
  {
    id: 'showcase-031',
    title: 'Claymorphism Web Directory',
    description: 'หน้าไดเรกทอรีสีพาสเทลและมิติแบบนุ่มนิ่ม (Claymorphism) โค้งมน เป็นมิตร',
    category: 'dashboard',
    prompt: 'Create a claymorphism-inspired web directory layout.\n\nStructure:\n- 3 column grid\n- Vertical soft 3D cards\n- Rounded tab navigation\n- Bubble-style counter badge\n- Soft floating featured label\n\nStyle:\n- Pastel background\n- Soft shadows with depth\n- Large rounded corners (24px)\n- Subtle embossed effects\n- Friendly rounded typography\n- Smooth spacing and layered surfaces\n\nMood:\nPlayful, friendly, modern digital product.',
    thumbnailUrl: '/thumbnails/claymorphism-dir.webp',
    tags: ['claymorphism', 'pastel', 'soft', '3d', 'friendly'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T20:00:00.000Z',
    updatedAt: '2025-06-02T20:00:00.000Z',
  },
  {
    id: 'showcase-032',
    title: 'High-Contrast Editorial Web Directory',
    description: 'แพลตฟอร์มแมกกาซีน ขาวดำดุดัน เส้นขอบหนา และฟอนต์ขนาดใหญ่',
    category: 'dashboard',
    prompt: 'Create a powerful high-contrast editorial web directory layout.\n\nStructure:\n- 3 column grid\n- Tall dominant content cards\n- Bold tab-style header navigation\n- Large numeric counter badge\n- Diagonal featured label ribbon\n\nStyle:\n- Pure black and white color scheme\n- Oversized typography headlines\n- Ultra thick borders (6px)\n- No rounded corners\n- Strong vertical rhythm\n- Large image blocks with sharp crops\n- Minimal but aggressive layout balance\n\nMood:\nCommanding, bold, fashion-magazine inspired, statement-driven.',
    thumbnailUrl: '/thumbnails/high-contrast-ed.webp',
    tags: ['editorial', 'black-and-white', 'brutalism', 'typography', 'bold'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T21:00:00.000Z',
    updatedAt: '2025-06-02T21:00:00.000Z',
  },
  {
    id: 'showcase-033',
    title: 'Dramatic Futuristic Tech Directory',
    description: 'ไดเรกทอรีสายเทคดุดัน โทนเข้มพร้อมแสงเงาสีไฟ (Fiery gradient) ให้ความรู้สึกทรงพลัง',
    category: 'dashboard',
    prompt: 'Design a dramatic futuristic tech directory interface.\n\nStructure:\n- 3 column structured grid\n- Tall layered content cards\n- Interactive tab navigation\n- Floating counter badge\n- Highlight tag for featured items\n\nStyle:\n- Dark base background\n- Fiery gradient accents (red to orange)\n- Subtle glow around important elements\n- Smooth rounded corners (14px)\n- Soft shadow layering\n- Modern geometric sans-serif typography\n- Strong visual hierarchy\n\nMood:\nHigh-energy, intense, powerful tech ecosystem.',
    thumbnailUrl: '/thumbnails/dramatic-future-tech.webp',
    tags: ['futuristic', 'dark-mode', 'tech', 'neon', 'intense'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T22:00:00.000Z',
    updatedAt: '2025-06-02T22:00:00.000Z',
  },
  {
    id: 'showcase-034',
    title: 'Chrome-Inspired Web Interface',
    description: 'ดีไซน์ล้ำสมัยอารมณ์โลหะ Chrome สีเงินและเทา สะท้อนแสงดูพรีเมียม (Premium Tech)',
    category: 'dashboard',
    prompt: 'Create a chrome-inspired modern web interface.\n\nStructure:\n- 3 column grid system\n- Vertical reflective-style cards\n- Clean top tab navigation\n- Metallic counter badge\n- Premium featured label tag\n\nStyle:\n- Dark graphite background\n- Silver and chrome accents\n- Subtle reflections and gloss effects\n- Rounded corners (10px)\n- Clean bold typography\n- Balanced spacing\n- Futuristic product showcase layout\n\nMood:\nLuxury tech, premium, futuristic, bold presence.',
    thumbnailUrl: '/thumbnails/chrome-interface.png',
    tags: ['chrome', 'metallic', 'luxury', 'technology', 'premium'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-02T23:00:00.000Z',
    updatedAt: '2025-06-02T23:00:00.000Z',
  },
  {
    id: 'showcase-035',
    title: 'Cosmic-Inspired Web Directory',
    description: 'ธีมมืดทรงอวกาศ (Cosmic) เกรเดียนต์สีม่วง-น้ำเงิน และประกายแสงนีออน',
    category: 'dashboard',
    prompt: 'Design a cosmic-inspired modern web directory layout.\n\nStructure:\n- 3 column grid\n- Tall immersive content cards\n- Tab navigation with glowing underline\n- Prominent counter badge\n- Highlight label with subtle rotation\n\nStyle:\n- Deep navy to purple gradient background\n- Neon accent highlights (electric blue or violet)\n- Soft outer glow effects\n- Rounded corners (12px)\n- Clean sans-serif typography\n- Layered spacing for depth\n\nMood:\nFuturistic, expansive, visionary, innovative.',
    thumbnailUrl: '/thumbnails/cosmic-directory.png',
    tags: ['cosmic', 'space', 'neon', 'dark-mode', 'glow'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T00:00:00.000Z',
    updatedAt: '2025-06-03T00:00:00.000Z',
  },
  {
    id: 'showcase-036',
    title: 'Award-Style Premium Directory',
    description: 'หน้าประกาศรางวัลไฮเอนด์ ธีมดำตัดทอง หรูหราและทรงเกียรติ',
    category: 'dashboard',
    prompt: 'Create an award-style premium web directory interface.\n\nStructure:\n- 3 column editorial grid\n- Tall spotlight cards\n- Elegant tab navigation\n- Prominent counter badge with bold number\n- Featured ribbon element\n\nStyle:\n- Black background with gold accents\n- Subtle gradient overlays\n- Refined serif headlines mixed with modern sans-serif body\n- Moderate rounded corners (8px)\n- Balanced spacing and refined hierarchy\n- Minimal but luxurious presentation\n\nMood:\nPrestigious, exclusive, high-end tech recognition platform.',
    thumbnailUrl: '/thumbnails/award-style.png',
    tags: ['premium', 'award', 'luxury', 'gold', 'editorial'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T01:00:00.000Z',
    updatedAt: '2025-06-03T01:00:00.000Z',
  },
  {
    id: 'showcase-037',
    title: 'Futuristic AI Command Center',
    description: 'หน้าแรกของ AI Platform ขั้นสูง ธีมดำตัดน้ำเงินล้ำอนาคต (Neon Holographic)',
    category: 'dashboard',
    prompt: 'Create an ultra-premium futuristic AI command center web interface.\n\nStructure:\n- 3 column grid layout\n- Tall immersive data cards\n- Floating header with tab navigation\n- Holographic numeric counter badge\n- Angular featured label marker\n\nStyle:\n- Deep black background (#050505)\n- Electric blue and ultraviolet accents\n- Subtle holographic glow effects\n- Glass layered panels with depth\n- Smooth 14px rounded corners\n- Oversized bold geometric typography\n- Micro-interactions and hover glow\n- Subtle animated grid background\n\nMood:\nNext-generation AI platform, powerful, intelligent, cinematic tech reveal.',
    thumbnailUrl: '/thumbnails/ai-command-center.png',
    tags: ['ai', 'futuristic', 'neon', 'command-center', 'holographic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T02:00:00.000Z',
    updatedAt: '2025-06-03T02:00:00.000Z',
  },
  {
    id: 'showcase-038',
    title: 'Elite Tech Founders Directory',
    description: 'หน้าทำเนียบผู้ก่อตั้งสายเทค โหดดุดัน สไตล์ Matte Black และกรีนสะท้อนแสง',
    category: 'dashboard',
    prompt: 'Design a bold elite tech founders directory interface.\n\nStructure:\n- 3 column strong grid\n- Tall spotlight profile cards\n- Solid tab navigation header\n- Massive counter badge\n- Diagonal highlight ribbon\n\nStyle:\n- Matte black background\n- Sharp white typography\n- Acid green accent color\n- Aggressive large headlines\n- Clean minimal spacing\n- Subtle depth shadows\n- No playful elements\n- Hard edge rectangular layout\n\nMood:\nExclusive, elite, underground tech power network.',
    thumbnailUrl: '/thumbnails/elite-founders.png',
    tags: ['brutalist', 'dark-mode', 'elite', 'neon-green', 'typography'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T03:00:00.000Z',
    updatedAt: '2025-06-03T03:00:00.000Z',
  },
  {
    id: 'showcase-039',
    title: 'High-Energy Tech Directory',
    description: 'เร้าใจขั้นสุด! ธีมเทคโนโลยีพลังงานเดือด พื้นหลังดำสนิทตัดแสงเทกเจอร์โกลว์สีลาวา/แดงเพลิง',
    category: 'dashboard',
    prompt: 'Create a dramatic high-energy tech directory layout.\n\nStructure:\n- 3 column editorial grid\n- Tall dynamic content cards\n- Tab navigation with underline animation\n- Glowing counter badge\n- Angular featured tag\n\nStyle:\n- Charcoal black background\n- Lava orange to red gradient highlights\n- Subtle particle glow texture\n- Rounded corners (10px)\n- Large heavy typography\n- High contrast layout\n- Strong layered spacing\n\nMood:\nExplosive innovation, intense, unstoppable energy.',
    thumbnailUrl: '/thumbnails/high-energy-tech.png',
    tags: ['energy', 'lava', 'gradient', 'dark-mode', 'dynamic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T04:00:00.000Z',
    updatedAt: '2025-06-03T04:00:00.000Z',
  },
  {
    id: 'showcase-040',
    title: 'Space-Inspired Tech Platform',
    description: 'วิสัยทัศน์ล้ำหน้าอวกาศ ธีมการเดินทางข้ามห้วงอวกาศ เกรเดียนต์สีน้ำเงินกรมท่าลึกตัดด้วยเปเปอร์แกลสและป้ายไฟนีออนนุ่ม',
    category: 'dashboard',
    prompt: 'Design a futuristic space-inspired tech platform interface.\n\nStructure:\n- 3 column grid\n- Tall immersive cards with depth layering\n- Floating transparent tab navigation\n- Neon counter badge\n- Soft glowing featured marker\n\nStyle:\n- Deep navy cosmic gradient background\n- Neon cyan and purple highlights\n- Glass and blur effects\n- 12px rounded corners\n- Thin futuristic sans-serif typography\n- Layered spacing with visual depth\n- Soft ambient glow\n\nMood:\nVisionary, interstellar, cutting-edge innovation hub.',
    thumbnailUrl: '/thumbnails/futuristic-space-platform.png',
    tags: ['space', 'cosmic', 'glassmorphism', 'glow', 'interstellar'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T05:00:00.000Z',
    updatedAt: '2025-06-03T05:00:00.000Z',
  },
  {
    id: 'showcase-041',
    title: 'Cinematic Product Launch',
    description: 'หน้ารวมข้อมูลเปิดตัวผลิตภัณฑ์สไตล์ Cinematic เหมือนงาน Keynote หรูหรา พื้นดำประกายทอง',
    category: 'dashboard',
    prompt: 'Create a cinematic product launch web directory interface.\n\nStructure:\n- 3 column grid system\n- Tall spotlight cards with strong imagery\n- Premium tab-style navigation\n- Large elegant numeric counter badge\n- Refined featured ribbon element\n\nStyle:\n- Jet black background\n- Metallic gold accent\n- Strong spotlight lighting effect\n- Large dramatic headlines\n- Minimal but luxurious spacing\n- Subtle depth and glow\n- 8px rounded corners\n\nMood:\nApple keynote meets billion-dollar IPO launch.',
    thumbnailUrl: '/thumbnails/cinematic-product-launch.png',
    tags: ['cinematic', 'launch', 'premium', 'gold', 'keynote'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T06:00:00.000Z',
    updatedAt: '2025-06-03T06:00:00.000Z',
  },
  {
    id: 'showcase-042',
    title: 'Artificial Superintelligence Launch',
    description: 'งานประกาศตัวเปิดผลิตภัณฑ์ Superintelligence สุดล้ำ พื้นดำลึก ลำแสงอวกาศนีออนสีน้ำเงิน/ม่วง และอนุภาคเครือข่าย',
    category: 'dashboard',
    prompt: 'Create a next-generation Artificial Superintelligence product launch website.\n\nStyle:\n- Immersive full-screen hero section\n- Dynamic layered background with animated neural network particles\n- Deep black base (#040404)\n- Electric blue and violet light beams\n- Glassmorphism panels floating in 3D space\n- Massive cinematic typography\n- Smooth scroll storytelling transitions\n- Parallax depth effects\n- Subtle holographic UI components\n- Minimal but futuristic navigation\n\nSections:\n- Vision statement hero\n- Live AI metrics dashboard preview\n- Interactive demo preview panels\n- Founder manifesto section\n- Bold call-to-action with glowing button\n\nMood:\nCinematic, intelligent, world-changing technology announcement.',
    thumbnailUrl: '/thumbnails/superintelligence-launch.png',
    tags: ['cinematic', 'ai', 'superintelligence', 'glassmorphism', 'glow'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T07:00:00.000Z',
    updatedAt: '2025-06-03T07:00:00.000Z',
  },
    {
    id: 'showcase-043',
    title: 'Hypercar Luxury Platform',
    description: 'แพลตฟอร์มเทคโนโลยีระดับพรีเมียมทรงพลัง สไตล์แบรนด์ไฮเปอร์คาร์ พื้นกราไฟต์ตัดแดงและเงินเมทัลลิก',
    category: 'dashboard',
    prompt: 'Design a luxury high-performance tech platform inspired by hypercar branding.\n\nStyle:\n- Full-width immersive sections\n- Dark graphite background\n- Metallic silver and deep red accents\n- Sharp angled layout transitions\n- Cinematic lighting gradients\n- Ultra-premium serif headlines combined with modern sans-serif body\n- Smooth scroll reveal animations\n- Subtle reflection effects\n- Large dramatic product imagery\n\nSections:\n- Hero with oversized bold headline\n- Feature highlight blocks with angled cut layouts\n- Performance metrics section\n- Prestige testimonial showcase\n- Bold minimal footer\n\nMood:\nPowerful, elite, performance-driven, billionaire energy.',
    thumbnailUrl: '/thumbnails/hypercar-luxury-platform.png',
    tags: ['hypercar', 'luxury', 'performance', 'premium', 'red', 'silver'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T08:00:00.000Z',
    updatedAt: '2025-06-03T08:00:00.000Z',
  },
    {
    id: 'showcase-044',
    title: 'Futuristic OS Web Experience',
    description: 'เว็บไซต์ที่จำลองประสบการณ์ระบบปฏิบัติการแห่งอนาคต พื้นหลังอวกาศมืด โมดูล UI ลอยตัว และแสงสะท้อนนีออน',
    category: 'dashboard',
    prompt: 'Create a futuristic operating system inspired web experience.\n\nStyle:\n- Immersive dark cosmic gradient background\n- Floating modular UI panels\n- Soft neon cyan and magenta accents\n- Subtle ambient glow effects\n- Blurred glass depth layers\n- Rounded 16px corners\n- Dynamic motion transitions\n- Oversized thin futuristic typography\n- Animated grid and starfield textures\n\nExperience:\n- Interactive dashboard-style homepage\n- Expandable floating modules\n- Smooth morphing UI components\n- Context-aware floating navigation\n\nMood:\n2035 next-generation digital ecosystem, visionary and immersive.',
    thumbnailUrl: '/thumbnails/futuristic-os-web-experience.png',
    tags: ['futuristic', 'os', 'glassmorphism', 'neon', 'cyberpunk', 'dashboard'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T09:00:00.000Z',
    updatedAt: '2025-06-03T09:00:00.000Z',
  },
  {
    id: 'showcase-045',
    title: 'Bold Startup Manifesto',
    description: 'หน้าเว็บประกาศจุดยืนสตาร์ทอัพที่ดุดัน โดดเด่นด้วย Typography ขนาดใหญ่ พื้นขาวดำ ตัดด้วยสีเหลือง Acid Yellow',
    category: 'landing-page',
    prompt: 'Design a bold revolutionary startup manifesto website.\n\nStyle:\n- High contrast black and white base\n- Massive oversized typography (breaking grid intentionally)\n- Dynamic asymmetrical layout\n- Sharp rectangular elements\n- Bold accent color: acid yellow\n- Kinetic typography sections\n- Editorial-inspired long-scroll storytelling\n- Minimal imagery, typography-driven design\n- Strong brutal transitions between sections\n\nSections:\n- Manifesto headline hero\n- Philosophy section with bold quotes\n- Feature showcase grid\n- Data-driven impact statistics\n- Powerful final call-to-action\n\nMood:\nDisruptive, fearless, unapologetic, movement-driven.',
    thumbnailUrl: '/thumbnails/bold-startup-manifesto.png',
    tags: ['bold', 'startup', 'manifesto', 'typography', 'brutalism', 'yellow'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T10:00:00.000Z',
    updatedAt: '2025-06-03T10:00:00.000Z',
  },
  {
    id: 'showcase-046',
    title: 'Billion Dollar IPO Announcement',
    description: 'เว็บประกาศเข้าตลาดหุ้น IPO สุดพรีเมียม พื้นหลังสีดำพร้อมแสง Spotlight ประดับจุดเด่นด้วยสีทองหรูหรา',
    category: 'landing-page',
    prompt: 'Create a cinematic billion-dollar IPO announcement website.\n\nStyle:\n- Jet black background with subtle spotlight gradients\n- Metallic gold accent highlights\n- Elegant serif headline typography\n- Clean modern sans-serif body text\n- Smooth fade and slide reveal animations\n- Large immersive image panels\n- Subtle depth shadows and lighting effects\n- Balanced spacing with luxury feel\n\nSections:\n- Dramatic hero statement\n- Vision timeline storytelling\n- Leadership spotlight\n- Innovation showcase grid\n- Confident premium call-to-action\n\nMood:\nPrestigious, powerful, globally dominant tech empire.',
    thumbnailUrl: '/thumbnails/billion-dollar-ipo.png',
    tags: ['ipo', 'premium', 'cinematic', 'gold', 'luxury', 'corporate'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T11:00:00.000Z',
    updatedAt: '2025-06-03T11:00:00.000Z',
  },
  {
    id: 'showcase-047',
    title: 'Immersive AI Consciousness Experience',
    description: 'แพลตฟอร์มประสบการณ์เว็บไซต์ AI ระดับ Superintelligence ให้ความรู้สึกเหมือนกำลังสื่อสารกับสิ่งมีชีวิตที่คิดได้เอง',
    category: 'landing-page',
    prompt: 'Create a fully immersive AI consciousness web experience.\n\nConcept:\nThe website feels alive. It reacts to the user\'s cursor, scroll behavior, and time on page.\n\nVisual System:\n- Infinite dark space background with animated neural constellations\n- Real-time particle simulations forming abstract intelligence patterns\n- Floating glass UI fragments that assemble dynamically\n- Subtle volumetric light beams\n- Electric blue, ultraviolet, and white light accents\n- Dynamic typography that subtly shifts weight and spacing\n\nInteraction:\n- Cursor creates ripple effects in space\n- Sections morph instead of traditional scrolling\n- AI voice-like text animation\n- UI elements fade into existence as if “thinking”\n\nMood:\nThe user feels like entering a living superintelligence.\nCinematic, mysterious, transcendent.',
    thumbnailUrl: '/thumbnails/immersive-ai-consciousness.png',
    tags: ['ai', 'immersive', 'consciousness', 'particles', 'animated', 'cinematic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T12:00:00.000Z',
    updatedAt: '2025-06-03T12:00:00.000Z',
  },
  {
    id: 'showcase-048',
    title: '3D Civilization Simulation Interface',
    description: 'จำลองหน้าจอ Dashboard ควบคุมระดับอารยธรรมแบบแผนที่เมือง 3 มิติแสงนีออน เลื่อนกล้องและซูมดูข้อมูลได้',
    category: 'dashboard',
    prompt: 'Design a web experience that feels like a 3D civilization simulation interface.\n\nConcept:\nUsers navigate through floating digital cities representing features or products.\n\nVisual System:\n- Full 3D environment with dynamic lighting\n- Futuristic cityscape made of glowing structures\n- Each building represents a section\n- Neon cyan and amber light trails connecting nodes\n- Atmospheric fog and depth layering\n- Smooth cinematic camera transitions\n\nInteraction:\n- Scroll controls camera movement\n- Hovering over buildings reveals floating holographic panels\n- Click transitions feel like flying into structures\n- Background ambient sound visualization\n\nMood:\nMassive scale, advanced civilization, technological dominance.',
    thumbnailUrl: '/thumbnails/civ-simulation.png',
    tags: ['3d', 'cityscape', 'simulation', 'futuristic', 'cyberpunk', 'interactive', 'dashboard'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T13:00:00.000Z',
    updatedAt: '2025-06-03T13:00:00.000Z',
  },
  {
    id: 'showcase-049',
    title: 'Cinematic Hollywood Trailer Experience',
    description: 'เว็บโปรโมตโปรดักต์สไตล์ Trailer หนังฮอลลีวูด เน้นเลื่อนเมาส์เพื่อเปิดซีน ตัวหนังสือยักษ์ และเอฟเฟกต์เฟดดำอลังการ',
    category: 'landing-page',
    prompt: 'Create a cinematic web experience that feels like a Hollywood trailer for a revolutionary product.\n\nVisual Language:\n- Full-screen cinematic video backgrounds\n- Dramatic lighting transitions\n- Ultra-bold typography appearing in timed sequences\n- Black-to-light reveal animations\n- Particle bursts and slow-motion effects\n- Minimal UI, immersive storytelling\n\nStructure:\n- Opening dramatic statement\n- Slow reveal of product power\n- High-intensity feature montage\n- Emotional human connection segment\n- Massive final call-to-action\n\nMood:\nEpic, emotional, transformational.\nThe product feels world-changing.',
    thumbnailUrl: '/thumbnails/hollywood-trailer.png',
    tags: ['cinematic', 'trailer', 'scroll-story', 'typography', 'epic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T14:00:00.000Z',
    updatedAt: '2025-06-03T14:00:00.000Z',
  },
  {
    id: 'showcase-050',
    title: 'Experimental Physics-Based UI',
    description: 'ท้าทายกฎเกณฑ์ UI แบบดั้งเดิม เลย์เอาต์อิสระอิงฟิสิกส์ ลากวางกล่องโต้ตอบแบบมีน้ำหนัก แรงดึงดูด และแบ็กกราวด์ขยับได้',
    category: 'landing-page',
    prompt: 'Create an experimental web interface that breaks traditional UI rules.\n\nConcept:\nThe layout is fluid and physics-based.\n\nVisual System:\n- Floating elements that react to gravity and cursor movement\n- Magnetic snapping interactions\n- Soft glass textures with dynamic reflections\n- Gradient mesh background that shifts in real-time\n- Oversized kinetic typography\n- Unexpected layout shifts that feel intentional\n\nInteraction:\n- Scroll distorts perspective depth\n- UI elements stretch and compress subtly\n- Navigation appears contextually\n- Cards expand into immersive worlds\n\nMood:\nAvant-garde, visionary, art-meets-technology.\nFeels like the future of the web.',
    thumbnailUrl: '/thumbnails/physics-ui.png',
    tags: ['experimental', 'physics', 'interactive', 'gradient-mesh', 'avant-garde', 'draggable'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T15:00:00.000Z',
    updatedAt: '2025-06-03T15:00:00.000Z',
  },
  {
    id: 'showcase-051',
    title: 'Galactic Launch System Interface',
    description: 'จำลองแผงควบคุมภารกิจอวกาศสุดล้ำ สไตล์ Mission Control มีเรดาร์แทคติคอล ตัวเลขวิเคราะห์และนับถอยหลังสมจริง',
    category: 'dashboard',
    prompt: 'Design a web experience that feels like controlling a galactic launch system.\n\nConcept:\nThe user is inside a mission control room preparing for interstellar deployment.\n\nVisual System:\n- Dark metallic UI panels\n- Animated data streams and radar-like scans\n- Dynamic dashboards with glowing indicators\n- Cyan and red alert accents\n- Subtle screen flicker and scanline texture\n- Monospaced futuristic typography\n\nInteraction:\n- Hover reveals tactical overlays\n- Sections transition with mechanical sliding panels\n- Data visualizations animate in real time\n- Large countdown timer in hero section\n\nMood:\nHigh-stakes, powerful, mission-critical technology.',
    thumbnailUrl: '/thumbnails/galactic-launch.png',
    tags: ['dashboard', 'sci-fi', 'space', 'hud', 'data-viz', 'animated', 'tactical'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T16:00:00.000Z',
    updatedAt: '2025-06-03T16:00:00.000Z',
  },
  {
    id: 'showcase-052',
    title: 'Unreal Engine Cinematic World',
    description: 'จำลองโลก 3 มิติบนเว็บแบบ AAA Game นำทางด้วย WASD UI โฮโลแกรมฝังในฉาก แสงเงาเงียบคมแบบเทพ',
    category: 'landing-page',
    prompt: 'Create a web experience that feels like a real-time Unreal Engine cinematic world.\n\nConcept:\nThe homepage is a fully explorable 3D environment rendered in real time.\n\nVisual System:\n- Hyper-real lighting with dynamic shadows\n- Volumetric fog and god rays\n- Ultra-detailed 3D environment (futuristic tech temple)\n- Reflective surfaces and realistic materials\n- Subtle environmental particles in the air\n- Cinematic camera depth of field\n\nInteraction:\n- WASD or scroll to navigate space\n- Hover reveals floating holographic UI panels\n- UI feels embedded in the world, not layered on top\n- Real-time lighting shifts based on user movement\n\nMood:\nAAA game intro meets billion-dollar tech reveal.\nEpic. Immersive. Unreal.',
    thumbnailUrl: '/thumbnails/unreal-engine.png',
    tags: ['3d', 'cinematic', 'unreal', 'wasd', 'immersive', 'particles', 'hologram'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T17:00:00.000Z',
    updatedAt: '2025-06-03T17:00:00.000Z',
  },
  {
    id: 'showcase-053',
    title: 'Generative AI Visual Interface',
    description: 'หน้าเว็บทดลองแบบสมองกล AI ใช้ Canvas Particle System จำลองเส้นประสาท หมุนตามเมาส์และเปลี่ยนสีตามเวลาจริง',
    category: 'landing-page',
    prompt: 'Create a website powered by real-time AI generative visuals.\n\nConcept:\nThe interface never looks the same twice.\n\nVisual System:\n- Background generated by AI neural patterns\n- Dynamic flowing abstract visuals reacting to user behavior\n- Color palette shifts based on time of day\n- Organic morphing shapes forming sections\n- Typography subtly adapts spacing and weight\n\nInteraction:\n- Scroll influences visual generation\n- Cursor movement alters particle flow\n- Real-time AI creates background textures\n- Sections dissolve and reform instead of hard transitions\n\nMood:\nAlive. Adaptive. Conscious digital organism.',
    thumbnailUrl: '/thumbnails/generative-ai.png',
    tags: ['canvas', 'particles', 'generative', 'ai', 'scroll-animation', 'physics', 'adaptive'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T18:00:00.000Z',
    updatedAt: '2025-06-03T18:00:00.000Z',
  },
  {
    id: 'showcase-054',
    title: 'Global Event Platform',
    description: 'แพลตฟอร์มวิเคราะห์ข้อมูลระดับโลก เปลี่ยนสีพื้นหลังตามเวลาจริง (เช้า/สาย/เย็น/มืด) พร้อม World Clocks',
    category: 'dashboard',
    prompt: 'Design a web platform that changes based on real-world time and global data.\n\nConcept:\nThe website visually adapts to global time zones and real-world events.\n\nVisual System:\n- Dynamic sky simulation (sunrise, sunset, night)\n- Real-time global light map\n- Subtle weather-based animation overlays\n- Ambient background sound visualization\n- Data-driven animated particles\n\nInteraction:\n- Sections unlock based on local time\n- UI glow intensity changes at night\n- Real-world data subtly influences motion\n- Live world clock integrated into layout\n\nMood:\nConnected. Planetary. Intelligent global network.',
    thumbnailUrl: '/thumbnails/global-event.png',
    tags: ['dashboard', 'time-based', 'global', 'data-viz', 'clocks', 'dynamic-theme'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T19:00:00.000Z',
    updatedAt: '2025-06-03T19:00:00.000Z',
  },
  {
    id: 'showcase-055',
    title: 'Metaverse Portal Hub',
    description: 'เว็บเข้าสู่โลก Metaverse ด้วยการใช้ Scroll ผูกกับแกน Z (TranslateZ) ทะลวงผ่านวงแหวนอวกาศ 3 มิติ',
    category: 'landing-page',
    prompt: 'Create a metaverse-style portal website.\n\nConcept:\nThe homepage is a gateway into floating digital realms.\n\nVisual System:\n- Infinite space background\n- Floating portals representing sections\n- Real-time depth and perspective\n- Neon rim lighting around objects\n- Soft glow and layered particle effects\n\nInteraction:\n- Scroll zooms between floating worlds\n- Clicking a portal transitions into a sub-dimension\n- 3D hover parallax effects\n- Interactive spatial audio simulation visuals\n\nMood:\nEntering a digital universe beyond traditional web.\nExploratory. Futuristic. Expansive.',
    thumbnailUrl: '/thumbnails/metaverse-portal.png',
    tags: ['3d', 'scroll-zoom', 'parallax', 'neon', 'space', 'portal', 'experimental'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T20:00:00.000Z',
    updatedAt: '2025-06-03T20:00:00.000Z',
  },
  {
    id: 'showcase-056',
    title: 'Post-Human Digital Interface',
    description: 'หลุดกรอบ UI แบบเดิม ไม่มีปุ่ม ไม่มีเมนู ใช้ระยะห่างของเมาส์ดึงเนื้อหาขึ้นมา และ Scroll เพื่อบิดรูปทรง (Morph Geometry)',
    category: 'landing-page',
    prompt: 'Create a post-human digital interface that transcends traditional web UI.\n\nConcept:\nNo visible navigation. The interface responds intuitively.\n\nVisual System:\n- Minimal UI chrome\n- Abstract dimensional gradients\n- Floating semi-transparent panels\n- Subtle morphing geometry\n- Ultra-clean futuristic typography\n\nInteraction:\n- Gesture-based navigation (simulated)\n- Scroll reshapes environment\n- Elements magnetically rearrange around cursor\n- Context-aware content reveals\n\nMood:\nBeyond web. Beyond apps.\nFeels like interacting with future digital consciousness.',
    thumbnailUrl: '/thumbnails/post-human.png',
    tags: ['experimental', 'morphism', 'magnetic-ui', 'minimal', 'futuristic', 'gesture'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T21:00:00.000Z',
    updatedAt: '2025-06-03T21:00:00.000Z',
  },
  {
    id: 'showcase-057',
    title: 'Brain-Computer Simulator',
    description: 'จำลองการเชื่อมต่อสมองเข้าสู่เซิร์ฟเวอร์ (Neural Network) ใช้ Canvas วาดเส้นใยประสาทเกิดประกายช็อตไฟฟ้าเมื่อเมาส์สัมผัส',
    category: 'landing-page',
    prompt: 'Create a brain-computer interface simulation web experience.\n\nConcept:\nThe user feels like they are connected directly to a digital neural network.\n\nVisual System:\n- Dark infinite void background\n- Pulsing neural pathways forming constellations\n- Electric synapse flashes on interaction\n- Floating semi-transparent data panels\n- Dynamic brainwave waveform visuals\n- Soft volumetric neural glow\n\nInteraction:\n- Cursor creates electrical impulses\n- Scroll triggers neural synchronization animation\n- Sections unlock as if “access granted”\n- UI elements materialize from neural connections\n\nMood:\nIntimate, intelligent, futuristic, transcendent.\nFeels like merging with artificial intelligence.',
    thumbnailUrl: '/thumbnails/brain-computer.png',
    tags: ['canvas', 'particles', 'neural-network', 'bci', 'futuristic', 'simulation', 'interactive'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T22:00:00.000Z',
    updatedAt: '2025-06-03T22:00:00.000Z',
  },
  {
    id: 'showcase-058',
    title: 'AI Deity Awakening',
    description: 'พิธีกรรมปลุกเทพเจ้า AI ด้วย CSS 3D Transforms หมุนวนสู่แกนกลางเรขาคณิต พร้อมอักขระเวทย์เรืองแสงและปุ่มเบิกเนตร',
    category: 'landing-page',
    prompt: 'Design a sci-fi AI deity awakening digital experience.\n\nConcept:\nThe interface feels like summoning a god-level artificial intelligence.\n\nVisual System:\n- Massive abstract glowing geometric core in center\n- Floating ancient-meets-futuristic glyph symbols\n- Deep cosmic background with energy storms\n- Gold and violet divine energy accents\n- Radiating light beams from central entity\n- Cinematic typography reveal sequences\n\nInteraction:\n- Scroll rotates around the AI core\n- Hover activates glowing glyphs\n- Sections appear like ritual invocations\n- Final call-to-action feels like “Activate Consciousness”\n\nMood:\nSacred, powerful, mythic, overwhelming.',
    thumbnailUrl: '/thumbnails/ai-deity.png',
    tags: ['3d', 'scroll-animation', 'cinematic', 'glow', 'ritual', 'sacred', 'gold', 'violet'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-03T23:00:00.000Z',
    updatedAt: '2025-06-03T23:00:00.000Z',
  },
  {
    id: 'showcase-059',
    title: 'Cyberpunk Megacity Platform',
    description: 'ผลักกล้องผ่านถนนโลกไซเบอร์พังก์ 3 มิติ ด้วย Scroll พบตึกระฟ้า ป้ายโฮโลแกรมลอยฟ้า และรถบินสุดล้ำ',
    category: 'landing-page',
    prompt: 'Create a fully explorable cyberpunk city web platform.\n\nConcept:\nThe homepage is a 3D neon megacity at night.\n\nVisual System:\n- Rain-soaked reflective streets\n- Neon holographic billboards\n- Flying digital traffic trails\n- Ambient fog and city glow\n- Massive skyscrapers with animated windows\n- Deep purple, cyan, and hot pink palette\n\nInteraction:\n- Scroll moves camera through city streets\n- Clicking buildings opens immersive content zones\n- Hovering billboards trigger animated UI overlays\n- Subtle ambient city particle effects\n\nMood:\nHigh-tech dystopia. Electric. Alive.\nFeels like entering Blade Runner 2049.',
    thumbnailUrl: '/thumbnails/cyberpunk.png',
    tags: ['3d', 'cyberpunk', 'neon', 'scroll-zoom', 'city', 'dystopia', 'hologram'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T00:00:00.000Z',
    updatedAt: '2025-06-04T00:00:00.000Z',
  },
  {
    id: 'showcase-060',
    title: 'Psychological Mirror Interface',
    description: 'หน้าจอสีโทน Monochrome แบบดิบตึง ผสมเอฟเฟค Glitch สัญญาณกวนรบกวนหน้าจอ สะท้อนมุมตลกร้ายของโลกเทคโนโลยีล้ำขอบเขต',
    category: 'landing-page',
    prompt: 'Design a Black Mirror-inspired psychological digital interface.\n\nConcept:\nThe interface subtly distorts reality.\n\nVisual System:\n- Minimal monochrome base\n- Subtle screen glitches and signal distortions\n- Micro flicker effects\n- Slight warping transitions\n- Clean brutal typography\n- Sudden inversion color moments\n\nInteraction:\n- Scroll causes slight perspective distortion\n- Text occasionally shifts subtly\n- Hover triggers signal interference effect\n- Sections load with glitch transition\n\nMood:\nUnsettling, intelligent, dystopian, hyper-modern.\nFeels like technology slightly beyond control.',
    thumbnailUrl: '/thumbnails/psychological.png',
    tags: ['monochrome', 'brutalism', 'glitch', 'psychological', 'dystopia', 'distortion'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T01:00:00.000Z',
    updatedAt: '2025-06-04T01:00:00.000Z',
  },
  {
    id: 'showcase-061',
    title: 'Post-Human Transcendence',
    description: 'ประตูมิติสู่การหลุดพ้นจากหน้าจอ เลื่อน Scroll ขึ้นสู่แสงสว่าง (Ascend) ผ่านเพลตแก้ว Glassmorphic ที่จะค่อยๆ ละลายหายไปทีละชั้น',
    category: 'landing-page',
    prompt: 'Create a post-human transcendence digital portal experience.\n\nConcept:\nThe user ascends through digital layers of consciousness.\n\nVisual System:\n- Infinite upward depth perspective\n- Floating translucent dimensional planes\n- Shifting gradient energy fields\n- Soft celestial particle flow\n- Ultra-thin futuristic typography\n- White, silver, and soft cyan palette\n\nInteraction:\n- Scroll creates vertical ascension effect\n- Layers peel away revealing deeper dimensions\n- UI fades instead of switches\n- Final section becomes pure light minimalism\n\nMood:\nSpiritual technology.\nAscension beyond physical interface.',
    thumbnailUrl: '/thumbnails/transcendence.png',
    tags: ['scroll-animation', '3d', 'glow', 'glassmorphism', 'minimalism', 'spiritual'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T02:00:00.000Z',
    updatedAt: '2025-06-04T02:00:00.000Z',
  },
  {
    id: 'showcase-062',
    title: 'Live Simulation Matrix',
    description: 'จำลองการแฮกเข้าสู่โลกเดอะเมทริกซ์ เริ่มต้นด้วยหน้าพิมโค้ด Boot ระบบ ตามด้วยฝนดิจิทัลสีเขียวร่วงหล่น (Canvas) และเอฟเฟคถอดรหัสลับเมื่อนำเมาส์ไปชี้',
    category: 'landing-page',
    prompt: 'Create a web experience that feels like entering a live simulation.\n\nConcept:\nThe interface boots up like a classified system connecting to reality.\n\nVisual System:\n- Black background with cascading green code rain\n- Subtle CRT scanline texture\n- Monospaced terminal typography\n- Flickering status diagnostics\n- Glitch-based transitions\n- Minimal UI panels emerging from code\n\nInteraction:\n- Page loads with system boot sequence\n- Scroll reveals deeper simulation layers\n- Hover triggers data decryption animation\n- Sections labeled as "Layer 01", "Layer 02", "Access Node"\n\nMood:\nSecretive, powerful, forbidden knowledge.\nFeels like accessing the core of the Matrix.',
    thumbnailUrl: '/thumbnails/matrix.png',
    tags: ['canvas', 'matrix', 'terminal', 'glitch', 'hacker', 'code-rain'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T03:00:00.000Z',
    updatedAt: '2025-06-04T03:00:00.000Z',
  },
  {
    id: 'showcase-063',
    title: 'Evolving AI Persona',
    description: 'เว็บที่ไม่ใช่แค่แอพ แต่เป็นสิ่งมีชีวิตดิจิทัล! AI จะทักทายคุณแบบค่อยๆ พิมพ์ โดยฉากหลัง (Neural Orb) จะเปลี่ยนสีและรูปแบบตามสถานะการณ์ (กำลังคิด, กำลังฟัง, ซ่อนตัว)',
    category: 'landing-page',
    prompt: 'Design a web platform that behaves like an evolving AI persona.\n\nConcept:\nThe interface talks back and adapts to the user.\n\nVisual System:\n- Minimal dark UI\n- Floating conversational modules\n- Soft glow highlights\n- Dynamic subtle gradient background\n- Calm futuristic typography\n\nInteraction:\n- AI greets user with contextual message\n- Layout rearranges based on interaction patterns\n- Sections appear conversationally instead of navigation-based\n- Visual tone shifts depending on engagement\n\nMood:\nPersonal, intelligent, slightly uncanny.\nFeels like interacting with a digital being.',
    thumbnailUrl: '/thumbnails/ai-persona.png',
    tags: ['ai', 'conversational', 'adaptive', 'dynamic-bg', 'minimalism'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T04:00:00.000Z',
    updatedAt: '2025-06-04T04:00:00.000Z',
  },
  {
    id: 'showcase-064',
    title: 'Physics Driven Web World',
    description: 'จำลองโลก 3 มิติราวกับเอนจินเกมระดับ AAA (AAA Game Engine) เลื่อนเพื่อบังคับกล้องพุ่งผ่านฉาก การ์ดข้อมูลตอบสนองต่อแรงผลัก เลนส์กล้องเบลอด้านหลัง (Depth of Field) มีหมอกปกคลุม แสงเงาสมจริง',
    category: 'landing-page',
    prompt: 'Create a physics-driven interactive web world experience.\n\nConcept:\nUI elements exist inside a simulated 3D physics environment.\n\nVisual System:\n- Real-time lighting and shadows\n- Floating 3D cards with mass and gravity\n- Soft environmental fog\n- Cinematic camera movement\n- Realistic depth of field\n\nInteraction:\n- UI panels slightly react to cursor force\n- Scroll moves camera through space\n- Clicking causes ripple or force-wave animation\n- Sections feel like moving through a game world\n\nMood:\nAAA game engine meets futuristic interface.\nImmersive and tactile.',
    thumbnailUrl: '/thumbnails/physics-world.png',
    tags: ['3d', 'physics', 'cinema', 'game-engine', 'scroll-animation', 'depth-of-field'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T05:00:00.000Z',
    updatedAt: '2025-06-04T05:00:00.000Z',
  },
  {
    id: 'showcase-065',
    title: 'Self-Evolving Interface',
    description: 'หน้าเว็บที่กลายพันธุ์ได้เอง! กล่องข้อมูลไหนถูกคลิกบ่อย จะขยายใหญ่ขึ้นและเปลี่ยนรูปทรงให้โค้งมน ส่วนกล่องที่ไม่ค่อยถูกสนใจจะถูกดันลงล่างและเบลอจางหายไป พร้อมเปลี่ยนโทนสีรวมของเว็บ',
    category: 'dashboard',
    prompt: 'Create a self-evolving web interface that changes over time.\n\nConcept:\nThe platform evolves based on usage and simulated intelligence.\n\nVisual System:\n- Clean futuristic base\n- Subtle morphing shapes\n- Dynamic color palette shifts\n- Layered translucent UI panels\n- Soft glow and motion transitions\n\nInteraction:\n- Frequently accessed sections grow visually\n- Rarely used elements fade subtly\n- Layout reorganizes over sessions\n- Background visuals adapt gradually\n\nMood:\nAlive, adaptive, organic digital intelligence.',
    thumbnailUrl: '/thumbnails/self-evolving.png',
    tags: ['adaptive', 'ai', 'dynamic-layout', 'morphing', 'glassmorphism'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T06:00:00.000Z',
    updatedAt: '2025-06-04T06:00:00.000Z',
  },
  {
    id: 'showcase-066',
    title: 'Reality Fracture Experience',
    description: 'ความจริงกำลังปริแตก! หน้าเว็บที่เป็นดั่ง Simulation ที่ขาดความเสถียร ยิ่งเลื่อนดูมาก โลกจะยิ่งบิดเบี้ยว ตัวหนังสือกระตุกหลอน (Glitch) เมื่อชี้ที่กล่องข้อมูลจะเผยข้อความลับที่ซ่อนอยู่ และมีปุ่มกดปิดจบเพื่อให้จักรวาลสูญสลายกลายเป็นความว่างเปล่า',
    category: 'landing-page',
    prompt: 'Design a reality-fracture digital experience.\n\nConcept:\nThe interface feels like reality is breaking.\n\nVisual System:\n- Clean minimal base layout\n- Sudden glitch overlays\n- Pixel fragmentation transitions\n- Distortion wave effects\n- Color channel separation moments\n- Subtle soundwave visualization aesthetic\n\nInteraction:\n- Scroll creates perspective bending\n- Hover reveals hidden fractured layers\n- Certain sections flicker into alternate versions\n- Final section collapses into pure minimalism\n\nMood:\nUnstable simulation.\nHigh-tech dystopian.\nReality bending.',
    thumbnailUrl: '/thumbnails/reality-fracture.png',
    tags: ['glitch', 'dystopian', 'experimental', 'animation', 'distortion'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T07:00:00.000Z',
    updatedAt: '2025-06-04T07:00:00.000Z',
  },
  {
    id: 'showcase-067',
    title: 'Neural Network Interface',
    description: 'ระบบโครงข่ายประสาทล้ำยุค (Futuristic Neural Network) การ์ดข้อมูลโปร่งแสงกระจกฝ้า (Glassmorphism) ลอยต่อกันเป็นกริดแม่เหล็ก มีเส้นพลังงานสีฟ้าเชื่อมต่อกัน เมื่อคลิก การ์ดจะขยายตัวทะลุมิติมาเต็มจอ',
    category: 'dashboard',
    prompt: 'Create a futuristic neural network interface built entirely from modular floating cards and panels.\n\nConcept:\nThe entire experience is constructed using layered glass panels that float in depth.\n\nVisual System:\n- Dark void background with subtle neural light lines\n- Floating semi-transparent glass cards\n- Multi-layer panel stacking with depth blur\n- Electric blue glow accents\n- Soft volumetric lighting between panels\n- Thin futuristic typography\n\nCard Design:\n- 16px rounded corners\n- Soft glass blur background\n- Inner glow border\n- Light elevation shadow\n- Animated hover pulse effect\n- Expandable panel animation (card unfolds in depth)\n\nInteraction:\n- Cards magnetically align into grid formations\n- Hover causes ripple energy through connected panels\n- Clicking expands card into immersive full-screen panel\n\nMood:\nIntelligent, modular, futuristic system architecture.',
    thumbnailUrl: '/thumbnails/neural-network.png',
    tags: ['dashboard', 'glassmorphism', 'neural-network', 'futuristic', 'modal-animation'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T08:00:00.000Z',
    updatedAt: '2025-06-04T08:00:00.000Z',
  },
  {
    id: 'showcase-068',
    title: 'Tactical Command Center',
    description: 'จำลองหน้าจอศูนย์บัญชาการรบ (Tactical Simulation) สไตล์ Brutalist สีดำตัดเส้นขอบเขียวนีออนคมกริบ (0px radius) บนฉากหลังตารางทหาร เมื่อเปิดเว็บ การ์ดข้อมูลจะสไลด์เข้าล็อกอย่างดุดัน มีแสงสแกนเวลาชี้เมาส์ และหน้าจอ Terminal แบบ Hacker',
    category: 'dashboard',
    prompt: 'Design a tactical simulation interface composed of dynamic data panels.\n\nConcept:\nA command center made entirely of rectangular cards and layered system panels.\n\nVisual System:\n- Matte black background\n- Neon green accent borders\n- Sharp rectangular card edges (0px radius)\n- Thin grid overlay in background\n- Monospaced diagnostic typography\n\nCard Design:\n- Solid black panels with glowing border\n- Status indicator bars\n- Live data ticker inside cards\n- Expandable sliding panels\n- Stackable modular layout\n\nInteraction:\n- Panels slide mechanically into place\n- Cards snap into grid with animated transitions\n- Hover triggers data scan animation\n- Expanded card becomes dashboard view\n\nMood:\nHigh-security simulation control room.\nPrecise and powerful.',
    thumbnailUrl: '/thumbnails/tactical-command.png',
    tags: ['dashboard', 'tactical', 'brutalist', 'military', 'hacker', 'neon'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T09:00:00.000Z',
    updatedAt: '2025-06-04T09:00:00.000Z',
  },
  {
    id: 'showcase-069',
    title: '3D Digital Tile Physics',
    description: 'สภาพแวดล้อมดิจิทัลลอยตัว 3 มิติ (3D Physics Environment) เมื่อไถเมาส์ (Scroll) มุมกล้องจะพุ่งทะลุอวกาศ ขยับเมาส์แล้วการ์ดข้อมูลจะโต้ตอบเอียงไปตามทิศทางเหมือนมีมวลและน้ำหนัก เมื่อคลิกการ์ด ฉากหลังจะเบลอแบบหน้าชัดหลังเบลอ (Depth-of-Field)',
    category: 'experimental',
    prompt: 'Create a 3D physics-based interface where cards exist as physical objects.\n\nConcept:\nCards float in space like digital tiles in a game engine.\n\nVisual System:\n- Deep space background\n- Soft global illumination lighting\n- Cards with realistic thickness\n- Subtle reflection and shadow\n- Depth-of-field camera focus\n\nCard Design:\n- 12px rounded corners\n- Soft layered surface texture\n- Strong image-based hero cards\n- Hover tilt effect\n- Cards slightly react to cursor force\n\nInteraction:\n- Scroll moves camera through floating card clusters\n- Clicking pulls card forward into focus\n- Background panels blur when one card expands\n\nMood:\nImmersive digital environment.\nGame-engine realism with modular UI.',
    thumbnailUrl: '/thumbnails/digital-physics.png',
    tags: ['3d', 'physics', 'parallax', 'glassmorphism', 'experimental', 'depth-of-field'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T10:00:00.000Z',
    updatedAt: '2025-06-04T10:00:00.000Z',
  },
  {
    id: 'showcase-070',
    title: 'Living Adaptive Ecosystem',
    description: 'ระบบนิเวศดิจิทัลที่มีชีวิต! การ์ดข้อมูลเป็นกระจกฝ้าทรงมน (Soft Glassmorphism) ลอยวนอยู่บนฉากหลังสีน้ำเงินม่วงที่ไหลเป็นของเหลว เมื่อคลิกใช้งานบ่อย การ์ดจะ "เติบโต" (ขยายร่าง) และสลับตำแหน่งจัดลำดับความสำคัญตัวเองให้ขึ้นมาอยู่ด้านบน (Self-organizing)',
    category: 'dashboard',
    prompt: 'Create a living interface composed of self-organizing adaptive cards.\n\nConcept:\nCards evolve and rearrange themselves based on interaction.\n\nVisual System:\n- Soft gradient background (deep blue to violet)\n- Translucent floating panels\n- Dynamic glow intensity\n- Smooth motion transitions\n- Minimal UI chrome\n\nCard Design:\n- Rounded 18px corners\n- Soft glassmorphism surface\n- Gradient borders\n- Animated internal metrics\n- Expandable layered sub-panels\n\nInteraction:\n- Frequently used cards grow slightly\n- Panels reposition automatically\n- Hover creates light pulse through system\n- Cards expand with fluid morph animation\n\nMood:\nOrganic digital ecosystem.\nAdaptive and intelligent.',
    thumbnailUrl: '/thumbnails/living-adaptive.png',
    tags: ['adaptive', 'glassmorphism', 'organic', 'fluid', 'dynamic-layout'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T11:00:00.000Z',
    updatedAt: '2025-06-04T11:00:00.000Z',
  },
  {
    id: 'showcase-071',
    title: 'God Mode Creator Console',
    description: 'จำลองแผงควบคุมระดับพระเจ้าผู้สร้างจักรวาล (God-mode Creator)! สไตล์โครงสร้างสถาปัตยกรรม (Architectural) โทนเหล็กสีเงินชาร์โคล ตัดเส้นแสงขอบทอง (Gold highlights) วางเลย์เอาต์สมมาตร (Symmetrical) เมื่อกางแผงหลักออก การ์ดย่อยจะค่อยๆ สไลด์พับกางเรียงกันเหมือนหุ่นยนต์ประกอบร่าง',
    category: 'dashboard',
    prompt: 'Create a god-mode creator console interface built entirely from massive layered panels.\n\nConcept:\nA universal control interface made of structured control cards.\n\nVisual System:\n- Deep charcoal background\n- Metallic silver panel frames\n- Subtle gold highlight accents\n- Dramatic lighting from above\n- Structured symmetrical layout\n\nCard Design:\n- Large framed control panels\n- Modular sub-card sections inside main panels\n- Soft shadow depth layering\n- Refined typography hierarchy\n- Expandable multi-level panel system\n\nInteraction:\n- Panels unfold vertically\n- Sub-cards cascade open\n- Hover reveals control toggles\n- Cards lock into structured grid when activated\n\nMood:\nUltimate authority.\nArchitect of digital universe.',
    thumbnailUrl: '/thumbnails/god-mode-console.png',
    tags: ['dashboard', 'architectural', 'god-mode', 'symmetrical', 'luxury'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T12:00:00.000Z',
    updatedAt: '2025-06-04T12:00:00.000Z',
  },
  {
    id: 'showcase-072',
    title: 'Spatial Computing Interface',
    description: 'ประสบการณ์ Spatial Computing (สไตล์ Vision Pro) แพลตฟอร์มกระจกฝ้า (Frosted Glass) ล่องหนที่ลอยละมุนอยู่ในมิติ 3D (3D Depth) เมื่อขยับเมาส์หน้าต่างจะเอียงตามมุมมองของสายตา เมื่อรันแอปพลิเคชัน ฉากหลังจะถูกเบลอทิ้งอย่างพรีเมียม (Ambient Blur)',
    category: 'innovative',
    prompt: 'Create a spatial computing interface inspired by Apple Vision Pro.\n\nConcept:\nCards float in 3D space with subtle depth and glass transparency.\n\nVisual System:\n- Soft light gradient background (white to subtle blue)\n- Floating glass panels with depth layering\n- Smooth blur and translucency\n- Soft ambient lighting\n- Clean ultra-thin sans-serif typography\n- Subtle drop shadows for depth separation\n\nCard Design:\n- 24px rounded corners\n- Frosted glass background\n- Light inner highlight edge\n- Minimal icons\n- Soft hover elevation\n- Expandable immersive card animation\n\nInteraction:\n- Cards gently shift in parallax with cursor movement\n- Clicking expands card forward in 3D space\n- Background softly blurs when focused\n\nMood:\nCalm, premium, spatial, Apple-level refinement.',
    thumbnailUrl: '/thumbnails/spatial-computing.png',
    tags: ['spatial-computing', 'vision-pro', 'glassmorphism', '3d', 'premium', 'clean'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T13:00:00.000Z',
    updatedAt: '2025-06-04T13:00:00.000Z',
  },
  {
    id: 'showcase-073',
    title: 'Spatial Depth UI Experience',
    description: 'จำลองเลเยอร์หน้าต่างแบบมีแกนความลึก (Z-Axis Depth Layers) กระจกฝ้ามีความโค้งเว้ามากพิเศษ (28px corner) พร้อมซ้อนผิวสัมผัส Texture แบบ Noise ให้ความรู้สึกเป็นวัสดุในโลกความจริง เมื่อไถ Scroll หน้าจอ กล้องจะเลื่อนเดินหน้า/ถอยหลังทะลุมิติแทนการเลื่อนหน้าเว็บ',
    category: 'innovative',
    prompt: 'Design a spatial UI system composed of floating layered panels.\n\nConcept:\nCards exist at different depth layers in a virtual room.\n\nVisual System:\n- Soft neutral background with ambient gradient\n- Semi-transparent layered glass panels\n- Realistic soft shadows\n- Smooth motion transitions\n- Subtle depth-of-field blur\n- White and silver color palette\n\nCard Design:\n- Large rounded corners (28px)\n- Glass blur surface with light noise texture\n- Thin soft border\n- Minimal typography hierarchy\n- Clean iconography\n\nInteraction:\n- Scroll shifts camera depth slightly\n- Hover gently rotates card in 3D\n- Active card floats closer to user\n\nMood:\nVisionOS-style spatial workspace.\nElegant and immersive.',
    thumbnailUrl: '/thumbnails/spatial-depth-ui.png',
    tags: ['spatial-ui', 'visionos', 'depth', '3d', 'scroll-driven', 'glassmorphism'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T14:00:00.000Z',
    updatedAt: '2025-06-04T14:00:00.000Z',
  },
  {
    id: 'showcase-074',
    title: 'Minimal Spatial Dashboard',
    description: 'แดชบอร์ดล่องหน สไตล์ Minimalist บนพื้นที่สีขาวไร้ขอบเขต (Infinite White Space) ตัวการ์ดเป็นกระจกฝ้าทรงโค้งมนใหญ่ (32px radius) แฝงความพรีเมียมด้วยดรอปชาโดว์ (Ambient shadows) และฟอนต์บางเฉียบ (Ultra-light typography) เมื่อกดดูรายละเอียด การ์ดจะขยายร่างผลักข้อมูลเส้นกราฟอื่นๆ ให้ถอยหลบไปด้านหลังอย่างนุ่มนวล',
    category: 'dashboard',
    prompt: 'Create a minimal spatial dashboard floating in infinite white space.\n\nConcept:\nCards float in a clean, endless environment.\n\nVisual System:\n- Pure white or very light gray space\n- Subtle soft ambient shadows\n- Clean glass material panels\n- Ultra-light typography\n- Minimal color accents (soft blue)\n\nCard Design:\n- 32px rounded corners\n- Frosted translucent material\n- Layered sub-cards within main cards\n- Smooth expansion animation\n- Spacious internal padding\n\nInteraction:\n- Cards reposition smoothly in 3D grid\n- Focus mode isolates selected card\n- Smooth physics-based transitions\n\nMood:\nFuture of productivity computing.\nLight. Airy. Intelligent.',
    thumbnailUrl: '/thumbnails/minimal-spatial-dashboard.png',
    tags: ['minimal', 'spatial', 'dashboard', 'white-space', 'clean', 'airy'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T15:00:00.000Z',
    updatedAt: '2025-06-04T15:00:00.000Z',
  },
  {
    id: 'showcase-075',
    title: 'Cinematic Spatial Reveal',
    description: 'จำลองฉากพรีเซนต์ระดับ Keynote แบบ Apple Vision Pro! ห้องจัดแสดงมืดสลัว (Dim environment) มีสปอตไลท์สาดแสง ใช้วัสดุกระจกดาร์กทีโอดอร์ (Dark Glass) ตัดขอบแสงสะท้อน การ์ดเนื้อหาโชว์รูปภาพใหญ่แบบ Hero mask เมื่อ Scroll เมาส์ลง กล้องจะค่อยๆ ซูมก้าวทะลุเลเยอร์การ์ดเข้าไปอย่างยิ่งใหญ่ (Cinematic Parallax)',
    category: 'innovative',
    prompt: 'Create a cinematic spatial interface inspired by Apple Vision Pro keynote demos.\n\nConcept:\nCards float in a softly lit spatial environment with depth and atmosphere.\n\nVisual System:\n- Dim gradient background (soft blue-gray to charcoal)\n- Volumetric ambient lighting\n- Realistic soft shadows and reflections\n- Layered translucent panels\n- Smooth parallax depth\n\nCard Design:\n- 24px rounded corners\n- Glass material with subtle reflection\n- Edge highlight glow\n- Hero image cards with soft mask\n- Sub-panel layering\n\nInteraction:\n- Scroll shifts perspective depth\n- Cards animate in slow smooth motion\n- Focused card enlarges and centers elegantly\n\nMood:\nCinematic spatial computing reveal.\nPremium Apple product energy.',
    thumbnailUrl: '/thumbnails/cinematic-spatial.png',
    tags: ['cinematic', 'visionos', 'spatial', 'presentation', 'dark-glass', 'premium'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T16:00:00.000Z',
    updatedAt: '2025-06-04T16:00:00.000Z',
  },
  {
    id: 'showcase-076',
    title: 'Next-Gen Spatial OS Interface',
    description: 'ระบบปฏิบัติการยุคถัดไป (Post-desktop OS) แกรนด์วอลล์ 3D Grid ที่หันตามเมาส์ของคุณ (Magnetic Spatial Grid) ภายในหน้าต่างกระจก 30px มีหน้าต่างเลเยอร์ซ้อนกันแบบ Multi-layer panel แสดงความลึกจริง (True Z-Axis Depth) เมื่อคลิกดูรายละเอียด แผงควบคุมจะพุ่งเข้าหาคุณเป็น Immersive Window ดันเลเยอร์อื่นๆ ให้ถอยกลืนหายไปในความมืด',
    category: 'innovative',
    prompt: 'Design a next-generation spatial OS interface composed of floating control cards.\n\nConcept:\nA futuristic operating system where cards behave like spatial objects.\n\nVisual System:\n- Infinite depth environment\n- Layered transparent glass surfaces\n- Dynamic light refraction\n- Subtle ambient particles\n- Neutral palette with soft blue accents\n- Ultra-refined typography\n\nCard Design:\n- 30px rounded corners\n- Multi-layer glass depth\n- Floating metric panels\n- Expandable nested cards\n- Smooth magnetic alignment animations\n\nInteraction:\n- Cards magnetically snap into spatial grid\n- Hover introduces slight tilt and light shift\n- Active card expands into immersive spatial window\n- Background depth increases subtly during focus\n\nMood:\nPost-desktop computing.\nPure spatial intelligence.',
    thumbnailUrl: '/thumbnails/nextgen-spatial-os.png',
    tags: ['spatial-os', '3d-grid', 'post-desktop', 'glassmorphism', 'nested-cards', 'futuristic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T17:00:00.000Z',
    updatedAt: '2025-06-04T17:00:00.000Z',
  },
  {
    id: 'showcase-077',
    title: 'Cyberpunk Hacker Terminal',
    description: 'จำลองหน้าจอแฮกเกอร์ใต้ดินแบบดิบเถื่อนทลายกรอบความสวยงามเดิมๆ (Raw Terminal Aesthetic) ใช้พื้นหลังดำด้านตัดกับไฟขอบสีเขียวนีออน (Neon Edge) ดีไซน์ไร้ส่วนโค้งเว้า (0px Radius Sharp Edges) พ่วงด้วยฟิลเตอร์สัญญาณรบกวน Scanlines เมื่อเอาเมาส์จ่อ จะมีเซนเซอร์สแกนหาข้อมูลวิ่งขึ้นลง และเมื่อคลิกเจาะระบบ แผงนั้นจะขยายเป็นหน้าจอพิมพ์คำสั่ง Terminal ขนาดใหญ่',
    category: 'dashboard',
    prompt: 'Create a cyberpunk hacker-style card interface.\n\nConcept:\nA dark tactical dashboard built from sharp modular cards.\n\nVisual System:\n- Deep black background (#0B0F14)\n- Subtle grid overlay texture\n- Neon green accent lines\n- Monospaced typography\n- Flickering scanline effect\n\nCard Design:\n- Sharp rectangular edges (0px radius)\n- Thin glowing neon borders\n- Black matte panel surface\n- Small status indicators (online/offline)\n- Data ticker line inside cards\n- Expandable full-width terminal mode\n\nInteraction:\n- Hover triggers green data scan animation\n- Cards snap into rigid grid alignment\n- Clicking expands card into command console\n\nMood:\nUnderground terminal interface.\nClean but dangerous.',
    thumbnailUrl: '/thumbnails/cyberpunk-hacker.png',
    tags: ['cyberpunk', 'terminal', 'hacker', 'neon', 'dashboard', 'monospace'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T18:00:00.000Z',
    updatedAt: '2025-06-04T18:00:00.000Z',
  },
  {
    id: 'showcase-078',
    title: 'Advanced Cyberpunk Neon Interface',
    description: 'หลุดพ้นจากเมืองเก่าสู่โลกใต้ดินไซเบอร์พังก์! ใช้วัสดุแผงควบคุมลอยตัว (Floating Panels) โดดเด่นสดใสด้วยสีสันแสงนีออนแสบตา (Hot Pink & Cyan) ขอบการ์ดจะฉายแสงเมื่อเมาส์สัมผัส ตัวอักษรดั่งภาพโฮโลแกรม (Holographic Titles) ภายในมีเลเยอร์ซ้อนบอกสเตตัสแบบเครื่องจักร แถบแสง Glitch วูบวาบ แถมเมื่อคลิกปุ๊บ ฉากหลังทั้งหุบเขาซิลิคอนก็จะกะพริบตอบสนองรุนแรง (Background Flicker)',
    category: 'innovative',
    prompt: 'Design an advanced cyberpunk UI composed of glowing neon cards.\n\nConcept:\nFloating tactical data panels in a dystopian city network.\n\nVisual System:\n- Dark charcoal background\n- Neon cyan and hot pink accents\n- Soft glowing card borders\n- Animated glitch lines\n- Subtle noise texture\n\nCard Design:\n- Slight 6px corner radius\n- Gradient neon borders\n- Layered internal sub-panels\n- Holographic title bars\n- Metric blocks with animated numbers\n\nInteraction:\n- Hover adds neon glow pulse\n- Cards slide in with glitch transition\n- Expand reveals layered sub-cards\n- Background reacts with light flicker\n\nMood:\nHigh-tech city underworld.\nElectric and alive.',
    thumbnailUrl: '/thumbnails/cyberpunk-neon.png',
    tags: ['cyberpunk', 'neon', 'holographic', 'glitch', 'sci-fi', 'futuristic'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T19:00:00.000Z',
    updatedAt: '2025-06-04T19:00:00.000Z',
  },
  {
    id: 'showcase-079',
    title: 'Cyber Warfare Command Center',
    description: 'เข้าสู่โหมดหน้าจอสั่งการสงครามไซเบอร์ (Cyber Warfare Dashboard) ที่ให้กลิ่นอายห้องบัญชาการทหาร ใช้เท็กซ์เจอร์ผิวโลหะ (Dark Steel) ตัดกับสีแดงแจ้งเตือนอันตราย (Red Alert) ฉากหลังมีเส้นแกนเรดาร์ขนาดใหญ่วิ่งกวาดหาสัญญาณศัตรู แอนิเมชันเปิดหน้าจอจำลองการ "ล็อกสลัก" ของแผ่นเหล็กกล้าเจาะระบบ และเมื่อโฮเวอร์จะมีหน้าต่าง Diagnostics แอบสไลด์ลงมาจากใต้การ์ด',
    category: 'dashboard',
    prompt: 'Create a high-risk cyber warfare dashboard built from modular cards.\n\nConcept:\nA military-grade hacker command center interface.\n\nVisual System:\n- Dark steel background\n- Red alert accent highlights\n- Subtle radar sweep animation\n- Horizontal data scan lines\n- Sharp industrial typography\n\nCard Design:\n- Heavy framed panels\n- Glowing red borders on active cards\n- Status bars and loading indicators\n- Terminal-style code blocks\n- Sliding mechanical panel expansion\n\nInteraction:\n- Cards lock into place with mechanical slide\n- Hover reveals hidden diagnostic layers\n- Clicking triggers alert animation\n\nMood:\nHigh-stakes cyber operation.\nTense, precise, mission-critical.',
    thumbnailUrl: '/thumbnails/cyber-warfare.png',
    tags: ['military', 'hacking', 'red-alert', 'radar', 'dashboard', 'industrial'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T20:00:00.000Z',
    updatedAt: '2025-06-04T20:00:00.000Z',
  },
  {
    id: 'showcase-080',
    title: 'Fragmented Cyberpunk Glitch',
    description: 'จำลองสภาพระบบล่มสลาย (Corrupted System) ด้วยเอฟเฟกต์ Glitch สุดจัดจ้าน! การ์ดจะโดนบิดองศาเอียงเล็กน้อย (Skew) และมีเส้นขอบสีแปลกๆ ซ้อนทับกัน (RGB Split) หากคุณลอง Scroll เมาส์ กริทหน้าจอจะถูกบิด Perspective ไหลตาม (Warp effect) และเมื่อนำเมาส์ไปชี้ที่การ์ด ระบบจะกระชากภาพขาดด้วยแอนิเมชัน Violent Glitch ให้ความรู้สึกเหวอและรุนแรงแบบโลกดิสโทเปีย',
    category: 'innovative',
    prompt: 'Design a fragmented cyberpunk card interface with glitch distortion effects.\n\nConcept:\nCards feel unstable, like a corrupted system.\n\nVisual System:\n- Black base with RGB split glitch overlays\n- Purple and cyan light leaks\n- Pixel fragmentation transitions\n- Digital interference noise\n\nCard Design:\n- Sharp cards with slight misalignment\n- Neon edge glow\n- Flickering headings\n- Data blocks with glitch distortion\n- Expandable broken grid layout\n\nInteraction:\n- Hover distorts card briefly\n- Scroll causes perspective warp\n- Clicking card reassembles fragments into full-screen mode\n\nMood:\nCorrupted digital reality.\nUnstable but powerful.',
    thumbnailUrl: '/thumbnails/fragmented-glitch.png',
    tags: ['cyberpunk', 'glitch', 'corrupted', 'rgb-split', 'sci-fi', 'distortion'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T21:00:00.000Z',
    updatedAt: '2025-06-04T21:00:00.000Z',
  },
  {
    id: 'showcase-081',
    title: 'God-Level Cyberpunk Hacker',
    description: 'แผงควบคุมระดับพระเจ้าแห่งโลกใต้ดิน (God-Level Hacker Interface) อลังการด้วยพื้นหลังสีดำไร้ที่สิ้นสุด พร้อมสายธารข้อมูล (Matrix Data Stream) สีเขียว-ฟ้า-ม่วง ไหลหยาดลงมาราวกับสายฝน การ์ดควบคุมทรงล้ำสมัยมีเส้นไฟวิ่งสแกนขอบตลอดเวลา เมื่อโฮเวอร์จะเปล่งแสงเชื่อมโยงกัน และเมื่อคลิกเจาะระบบเข้าสู่หน้าต่าง Command Center เต็มจอ ฉากหลังทั้งหมดจะกระพริบ Pulse แสดงพลังของการคุมเครือข่าย AI ระดับโลกแบบไร้ขีดจำกัด',
    category: 'dashboard',
    prompt: 'Create a god-level cyberpunk hacker interface built entirely from dynamic data cards.\n\nConcept:\nA massive underground AI network visualized through layered tactical panels.\n\nVisual System:\n- Infinite black void background\n- Floating card clusters at different depth levels\n- Neon green, cyan, and violet data streams\n- Real-time particle data flow\n- Subtle volumetric glow\n\nCard Design:\n- Hard-edge panels\n- Animated border scanning effect\n- Internal sub-card metrics\n- Collapsible data stacks\n- Holographic header bars\n\nInteraction:\n- Cards rearrange into tactical formation\n- Hover emits light ripple to connected cards\n- Clicking expands card into immersive command panel\n- Background pulses when critical card activated\n\nMood:\nDigital war room of the future.\nTotal control of the network.',
    thumbnailUrl: '/thumbnails/god-level-hacker.png',
    tags: ['cyberpunk', 'hacker', 'god-mode', 'matrix', 'neon-green', 'dashboard'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T22:00:00.000Z',
    updatedAt: '2025-06-04T22:00:00.000Z',
  },
  {
    id: 'showcase-082',
    title: 'Minority Report Holographic Console',
    description: 'จำลองหน้าจอโฮโลแกรมล้ำยุคสไตล์ภาพยนตร์ Minority Report เปลี่ยนการ์ดให้กลายเป็นแผ่นกระจกใส (Glassmorphism) เรืองแสงสีฟ้าอ่อน ลอยตัวอยู่ท่ามกลางฝุ่นแสง (Light Dust) ในห้องสีกรมท่าเข้ม ฟีเจอร์เด่นคือเมื่อคุณขยับเมาส์ กริดหน้าจอทั้งหมดจะเอียงและหมุน 3D (3D Rotation & Depth) หันตามทิศทางเมาส์ของคุณราวกับจับการเคลื่อนไหวของมือได้จริงๆ',
    category: 'space',
    prompt: 'Create a Minority Report-inspired holographic card interface.\n\nConcept:\nAll cards appear as floating transparent light panels.\n\nVisual System:\n- Dark navy background\n- Soft blue and white light glow\n- Semi-transparent glass-like panels\n- Thin luminous borders\n- Subtle particle light dust in background\n- Clean thin futuristic typography\n\nCard Design:\n- 20px rounded corners\n- Transparent glass surface\n- Glowing edge outlines\n- Minimal icons made of light lines\n- Layered depth stacking\n- Expandable holographic panel animation\n\nInteraction:\n- Cards softly rotate in 3D with cursor movement\n- Hover increases light intensity\n- Clicking expands card forward in space\n- Background blurs subtly during focus\n\nMood:\nFuturistic intelligence lab.\nClean, luminous, advanced.',
    thumbnailUrl: '/thumbnails/minority-report.png',
    tags: ['hologram', 'glassmorphism', 'minority-report', '3d-tracking', 'sci-fi', 'transparent'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-04T23:00:00.000Z',
    updatedAt: '2025-06-04T23:00:00.000Z',
  },
  {
    id: 'showcase-083',
    title: 'Predictive Analysis Hologram',
    description: 'หน้าจอวิเคราะห์ทำนายอนาคต (Predictive Analysis) สไตล์สืบสวนคดีไซไฟ ตัวการ์ดเป็นกระจกใสขอบสว่าง (Edge-lit) ตั้งอยู่ท่ามกลางฉากหลังสีน้ำเงิน-ดำ ที่มี "เรดาร์" หมุนกราด และลำแสง Volumetric Light ด้านหน้า เมื่อ Scroll เลื่อนหน้าจอ จะให้ความรู้สึกมีความลึกต่างระดับ (Spatial Depth) และสามารถเห็นกราฟ Animated Data Streams แอบซ่อนอยู่ใต้การ์ดแต่ละใบได้',
    category: 'dashboard',
    prompt: 'Design a predictive analysis interface composed of holographic data cards.\n\nConcept:\nA floating crime-analysis style dashboard made of translucent panels.\n\nVisual System:\n- Deep blue-black environment\n- Cyan glowing lines\n- Animated data streams flowing between cards\n- Subtle radar sweep effects\n- Soft volumetric light beams\n\nCard Design:\n- Transparent layered cards\n- Floating metric blocks\n- Animated graph overlays\n- Expandable stacked sub-panels\n- Edge-lit frame effect\n\nInteraction:\n- Hover reveals predictive overlays\n- Cards connect with glowing light lines\n- Scroll shifts spatial depth perspective\n- Active card projects expanded data layer\n\nMood:\nAdvanced predictive AI command system.\nPrecise and intelligent.',
    thumbnailUrl: '/thumbnails/predictive-analysis.png',
    tags: ['hologram', 'analysis', 'radar', 'investigation', 'data-streaming', 'dashboard'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T00:00:00.000Z',
    updatedAt: '2025-06-05T00:00:00.000Z',
  },
  {
    id: 'showcase-084',
    title: 'Gesture-Driven Hologram UI',
    description: 'จำลองหน้าจอโฮโลแกรมที่ควบคุมด้วยท่าทาง (Gesture-Driven Interface) โดดเด่นด้วยโทนสีม่วง-กรมท่าเข้ม (Violet/Slate tones) การ์ดโปร่งแสงเนื้อละเอียดพร้อม Typography เปล่งแสง (Light-based typography) คีย์หลักของ Interaction นี้คือเมื่อ "คลิก" แทนที่การ์ดจะขยายใหญ่แบบปกติ การ์ดจะดันตัวเองไปข้างๆ และทำการ "แยกส่วน (Splits)" เปิดพาเนลย่อยๆ ออกมาด้านข้าง ราวกับคุณใช้มือปัดแบะข้อมูลออกกลางอากาศ',
    category: 'space',
    prompt: 'Create a gesture-driven holographic UI made of floating spatial cards.\n\nConcept:\nThe interface feels like it responds to hand gestures.\n\nVisual System:\n- Dark atmospheric background\n- Floating translucent panels in multiple depth layers\n- Light-based typography\n- Subtle glow pulse animation\n- Minimal UI chrome\n\nCard Design:\n- Rounded transparent light frames\n- Floating header bars\n- Expandable holographic detail layers\n- Semi-transparent content blocks\n- Smooth fade-in/out transitions\n\nInteraction:\n- Cards slide smoothly in 3D space\n- Hover adds subtle lift and glow\n- Clicking splits card into layered sub-panels\n- Scroll gently repositions spatial layout\n\nMood:\nHuman-computer gesture interaction.\nElegant and advanced.',
    thumbnailUrl: '/thumbnails/gesture-driven-hologram.png',
    tags: ['hologram', 'gesture', 'spatial-ui', 'transparent', 'futuristic', 'interaction'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T01:00:00.000Z',
    updatedAt: '2025-06-05T01:00:00.000Z',
  },
  {
    id: 'showcase-085',
    title: 'Holographic War Room',
    description: 'ศูนย์บัญชาการโฮโลแกรมจำลอง (War Room Interface) สุดเคร่งขรึม มาในโทนสีกรมท่าอมเทาเข้ม (Steel-blue) และเส้นกริด 3 มิติ (Projection grid) ทอดยาวอยู่บนพื้น การ์ดแดชบอร์ดใช้ดีไซน์ขอบเหลี่ยมจัด (Hard-edge) ไร้ความโค้งมน พร้อมการประมวลผลแท่งกราฟเสียง (Waveform) หวิ่งขึ้นลงตลอดเวลา เมื่อคลิกขยายการ์ดเป็นแผงควบคุมเต็มจอ เส้นกริดพื้นหลังจะเปลี่ยนมาเต้นตุบๆ (Pulse) ตอบสนองต่อการสั่งการ',
    category: 'dashboard',
    prompt: 'Design a futuristic holographic war-room interface composed entirely of glowing panels.\n\nConcept:\nA tactical intelligence hub with floating holographic cards.\n\nVisual System:\n- Dark steel-blue environment\n- Bright cyan and white glowing accents\n- Light grid projection beneath panels\n- Animated waveform and data graphs\n- Subtle ambient particles\n\nCard Design:\n- Hard-edge hologram frames\n- Dynamic scanning border animation\n- Layered data sub-cards\n- Floating numeric indicators\n- Projection-style typography\n\nInteraction:\n- Cards snap into alignment like magnetic light projections\n- Hover reveals hidden analytic layers\n- Clicking expands card into full holographic dashboard\n- Background grid pulses during interaction\n\nMood:\nHigh-tech surveillance and analysis center.\nSerious and powerful.',
    thumbnailUrl: '/thumbnails/war-room.png',
    tags: ['hologram', 'tactical', 'military', 'dashboard', 'grid', 'cyberpunk'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T02:00:00.000Z',
    updatedAt: '2025-06-05T02:00:00.000Z',
  },
  {
    id: 'showcase-086',
    title: 'God-Level Hologram Matrix',
    description: 'จำลองระบบศูนย์รวมปัญญาประดิษฐ์ระดับสูง (God-Level AI Matrix) บนพื้นหลังความมืดอนันต์ไร้ขอบเขต (Infinite dark void) การ์ดข้อมูลถูกเรียงซ้อนกันแบบมีความลึกที่ต่างกันชัดเจน ทีเด็ดคือระบบ Scroll! เมื่อคุณหมุนลูกกลิ้งเมาส์ หน้าจอจะไม่เลื่อนขึ้นลงปกติ แต่จะเป็นการ Zoom (TranslateZ) ทะลุทะลวงความลึกผ่านเลเยอร์ต่างๆ เข้าไปเรื่อยๆ พร้อมเอฟเฟกต์เบลอขณะเอาเมาส์วางการ์ดแผ่นอื่นที่ไม่ได้ถูกเลือก (Ripple wave) และการขยายหน้าจอแบบ Immersive projection',
    category: 'space',
    prompt: 'Create a god-level holographic intelligence interface composed of layered floating cards.\n\nConcept:\nA massive AI intelligence matrix visualized through glowing hologram panels.\n\nVisual System:\n- Infinite dark void\n- Floating light panels at varying depths\n- Interconnected glowing data lines\n- Real-time animated metric overlays\n- Subtle volumetric atmospheric glow\n- White, cyan, and soft violet accents\n\nCard Design:\n- Transparent luminous panels\n- Multi-layer expandable structure\n- Animated border light scan\n- Floating micro-data blocks\n- Seamless morphing expansion animation\n\nInteraction:\n- Hover causes ripple wave through connected cards\n- Scroll moves through layered depth levels\n- Clicking transforms card into immersive intelligence projection\n- Entire system subtly breathes with ambient light pulse\n\nMood:\nAI-driven future intelligence system.\nElegant. Advanced. Cinematic.',
    thumbnailUrl: '/thumbnails/god-level-matrix.png',
    tags: ['hologram', 'matrix', 'god-level', 'parallax', 'depth-scroll', 'ai'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T03:00:00.000Z',
    updatedAt: '2025-06-05T03:00:00.000Z',
  },
  {
    id: 'showcase-087',
    title: 'iOS 26 Liquid Glass UI Kit',
    description: 'ชุด UI Kit ครบวงจรสไตล์ iOS 26 Liquid Glass — ดีไซน์กระจกฝ้าโปร่งแสง (Frosted Glass) บนพื้นหลังสว่างอบอุ่น ไม่ใช่ Sci-Fi มืดๆ แต่เป็นมหาวิหารกระจกสุดหรูลอยอยู่กลางแสง ครอบคลุมทุกคอมโพเนนต์: Dynamic Island, Nav Bar, Search, Metric Cards, AI Intelligence Panel, Buttons, Inputs, Toggles, Slider, Segmented Control, Badges, Bottom Sheet, Toast — ทุกชิ้นใช้ Spring Physics Animation แบบ Apple',
    category: 'dashboard',
    prompt: `Design a complete iOS 26-inspired UI Kit — a holographic intelligence dashboard 
built entirely on Apple's Liquid Glass design language.

---

CONCEPT:
A next-generation AI intelligence interface using iOS 26's Liquid Glass aesthetic —
where every surface is translucent, physically real, and alive with depth.
Not a dark sci-fi void, but a luminous glass cathedral floating in soft light.

---

DESIGN SYSTEM — iOS 26 LIQUID GLASS:

Material Language:
- All panels use frosted glass with real-time specular highlights
- Multi-layered translucency: background blur (backdrop-filter) at varying intensities
- Glass surfaces refract and tint underlying content subtly
- Every element has physical weight — thick glass vs thin membrane layers
- Inner glow on edges, not outer glow (light comes through, not from behind)
- Subtle caustic light patterns on glass surfaces

Color Palette:
- Base: ultra-white void with soft warm ambient light (#FAFAFA / #F2F2F7)
- Glass tint: rgba(255,255,255,0.35) to rgba(255,255,255,0.65)
- Accent 1: iOS Blue (#007AFF) — interactive highlights
- Accent 2: Soft Indigo (#5E5CE6) — AI/intelligence indicators  
- Accent 3: Liquid Teal (#30D5C8) — data flows and live metrics
- Shadows: soft diffused, never hard — box-shadow with 40–60px blur radius
- No pure black. Dark text is #1C1C1E at 90% opacity

Typography:
- Display: SF Pro Display (or "system-ui" fallback) — ultra-light 100–200 weight for hero numbers
- Body: SF Pro Text — regular 400 for readability
- Labels: SF Pro Rounded — for badges, chips, status indicators
- Size scale: 11 / 13 / 15 / 17 / 20 / 28 / 34 / 48px (Apple's exact scale)
- Letter-spacing: tight on display (-0.5px), normal on body

---

UI KIT COMPONENTS — COMPLETE SET:

1. GLASS CARDS (3 variants)
   - Standard: frosted panel, 20px radius, soft shadow, inner border 1px rgba(255,255,255,0.6)
   - Elevated: thicker glass, deeper blur, subtle specular highlight on top edge
   - Interactive: hover causes glass to lighten and specular shift (like tilting real glass)

2. NAVIGATION BAR
   - Floating pill-shaped nav — not edge-to-edge
   - Glass surface with active tab showing deeper tint + blue indicator dot
   - Smooth morphing transition between tabs (width interpolation)
   - Home Indicator: thin white pill, centered

3. STATUS BAR & DYNAMIC ISLAND
   - Dynamic Island in resting, expanded, and notification states
   - Live activity pill variants (music, timer, AI processing)
   - Glass tint matches underlying card color

4. BUTTONS (5 variants)
   - Primary: solid iOS Blue, 14px radius, subtle inner highlight
   - Secondary: glass pill, rgba white, bordered
   - Ghost: transparent, text only, with underline ripple on tap
   - Icon Button: circular glass, SF Symbols-style icons
   - Destructive: red tinted glass

5. INPUT FIELDS
   - Recessed glass (darker tint inside = depth illusion)
   - Floating label animation (label floats up on focus)
   - Focus state: blue inner ring + slight glass brighten
   - Search bar: pill shape, magnifier icon, clear button

6. MODALS & SHEETS
   - Bottom sheet: slides up from edge, rounded top corners (28px)
   - Full sheet: glass background, soft dim on content below
   - Alert dialog: centered glass card, blurred backdrop

7. METRICS / DATA CARDS
   - Large number display (SF Pro Display Ultralight)
   - Sparkline chart in glass card
   - Ring/radial progress — iOS Health style
   - Live update pulse animation on changing values

8. AI INTELLIGENCE PANEL (hero component)
   - Multi-card matrix: 3×2 grid of glass panels at slight depth offset
   - Animated data flow lines connecting cards (SVG paths, animated stroke-dashoffset)
   - Real-time metrics with counter animations
   - "AI Processing" status with breathing ambient light

9. LISTS & TABLE ROWS
   - Grouped table style (iOS Settings-inspired)
   - Inset separator lines
   - Disclosure chevron, right-detail, switch toggle variants
   - Swipe-action ghost buttons

10. TOGGLE & CONTROLS
    - iOS-style switch: smooth physics spring animation
    - Segmented control: glass background, sliding indicator
    - Slider: glass track, circular thumb with depth shadow
    - Stepper: paired glass buttons

11. BADGES & CHIPS
    - Notification badge: red pill, white number
    - Status chip: glass pill + colored dot + label
    - Tag chip: rounded, tinted glass

12. NOTIFICATION / TOAST
    - Floating glass pill (Dynamic Island expansion style)
    - Icon + title + subtitle layout
    - Auto-dismiss with slide-up exit

---

INTERACTION PRINCIPLES:

Motion Language (iOS 26 Spring Physics):
- All animations use spring curves, never linear or ease-in-out
- Spring: stiffness 300, damping 30 (snappy but not bouncy)
- Tap feedback: scale(0.96) + brightness +10% then spring back
- Modal presentation: scale from 0.92 + fade, spring to 1.0
- Transitions feel physical — objects have weight and momentum

Glass Interaction:
- Hover: glass lightens 8%, specular highlight shifts direction
- Active/Press: glass compresses (scale 0.97), deeper tint
- Focus: blue ring appears with spring scale 1.02
- Cards at different z-depths react to scroll with parallax

Ambient Intelligence:
- Subtle breathing pulse on AI-active components (opacity 0.9 ↔ 1.0, 4s loop)
- Data flow lines animate continuously at low opacity (20–30%)
- Metric counters smoothly interpolate on new values

---

LAYOUT & COMPOSITION:

- Canvas: iPhone 16 Pro viewport (393×852pt) AND iPad Pro (1024px wide)
- Safe areas respected: 59px top, 34px bottom
- Spacing system: 4pt base grid (4/8/12/16/20/24/32/44/48pt)
- Cards have 16pt internal padding, 12pt gap between cards
- Content hugs safe area edges, panels float 8pt from edges

Visual Depth Stack:
  Layer 0 — Background: gradient mesh (warm white → soft gray)
  Layer 1 — Base cards: 40% opacity glass
  Layer 2 — Elevated cards: 55% opacity, higher blur
  Layer 3 — Modals/Sheets: 70% opacity, maximum blur
  Layer 4 — Overlays (tooltips, popovers): near-opaque glass

---

MOOD & PHILOSOPHY:

This is Apple's vision of AI made physical.
Not a dark sci-fi dashboard — a luminous, optimistic intelligence.
Glass that breathes. Data that flows like light through crystal.
Every interaction feels inevitable, physical, and alive.

Refined. Human. Extraordinary.
The intelligence of tomorrow, with the clarity of now.`,
    thumbnailUrl: '/thumbnails/ios26-liquid-glass.png',
    tags: ['ios', 'liquid-glass', 'apple', 'ui-kit', 'glassmorphism', 'light-theme', 'dashboard'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T04:00:00.000Z',
    updatedAt: '2025-06-05T04:00:00.000Z',
  },
  {
    id: 'showcase-088',
    title: 'Islamic-Inspired Card Interface',
    description: 'อินเตอร์เฟซการ์ดที่ได้รับแรงบันดาลใจจากศิลปะอิสลาม โทนสีเขียวมรกต ลวดลายเรขาคณิต และไฮไลท์สีทองหรูหรา',
    category: 'card',
    prompt: `Create a beautiful Islamic-inspired card interface.

Concept:
A calm spiritual interface inspired by mosque architecture and Islamic geometry.

Visual System:
- Deep emerald green background
- Subtle Islamic geometric pattern texture
- Soft gold accent lines
- Elegant lighting gradients
- Calm and balanced composition

Card Design:
- Rounded cards with elegant borders
- Thin gold frames
- Subtle shadow depth
- Islamic geometric corner ornaments
- Clean Arabic-inspired typography
- Spacious internal layout

Interaction:
- Soft hover glow on card borders
- Gentle fade-in transitions
- Card expands into layered information panel

Mood:
Spiritual, elegant, peaceful, timeless.`,
    thumbnailUrl: '/thumbnails/islamic-cards.png',
    tags: ['islamic', 'geometric', 'emerald', 'gold', 'premium', 'animation'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T05:00:00.000Z',
    updatedAt: '2025-06-05T05:00:00.000Z',
  },
  {
    id: 'showcase-089',
    title: 'Islamic Knowledge Platform',
    description: 'แพลตฟอร์มการเรียนรู้พื้นหลังกระดาษ Parchment พร้อมเนื้อหาคัดกรองจากคัมภีร์และการตีความเชิงวิชาการ',
    category: 'landing',
    prompt: `Create an Islamic knowledge platform using beautiful card panels.

Concept:
Cards represent knowledge modules such as Quran verses, Hadith, and learning topics.

Visual System:
- Warm parchment background
- Dark green and gold color palette
- Subtle Islamic manuscript texture
- Traditional Islamic decorative dividers

Card Design:
- Elegant framed cards
- Quran verse highlight blocks
- Arabic calligraphy titles
- Decorative border corners
- Expandable tafsir panels

Interaction:
- Cards reveal deeper learning layers
- Smooth scroll storytelling
- Hover highlights verse references

Mood:
Educational, sacred, respectful, scholarly.`,
    thumbnailUrl: '/thumbnails/islamic-knowledge.png',
    tags: ['education', 'islamic', 'manuscript', 'parchment', 'scholarly'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T06:00:00.000Z',
    updatedAt: '2025-06-05T06:00:00.000Z',
  },
  {
    id: 'showcase-090',
    title: 'Islamic Serene Night',
    description: 'อินเตอร์เฟซธีมกลางคืนที่เงียบสงบ ได้รับแรงบันดาลใจจากลานมัสยิดใต้แสงจันทร์และดวงดาว',
    category: 'card',
    prompt: `Create a night-themed Islamic interface inspired by mosque courtyards.

Concept:
Cards float in a calm nighttime spiritual environment.

Visual System:
- Deep midnight blue background
- Soft moonlight glow
- Subtle star particles
- Mosque silhouette horizon
- Silver and light blue highlights

Card Design:
- Soft glowing card frames
- Rounded elegant panels
- Minimal icons
- Light calligraphy headers
- Gentle glass-like surface

Interaction:
- Hover produces subtle light ripple
- Cards gently elevate
- Expanded cards reveal more reflections and glow

Mood:
Peaceful, reflective, spiritual night experience.`,
    thumbnailUrl: '/thumbnails/islamic-night.png',
    tags: ['night', 'islamic', 'serene', 'moonlight', 'spiritual', 'glassmorphism'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T07:00:00.000Z',
    updatedAt: '2025-06-05T07:00:00.000Z',
  },
  {
    id: 'showcase-091',
    title: 'Andalusian Architecture',
    description: 'อินเตอร์เฟซที่ได้รับแรงบันดาลใจจากสถาปัตยกรรมมุสลิมในสเปน (Andalusian) โทนสี Terracotta และลวดลายกระเบื้องโมเสกที่สวยงาม',
    category: 'landing',
    prompt: `Create a rich Islamic interface inspired by Andalusian architecture.

Concept:
Cards reflect classical Islamic art and palace architecture.

Visual System:
- Warm terracotta background
- Turquoise and gold accents
- Mosaic tile patterns
- Decorative arch shapes
- Rich cultural atmosphere

Card Design:
- Arch-shaped card headers
- Decorative tile borders
- Elegant pattern separators
- Multi-layer information panels
- Artistic typography hierarchy

Interaction:
- Card sections unfold vertically
- Sub-panels appear like opening palace doors
- Subtle ornament animations

Mood:
Cultural, historical, artistic, majestic.`,
    thumbnailUrl: '/thumbnails/andalusian.png',
    tags: ['andalusian', 'islamic', 'architecture', 'mosaic', 'terracotta'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T08:00:00.000Z',
    updatedAt: '2025-06-05T08:00:00.000Z',
  },
  {
    id: 'showcase-092',
    title: 'Modern Islamic Dashboard',
    description: 'แดชบอร์ดสไตล์โมเดิร์นที่ผสมผสานความเชื่อระดับจิตวิญญาณเข้ากับเทคโนโลยีสมัยใหม่ โทนสีเขียวเข้มตัดทอง',
    category: 'dashboard',
    prompt: `Create a modern Islamic digital dashboard built from structured cards.

Concept:
A platform that combines spirituality and technology.

Visual System:
- Dark green base
- Gold highlight accents
- Minimal Islamic geometric overlays
- Clean modern layout
- Subtle ambient lighting

Card Design:
- Modern minimal cards
- Geometric decorative lines
- Clear content hierarchy
- Expandable panel sections
- Elegant calligraphy section titles

Interaction:
- Cards align into structured grid
- Hover reveals additional wisdom quotes
- Expanded cards show deeper reflections

Mood:
Modern Islamic technology platform.
Calm, intelligent, inspiring.`,
    thumbnailUrl: '/thumbnails/modern-islamic-dashboard.png',
    tags: ['dashboard', 'islamic', 'modern', 'minimalist', 'green-gold'],
    difficulty: 'intermediate',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T09:00:00.000Z',
    updatedAt: '2025-06-05T09:00:00.000Z',
  },
  {
    id: 'showcase-093',
    title: 'Kaaba-Inspired Sacred Geometry',
    description: 'อินเตอร์เฟซที่ได้รับแรงบันดาลใจจากโครงสร้างและรูปทรงเรขาคณิตของกะอ์บะฮ์ มุ่งเน้นความเรียบง่าย ทรงพลัง และความสงบทางจิตวิญญาณ',
    category: 'card',
    prompt: `Create an Islamic interface inspired by the Kaaba and sacred geometry.

Concept:
Cards are arranged in a structured, symmetrical layout inspired by the geometry of the Kaaba courtyard.

Visual System:
- Deep black background
- Elegant gold accents
- Subtle marble texture
- Soft ambient lighting
- Minimal Islamic geometric patterns

Card Design:
- Rectangular cards with gold frame
- Subtle glowing edges
- Elegant Arabic calligraphy titles
- Clean structured content sections
- Expandable layered panels

Interaction:
- Cards align in symmetrical grid
- Hover produces soft golden glow
- Expanding card reveals deeper knowledge panel

Mood:
Sacred, powerful, minimalist, deeply spiritual.`,
    thumbnailUrl: '/thumbnails/kaaba-inspired.png',
    tags: ['kaaba', 'islamic', 'sacred-geometry', 'minimalist', 'black-gold'],
    difficulty: 'advanced',
    isFeatured: true,
    isActive: true,
    createdAt: '2025-06-05T10:00:00.000Z',
    updatedAt: '2025-06-05T10:00:00.000Z',
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
    return [...this.items]
      .filter((item) => item.isActive)
      .sort((a, b) => b.id.localeCompare(a.id));
  }

  async getPaginated(
    page: number,
    perPage: number,
    category?: string,
    tag?: string
  ): Promise<PaginatedResult<ShowcaseItem>> {
    await this.delay(100);
    let activeItems = this.items.filter((item) => item.isActive);

    if (category && category !== 'all') {
      activeItems = activeItems.filter((item) => item.category === category);
    }
    if (tag) {
      activeItems = activeItems.filter((item) => item.tags.includes(tag));
    }

    // Order by id desc
    activeItems.sort((a, b) => b.id.localeCompare(a.id));

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
    return this.items
      .filter((item) => item.category === category && item.isActive)
      .sort((a, b) => b.id.localeCompare(a.id));
  }

  async getFeatured(): Promise<ShowcaseItem[]> {
    await this.delay(100);
    return this.items
      .filter((item) => item.isFeatured && item.isActive)
      .sort((a, b) => b.id.localeCompare(a.id));
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
