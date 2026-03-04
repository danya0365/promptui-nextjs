'use client';

import type { ShowcaseLivePreview } from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { siteConfig } from '@/src/config/site.config';
import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { AnimatedCard } from '@/src/presentation/components/shared/AnimatedCard';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import { GalleryViewModel } from '@/src/presentation/presenters/gallery/GalleryPresenter';
import { useGalleryPresenter } from '@/src/presentation/presenters/gallery/useGalleryPresenter';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface GalleryViewProps {
  initialViewModel?: GalleryViewModel;
}

export function GalleryView({ initialViewModel }: GalleryViewProps) {
  const [state, actions] = useGalleryPresenter(initialViewModel);
  const viewModel = state.viewModel;

  // ── Animated search bar ──
  const [searchFocused, setSearchFocused] = useState(false);
  const searchSpring = useSpring({
    boxShadow: searchFocused
      ? '0 0 0 3px rgba(124, 58, 237, 0.2), 0 4px 16px rgba(124, 58, 237, 0.1)'
      : '0 0 0 0px transparent, 0 1px 3px rgba(0,0,0,0.04)',
    borderColor: searchFocused ? 'var(--color-primary)' : 'var(--color-border)',
    config: { tension: 300, friction: 20 },
  });

  // ── Loading ──
  if (state.loading && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted">กำลังโหลดแกลเลอรี...</p>
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

  const difficultyOptions = [
    { id: 'all', label: 'ทั้งหมด' },
    ...siteConfig.difficulties.map((d) => ({ id: d.id, label: d.label })),
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Page Header ═══ */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              🎨 <span className="text-gradient">แกลเลอรี</span>
            </h1>
            <p className="text-muted max-w-xl mx-auto">
              สำรวจ UI ตัวอย่างทั้งหมด เลือกที่ชอบแล้ว copy prompt ไปใช้กับ AI
              ได้เลย
            </p>
          </div>
        </ScrollReveal>

        {/* ═══ Search & Filters Bar ═══ */}
        <ScrollReveal delay={100}>
          <GlassPanel className="p-4 sm:p-5 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <animated.div style={searchSpring} className="flex-1 rounded-xl">
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="ค้นหา UI ตัวอย่าง..."
                    value={state.searchTerm}
                    onChange={(e) => actions.setSearchTerm(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted-light focus:outline-none"
                  />
                </div>
              </animated.div>

              {/* Difficulty filter */}
              <div className="flex items-center gap-2 flex-wrap">
                {difficultyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => actions.setActiveDifficulty(opt.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer select-none ${
                      state.activeDifficulty === opt.id
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-alt text-muted border border-border hover:border-primary'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-surface-alt rounded-lg p-1 border border-border">
                <button
                  onClick={() => actions.setViewMode('grid')}
                  className={`p-2 rounded-md text-sm transition-colors cursor-pointer ${
                    state.viewMode === 'grid'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-muted hover:text-foreground'
                  }`}
                  aria-label="Grid view"
                >
                  ▦
                </button>
                <button
                  onClick={() => actions.setViewMode('list')}
                  className={`p-2 rounded-md text-sm transition-colors cursor-pointer ${
                    state.viewMode === 'list'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-muted hover:text-foreground'
                  }`}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ═══ Category Bar ═══ */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
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
        </ScrollReveal>

        {/* ═══ AI Agent Filter Bar ═══ */}
        <ScrollReveal delay={180}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="text-xs font-semibold text-muted mr-1">🤖 Agent:</span>
            {siteConfig.aiModels
              .filter((agent) => {
                if (agent.id === 'all') return true;
                // Check if any showcase has a preview with this aiModel
                return Object.values(state.livePreviewMap).some((previews) =>
                  previews.some((p) => p.aiModel === agent.id)
                );
              })
              .map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => actions.setActiveAiModel(agent.id)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer select-none ${
                    state.activeAiModel === agent.id
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-surface-alt text-muted border border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  <span>{agent.icon}</span>
                  <span>{agent.label}</span>
                </button>
              ))}
          </div>
        </ScrollReveal>

        {/* ═══ Results Count ═══ */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted">
            แสดง <span className="font-semibold text-foreground">{state.isClientFilterActive ? state.totalFilteredCount : state.viewModel?.totalCount || 0}</span> รายการ
          </p>
        </div>

        {/* ═══ Showcase Grid / List ═══ */}
        {state.viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.displayedItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 60}>
                <ShowcaseGridCard
                  item={item}
                  onCopy={() => actions.copyPrompt(item)}
                  copied={state.copiedId === item.id}
                  livePreviews={state.livePreviewMap[item.id] || []}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {state.displayedItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 40}>
                <ShowcaseListCard
                  item={item}
                  onCopy={() => actions.copyPrompt(item)}
                  copied={state.copiedId === item.id}
                  livePreviews={state.livePreviewMap[item.id] || []}
                />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* ═══ Empty ═══ */}
        {state.displayedItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium text-foreground mb-2">
              ไม่พบ UI ที่ตรงกัน
            </p>
            <p className="text-muted mb-6">ลองเปลี่ยนคำค้นหาหรือตัวกรอง</p>
            <AnimatedButton
              variant="ghost"
              onClick={() => {
                actions.setSearchTerm('');
                actions.setActiveCategory('all');
                actions.setActiveDifficulty('all');
                actions.setActiveAiModel('all');
              }}
            >
              ล้างตัวกรอง
            </AnimatedButton>
          </div>
        )}

        {/* ═══ Pagination ═══ */}
        {(() => {
          if (!state.viewModel) return null;
          
          const totalPages = state.isClientFilterActive 
            ? Math.ceil(state.totalFilteredCount / state.viewModel.perPage)
            : Math.ceil(state.viewModel.totalCount / state.viewModel.perPage);
            
          if (totalPages <= 1) return null;
          
          const currentPage = state.isClientFilterActive ? state.clientPage : state.viewModel.page;
          const hasPrev = currentPage > 1;
          const hasNext = currentPage < totalPages;
          
          return (
            <div className="flex justify-center items-center gap-2 mt-12 mb-8">
              {/* Prev Button */}
              {state.isClientFilterActive ? (
                <button
                  onClick={() => actions.setClientPage(currentPage - 1)}
                  disabled={!hasPrev}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    hasPrev
                      ? 'bg-surface border-border hover:border-primary hover:text-primary cursor-pointer'
                      : 'bg-surface-alt border-transparent text-muted cursor-not-allowed opacity-50'
                  }`}
                >
                  ← ก่อนหน้า
                </button>
              ) : (
                <Link
                  href={
                    hasPrev
                      ? `/gallery?page=${currentPage - 1}${
                          state.activeCategory !== 'all' ? `&category=${state.activeCategory}` : ''
                        }`
                      : '#'
                  }
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    hasPrev
                      ? 'bg-surface border-border hover:border-primary hover:text-primary'
                      : 'bg-surface-alt border-transparent text-muted cursor-not-allowed opacity-50 pointer-events-none'
                  }`}
                  aria-disabled={!hasPrev}
                >
                  ← ก่อนหน้า
                </Link>
              )}

              <div className="text-sm font-medium text-muted px-2">
                หน้า {currentPage} / {totalPages}
              </div>

              {/* Next Button */}
              {state.isClientFilterActive ? (
                <button
                  onClick={() => actions.setClientPage(currentPage + 1)}
                  disabled={!hasNext}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    hasNext
                      ? 'bg-surface border-border hover:border-primary hover:text-primary cursor-pointer'
                      : 'bg-surface-alt border-transparent text-muted cursor-not-allowed opacity-50'
                  }`}
                >
                  ถัดไป →
                </button>
              ) : (
                <Link
                  href={
                    hasNext
                      ? `/gallery?page=${currentPage + 1}${
                          state.activeCategory !== 'all' ? `&category=${state.activeCategory}` : ''
                        }`
                      : '#'
                  }
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    hasNext
                      ? 'bg-surface border-border hover:border-primary hover:text-primary'
                      : 'bg-surface-alt border-transparent text-muted cursor-not-allowed opacity-50 pointer-events-none'
                  }`}
                  aria-disabled={!hasNext}
                >
                  ถัดไป →
                </Link>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

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

const difficultyConfig: Record<string, { label: string; color: string }> = {
  beginner: {
    label: 'เริ่มต้น',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  intermediate: {
    label: 'ปานกลาง',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  advanced: {
    label: 'ขั้นสูง',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
};

/** Tiny agent icon badges shown on cards */
function AgentBadges({ previews }: { previews: ShowcaseLivePreview[] }) {
  if (previews.length === 0) return null;

  return (
    <div className="flex items-center gap-1">
      {previews.map((preview) => {
        const agentInfo = siteConfig.aiModels.find(
          (a) => a.id === preview.aiModel
        );
        return (
          <span
            key={preview.id}
            title={`Live Preview by ${agentInfo?.label || preview.aiModel}`}
            className="text-xs cursor-default"
          >
            {agentInfo?.icon || '🤖'}
          </span>
        );
      })}
    </div>
  );
}

function ShowcaseGridCard({
  item,
  onCopy,
  copied,
  livePreviews,
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
  livePreviews: ShowcaseLivePreview[];
}) {
  const diff = difficultyConfig[item.difficulty] || difficultyConfig.beginner;

  return (
    <AnimatedCard>
      <Link href={`/gallery/${item.id}`} className="block">
        {/* Thumbnail */}
        <div className="relative h-44 bg-surface flex items-center justify-center overflow-hidden group">
          {livePreviews.length > 0 ? (
            <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <iframe
                src={`/live/${item.id}/${livePreviews[0].aiModel}`}
                className="w-full h-full border-0 bg-background"
                loading="lazy"
                tabIndex={-1}
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity group-hover:scale-110 transform duration-500">
                {siteConfig.categories.find((c) => c.id === item.category)?.icon || '🎨'}
              </div>
            </div>
          )}

          {/* Overlay gradient to make text readable and ensure card acts as a link */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCopy();
            }}
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-panel opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary hover:text-white"
          >
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
          <span
            className={`absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${diff.color}`}
          >
            {diff.label}
          </span>
          {/* Agent icons — bottom right */}
          {livePreviews.length > 0 && (
            <span className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-0.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
              <AgentBadges previews={livePreviews} />
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-foreground mb-1.5 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted line-clamp-2 mb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag text-[11px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
}

function ShowcaseListCard({
  item,
  onCopy,
  copied,
  livePreviews,
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
  livePreviews: ShowcaseLivePreview[];
}) {
  const diff = difficultyConfig[item.difficulty] || difficultyConfig.beginner;

  return (
    <AnimatedCard>
      <Link
        href={`/gallery/${item.id}`}
        className="flex flex-col sm:flex-row items-stretch"
      >
        {/* Left Thumbnail */}
        <div className="relative w-full sm:w-48 h-32 sm:h-auto bg-surface flex items-center justify-center flex-shrink-0 overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none group">
          {livePreviews.length > 0 ? (
            <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <iframe
                src={`/live/${item.id}/${livePreviews[0].aiModel}`}
                className="w-full h-full border-0 bg-background"
                loading="lazy"
                tabIndex={-1}
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-4xl opacity-40">
                {siteConfig.categories.find((c) => c.id === item.category)?.icon || '🎨'}
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

          <span
            className={`absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded-full text-[11px] font-semibold backdrop-blur-md ${diff.color}`}
          >
            {diff.label}
          </span>
          {livePreviews.length > 0 && (
            <span className="absolute bottom-2 right-2 z-20 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
              <AgentBadges previews={livePreviews} />
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted line-clamp-1 mb-3">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="tag text-[11px]">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy();
              }}
              className="flex-shrink-0 ml-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
}
