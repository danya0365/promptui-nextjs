/**
 * Site Configuration — Single source of truth for branding & navigation
 * Following Clean Architecture: config lives outside domain logic
 */

export const siteConfig = {
  name: 'PromptUI',
  tagline: 'UI Showcase Gallery',
  description:
    'ค้นพบ UI สวย ๆ พร้อม prompt ที่ใช้สร้าง — copy ไปใช้กับ AI ได้ทันที',
  url: 'https://promptui.dev',

  /** Navigation links shown in Header */
  navigation: [
    { label: 'หน้าแรก', href: '/' },
    { label: 'แกลเลอรี', href: '/gallery' },
    { label: 'หมวดหมู่', href: '/categories' },
    { label: 'เกี่ยวกับ', href: '/about' },
  ] as const,

  /** Footer columns */
  footer: {
    about:
      'PromptUI คือแพลตฟอร์มรวม UI ตัวอย่างสุดสวย พร้อม prompt สำหรับ AI ให้คุณ copy ไปสร้าง UI ในโปรเจคของคุณได้ทันที',
    links: [
      { label: 'แกลเลอรี', href: '/gallery' },
      { label: 'หมวดหมู่', href: '/categories' },
      { label: 'วิธีใช้งาน', href: '/how-to' },
      { label: 'ติดต่อเรา', href: '/contact' },
    ],
    social: [
      { label: 'GitHub', href: 'https://github.com/promptui', icon: 'github' },
      { label: 'Twitter', href: 'https://twitter.com/promptui', icon: 'twitter' },
    ],
    copyright: `© ${new Date().getFullYear()} PromptUI. All rights reserved.`,
  },

  /** Showcase categories */
  categories: [
    { id: 'all', label: 'ทั้งหมด', icon: '🎨' },
    { id: 'login', label: 'Login & Auth', icon: '🔐' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'landing', label: 'Landing Page', icon: '🚀' },
    { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
    { id: 'form', label: 'Forms', icon: '📝' },
    { id: 'card', label: 'Cards & Panels', icon: '🃏' },
  ] as const,

  /** Difficulty levels */
  difficulties: [
    { id: 'beginner', label: 'เริ่มต้น', color: 'emerald' },
    { id: 'intermediate', label: 'ปานกลาง', color: 'amber' },
    { id: 'advanced', label: 'ขั้นสูง', color: 'rose' },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.navigation)[number];
export type Category = (typeof siteConfig.categories)[number];
export type Difficulty = (typeof siteConfig.difficulties)[number];
