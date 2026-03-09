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

  /** AI Models that can generate live previews */
  aiModels: [
    { id: 'all',                label: 'ทั้งหมด',             icon: '🤖', color: 'slate' },
    { id: 'gpt-4o',             label: 'GPT-4o',             icon: '💚', color: 'emerald' },
    { id: 'gpt-4.1',            label: 'GPT-4.1',            icon: '💚', color: 'green' },
    { id: 'claude-3.7-sonnet',  label: 'Claude 3.7 Sonnet',  icon: '🟠', color: 'amber' },
    { id: 'claude-4-sonnet',    label: 'Claude 4 Sonnet',    icon: '🟠', color: 'orange' },
    { id: 'claude-4.6-opus',    label: 'Claude 4.6 Opus',    icon: '🟠', color: 'orange' },
    { id: 'claude-4.6-sonnet',  label: 'Claude 4.6 Sonnet',  icon: '🟠', color: 'orange' },
    { id: 'gemini-3-preview',   label: 'Gemini 3 Preview',   icon: '✨', color: 'indigo' },
    { id: 'gemini-3-pro',       label: 'Gemini 3 Pro',       icon: '✨', color: 'indigo' },
    { id: 'gemini-3-flash',     label: 'Gemini 3 Flash',     icon: '✨', color: 'indigo' },
    { id: 'gemini-3.1-pro',     label: 'Gemini 3.1 Pro',     icon: '✨', color: 'indigo' },
    { id: 'gemini-2.5-pro',     label: 'Gemini 2.5 Pro',     icon: '🔵', color: 'blue' },
    { id: 'gemini-2.5-flash',   label: 'Gemini 2.5 Flash',   icon: '🔵', color: 'sky' },
    { id: 'deepseek-v3',        label: 'DeepSeek V3',        icon: '🐋', color: 'indigo' },
    { id: 'deepseek-r1',        label: 'DeepSeek R1',        icon: '🐋', color: 'violet' },
    { id: 'grok-3',             label: 'Grok 3',             icon: '⚡', color: 'zinc' },
    { id: 'llama-4',            label: 'Llama 4',            icon: '🦙', color: 'cyan' },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.navigation)[number];
export type Category = (typeof siteConfig.categories)[number];
export type Difficulty = (typeof siteConfig.difficulties)[number];
export type AiModelConfig = (typeof siteConfig.aiModels)[number];
export type AiModel = Exclude<(typeof siteConfig.aiModels)[number]['id'], 'all'>;

