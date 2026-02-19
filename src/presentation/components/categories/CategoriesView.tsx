'use client';

import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { AnimatedCard } from '@/src/presentation/components/shared/AnimatedCard';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import { CategoriesViewModel } from '@/src/presentation/presenters/categories/CategoriesPresenter';
import { useCategoriesPresenter } from '@/src/presentation/presenters/categories/useCategoriesPresenter';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface CategoriesViewProps {
  initialViewModel?: CategoriesViewModel;
}

export function CategoriesView({ initialViewModel }: CategoriesViewProps) {
  const [state, actions] = useCategoriesPresenter(initialViewModel);
  const viewModel = state.viewModel;

  // ── Hero spring ──
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  // ── Loading ──
  if (state.loading && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted">กำลังโหลดหมวดหมู่...</p>
        </div>
      </div>
    );
  }

  if (state.error && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassPanel className="p-8 text-center max-w-md">
          <p className="text-4xl mb-4">⚠️</p>
          <p className="text-red-500 font-medium mb-2">เกิดข้อผิดพลาด</p>
          <AnimatedButton onClick={actions.loadData}>ลองใหม่</AnimatedButton>
        </GlassPanel>
      </div>
    );
  }

  if (!viewModel) return null;

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Page Header ═══ */}
        <animated.div style={heroSpring} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            📂 <span className="text-gradient">หมวดหมู่</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            สำรวจ UI ตัวอย่างจากทุกหมวดหมู่ เลือกหมวดที่สนใจแล้วเริ่มสร้าง UI
            ของคุณได้เลย
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {viewModel.stats.totalItems}
              </p>
              <p className="text-xs text-muted">UI ทั้งหมด</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {viewModel.categories.length}
              </p>
              <p className="text-xs text-muted">หมวดหมู่</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {viewModel.stats.featuredItems}
              </p>
              <p className="text-xs text-muted">แนะนำ</p>
            </div>
          </div>
        </animated.div>

        {/* ═══ Category Cards Grid ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {viewModel.categories.map((cat, index) => (
            <ScrollReveal key={cat.id} delay={index * 80}>
              <CategoryCard category={cat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CategoryCard Sub-component
   ───────────────────────────────────────────── */

function CategoryCard({
  category,
}: {
  category: {
    id: string;
    label: string;
    icon: string;
    itemCount: number;
    items: Array<{ id: string; title: string; difficulty: string }>;
  };
}) {
  const [hovered, setHovered] = useState(false);

  const iconSpring = useSpring({
    transform: hovered ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
    config: { tension: 300, friction: 15 },
  });

  const difficultyConfig: Record<string, string> = {
    beginner: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    intermediate: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    advanced: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  };

  return (
    <AnimatedCard>
      <Link
        href={`/gallery?category=${category.id}`}
        className="block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon Header */}
        <div className="h-36 bg-gradient-to-br from-primary/15 via-accent/8 to-primary/5 flex items-center justify-center relative overflow-hidden">
          {/* Background pattern dots */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <animated.span style={iconSpring} className="text-6xl relative z-10">
            {category.icon}
          </animated.span>
          {/* Item count badge */}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
            {category.itemCount} UI
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2">
            {category.label}
          </h3>

          {/* Preview items */}
          {category.items.length > 0 ? (
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted truncate pr-2">{item.title}</span>
                  <span
                    className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      difficultyConfig[item.difficulty] || difficultyConfig.beginner
                    }`}
                  >
                    {item.difficulty === 'beginner'
                      ? 'เริ่มต้น'
                      : item.difficulty === 'intermediate'
                        ? 'ปานกลาง'
                        : 'ขั้นสูง'}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-light">ยังไม่มี UI ในหมวดนี้</p>
          )}

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-border">
            <span className="text-sm font-medium text-primary group-hover:underline">
              ดูทั้งหมด →
            </span>
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
}
