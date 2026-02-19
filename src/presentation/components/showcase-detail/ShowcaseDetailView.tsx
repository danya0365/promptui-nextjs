'use client';

import { siteConfig } from '@/src/config/site.config';
import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { AnimatedCard } from '@/src/presentation/components/shared/AnimatedCard';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import { ShowcaseDetailViewModel } from '@/src/presentation/presenters/showcase-detail/ShowcaseDetailPresenter';
import { useShowcaseDetailPresenter } from '@/src/presentation/presenters/showcase-detail/useShowcaseDetailPresenter';
import Link from 'next/link';
import { animated, useSpring } from 'react-spring';

interface ShowcaseDetailViewProps {
  id: string;
  initialViewModel?: ShowcaseDetailViewModel;
}

const difficultyConfig: Record<string, { label: string; color: string }> = {
  beginner: {
    label: 'เริ่มต้น',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  },
  intermediate: {
    label: 'ปานกลาง',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  },
  advanced: {
    label: 'ขั้นสูง',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  },
};

/** Agent badge color mapping */
const agentBadgeColors: Record<string, string> = {
  antigravity: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/25 hover:bg-violet-500/25',
  chatgpt:     'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25 hover:bg-emerald-500/25',
  claude:      'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25 hover:bg-amber-500/25',
  gemini:      'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/25 hover:bg-blue-500/25',
  copilot:     'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/25 hover:bg-indigo-500/25',
  v0:          'bg-zinc-500/15 text-zinc-600 dark:text-zinc-400 border-zinc-500/25 hover:bg-zinc-500/25',
  bolt:        'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/25 hover:bg-cyan-500/25',
};

export function ShowcaseDetailView({
  id,
  initialViewModel,
}: ShowcaseDetailViewProps) {
  const [state, actions] = useShowcaseDetailPresenter(id, initialViewModel);
  const viewModel = state.viewModel;

  // Copy button spring
  const copySpring = useSpring({
    transform: state.copied ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 400, friction: 15 },
  });

  // ── Loading ──
  if (state.loading && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted">กำลังโหลดรายละเอียด...</p>
        </div>
      </div>
    );
  }

  // ── Not Found ──
  if (!state.loading && !viewModel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassPanel className="p-10 text-center max-w-md">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-xl font-bold text-foreground mb-2">
            ไม่พบ UI ตัวอย่าง
          </h1>
          <p className="text-muted mb-6">
            UI ที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่ในระบบ
          </p>
          <Link href="/gallery">
            <AnimatedButton variant="primary">กลับไปแกลเลอรี</AnimatedButton>
          </Link>
        </GlassPanel>
      </div>
    );
  }

  if (!viewModel) return null;

  const { item, relatedItems, livePreviews } = viewModel;
  const diff = difficultyConfig[item.difficulty] || difficultyConfig.beginner;
  const categoryInfo = siteConfig.categories.find(
    (c) => c.id === item.category
  );
  const hasLivePreviews = livePreviews.length > 0;

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Breadcrumb ═══ */}
        <ScrollReveal>
          <nav className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              หน้าแรก
            </Link>
            <span>/</span>
            <Link
              href="/gallery"
              className="hover:text-primary transition-colors"
            >
              แกลเลอรี
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {item.title}
            </span>
          </nav>
        </ScrollReveal>

        {/* ═══ Hero Section ═══ */}
        <ScrollReveal>
          <GlassPanel strong className="overflow-hidden mb-8">
            {/* Thumbnail */}
            <div className="relative h-56 sm:h-72 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
              <div className="text-7xl sm:text-8xl opacity-30">
                {categoryInfo?.icon || '🎨'}
              </div>
              {/* Featured badge */}
              {item.isFeatured && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  ⭐ แนะนำ
                </span>
              )}
            </div>

            {/* Info Bar */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${diff.color}`}
                >
                  {diff.label}
                </span>
                <span className="tag">
                  {categoryInfo?.icon} {categoryInfo?.label || item.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                {item.title}
              </h1>
              <p className="text-muted leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* ═══ Live Preview Agent Badges ═══ */}
              {hasLivePreviews && (
                <div className="mt-6">
                  <p className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
                    🖥️ Live Preview จาก AI Agent
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {livePreviews.map((preview) => {
                      const agentInfo = siteConfig.aiAgents.find(
                        (a) => a.id === preview.aiAgent
                      );
                      const badgeColor =
                        agentBadgeColors[preview.aiAgent] ||
                        'bg-slate-500/15 text-slate-400 border-slate-500/25';
                      return (
                        <Link
                          key={preview.id}
                          href={`/live/${item.id}/${preview.aiAgent}`}
                          target="_blank"
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border cursor-pointer transition-all duration-200 ${badgeColor}`}
                          >
                            {agentInfo?.icon}{' '}
                            {agentInfo?.label || preview.aiAgent}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </GlassPanel>
        </ScrollReveal>

        {/* ═══ Prompt Block ═══ */}
        <ScrollReveal delay={100}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">
                📋 Prompt สำหรับ AI
              </h2>
              <animated.div style={copySpring}>
                <AnimatedButton
                  variant={state.copied ? 'primary' : 'ghost'}
                  onClick={actions.copyPrompt}
                  className="text-sm"
                >
                  {state.copied ? '✅ Copied!' : '📋 Copy Prompt'}
                </AnimatedButton>
              </animated.div>
            </div>

            <GlassPanel
              strong
              className="p-5 sm:p-6 gradient-border"
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground font-mono">
                {item.prompt}
              </pre>
            </GlassPanel>

            <p className="text-xs text-muted-light mt-3">
              💡 คัดลอก prompt นี้แล้ววางใน ChatGPT, Claude หรือ AI อื่น ๆ
              เพื่อสร้าง UI นี้ขึ้นมา
            </p>
          </div>
        </ScrollReveal>

        {/* ═══ Related Showcases ═══ */}
        {relatedItems.length > 0 && (
          <ScrollReveal delay={200}>
            <div>
              <h2 className="text-lg font-bold text-foreground mb-6">
                🔗 UI อื่น ๆ ในหมวดเดียวกัน
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedItems.map((related, i) => {
                  const relDiff =
                    difficultyConfig[related.difficulty] ||
                    difficultyConfig.beginner;
                  const relCat = siteConfig.categories.find(
                    (c) => c.id === related.category
                  );

                  return (
                    <ScrollReveal key={related.id} delay={i * 80}>
                      <AnimatedCard>
                        <Link href={`/gallery/${related.id}`} className="block">
                          <div className="h-32 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 flex items-center justify-center">
                            <span className="text-4xl opacity-40">
                              {relCat?.icon || '🎨'}
                            </span>
                          </div>
                          <div className="p-4">
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold mb-2 ${relDiff.color}`}
                            >
                              {relDiff.label}
                            </span>
                            <h3 className="text-sm font-bold text-foreground line-clamp-1">
                              {related.title}
                            </h3>
                            <p className="text-xs text-muted line-clamp-2 mt-1">
                              {related.description}
                            </p>
                          </div>
                        </Link>
                      </AnimatedCard>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ═══ Back to Gallery ═══ */}
        <ScrollReveal delay={250}>
          <div className="text-center mt-12">
            <Link href="/gallery">
              <AnimatedButton variant="ghost" className="px-8">
                ← กลับไปแกลเลอรี
              </AnimatedButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
