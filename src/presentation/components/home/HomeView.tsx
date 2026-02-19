'use client';

import { siteConfig } from '@/src/config/site.config';
import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { AnimatedCard } from '@/src/presentation/components/shared/AnimatedCard';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import { HomeViewModel } from '@/src/presentation/presenters/home/HomePresenter';
import { useHomePresenter } from '@/src/presentation/presenters/home/useHomePresenter';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface HomeViewProps {
  initialViewModel?: HomeViewModel;
}

export function HomeView({ initialViewModel }: HomeViewProps) {
  const [state, actions] = useHomePresenter(initialViewModel);
  const viewModel = state.viewModel;

  // ── Hero text spring ──
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  const heroSubSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
    config: { tension: 120, friction: 14 },
  });

  const ctaSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 400,
    config: { tension: 120, friction: 14 },
  });

  // ── Loading ──
  if (state.loading && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  // ── Error ──
  if (state.error && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassPanel className="p-8 text-center max-w-md">
          <p className="text-4xl mb-4">⚠️</p>
          <p className="text-red-500 font-medium mb-2">เกิดข้อผิดพลาด</p>
          <p className="text-muted mb-4">{state.error}</p>
          <AnimatedButton onClick={actions.loadData}>ลองใหม่</AnimatedButton>
        </GlassPanel>
      </div>
    );
  }

  if (!viewModel) return null;

  return (
    <div className="flex flex-col">
      {/* ══════════════════════════════════════
          HERO SECTION
         ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <animated.div style={heroSpring}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="animate-pulse-ring inline-block w-2 h-2 rounded-full bg-primary" />
              UI Showcase Gallery
            </span>
          </animated.div>

          {/* Heading */}
          <animated.h1
            style={heroSpring}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">สร้าง UI สวย ๆ ด้วย</span>
            <br />
            <span className="text-gradient animate-gradient">
              Prompt เพียงบรรทัดเดียว
            </span>
          </animated.h1>

          {/* Subtitle */}
          <animated.p
            style={heroSubSpring}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mb-10"
          >
            {siteConfig.description}
          </animated.p>

          {/* CTA Buttons */}
          <animated.div
            style={ctaSpring}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/gallery">
              <AnimatedButton variant="primary" className="px-8 py-3 text-base">
                🎨 เริ่มดู Gallery
              </AnimatedButton>
            </Link>
            <Link href="/how-to">
              <AnimatedButton variant="ghost" className="px-8 py-3 text-base">
                📖 วิธีใช้งาน
              </AnimatedButton>
            </Link>
          </animated.div>

          {/* Stats Row */}
          <animated.div
            style={ctaSpring}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14"
          >
            <StatItem
              value={viewModel.stats.totalItems}
              label="UI ตัวอย่าง"
              icon="🎨"
            />
            <StatItem
              value={viewModel.stats.featuredItems}
              label="แนะนำ"
              icon="⭐"
            />
            <StatItem
              value={Object.keys(viewModel.stats.categoryCounts).length}
              label="หมวดหมู่"
              icon="📂"
            />
          </animated.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATEGORY FILTER
         ══════════════════════════════════════ */}
      <ScrollReveal>
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {siteConfig.categories.map((cat) => (
                <CategoryPill
                  key={cat.id}
                  icon={cat.icon}
                  label={cat.label}
                  active={state.activeCategory === cat.id}
                  onClick={() => actions.setActiveCategory(cat.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════
          SHOWCASE GRID
         ══════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                🔥 UI ตัวอย่างล่าสุด
              </h2>
              <p className="text-muted">
                เลือก UI ที่ชอบ แล้ว copy prompt ไปใช้กับ AI ได้เลย
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <ShowcaseCard
                  item={item}
                  onCopy={() => actions.copyPrompt(item)}
                  copied={state.copiedId === item.id}
                />
              </ScrollReveal>
            ))}
          </div>

          {state.filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-muted">ไม่พบ UI ในหมวดหมู่นี้</p>
            </div>
          )}

          {/* View All link */}
          {state.filteredItems.length > 0 && (
            <div className="text-center mt-10">
              <Link href="/gallery">
                <AnimatedButton variant="ghost" className="px-8 py-3">
                  ดูทั้งหมด →
                </AnimatedButton>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
         ══════════════════════════════════════ */}
      <ScrollReveal>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <GlassPanel strong className="p-10 sm:p-14 gradient-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                พร้อมสร้าง UI สุดเจ๋งแล้วหรือยัง?
              </h2>
              <p className="text-muted mb-8 max-w-lg mx-auto">
                เพียง copy prompt จาก PromptUI แล้ววางใน AI ที่คุณใช้ — ได้ UI
                สวยพร้อมใช้งานทันที
              </p>
              <Link href="/gallery">
                <AnimatedButton variant="primary" className="px-10 py-3.5 text-base">
                  🚀 เริ่มใช้งานฟรี
                </AnimatedButton>
              </Link>
            </GlassPanel>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function StatItem({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-2xl">{icon}</span>
      <div className="text-left">
        <p className="text-2xl font-bold text-foreground">{value}+</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}

function CategoryPill({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const pillSpring = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 350, friction: 18 },
  });

  return (
    <animated.button
      style={pillSpring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer select-none ${
        active
          ? 'bg-primary text-white shadow-md shadow-primary/25'
          : 'bg-surface-alt text-muted border border-border hover:border-primary hover:text-primary'
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </animated.button>
  );
}

function ShowcaseCard({
  item,
  onCopy,
  copied,
}: {
  item: {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    difficulty: string;
  };
  onCopy: () => void;
  copied: boolean;
}) {
  const difficultyConfig: Record<string, { label: string; color: string }> = {
    beginner: { label: 'เริ่มต้น', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
    intermediate: { label: 'ปานกลาง', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
    advanced: { label: 'ขั้นสูง', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
  };

  const diff = difficultyConfig[item.difficulty] || difficultyConfig.beginner;

  return (
    <AnimatedCard>
      <Link href={`/gallery/${item.id}`} className="block">
        {/* Thumbnail Placeholder */}
        <div className="relative h-44 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center overflow-hidden group">
          <div className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity group-hover:scale-110 transition-transform duration-500">
            {siteConfig.categories.find((c) => c.id === item.category)?.icon || '🎨'}
          </div>
          {/* Copy Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCopy();
            }}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-panel opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary hover:text-white"
          >
            {copied ? '✅ Copied!' : '📋 Copy Prompt'}
          </button>
          {/* Difficulty Badge */}
          <span
            className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${diff.color}`}
          >
            {diff.label}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-foreground mb-1.5 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag text-[11px]">
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="tag text-[11px]">+{item.tags.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
}
