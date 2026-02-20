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
    category?: string
  ): Promise<PaginatedResult<ShowcaseItem>> {
    await this.delay(100);
    let activeItems = this.items.filter((item) => item.isActive);

    if (category && category !== 'all') {
      activeItems = activeItems.filter((item) => item.category === category);
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
