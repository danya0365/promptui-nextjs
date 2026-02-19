'use client';

import { siteConfig } from '@/src/config/site.config';
import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const features = [
  {
    icon: '🎨',
    title: 'UI สวยพร้อมใช้',
    description:
      'รวม UI ตัวอย่างที่ออกแบบมาอย่างสวยงาม ทั้ง Login, Dashboard, Landing Page และอื่น ๆ',
  },
  {
    icon: '📋',
    title: 'Copy Prompt ง่าย ๆ',
    description:
      'เพียงกดปุ่ม Copy แล้วนำ prompt ไปวางใน ChatGPT, Claude หรือ AI ที่คุณใช้ ได้ UI ทันที',
  },
  {
    icon: '🌓',
    title: 'รองรับ Dark Mode',
    description:
      'UI ทุกตัวอย่างรองรับ light mode และ dark mode สลับได้ตลอดเวลา',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'ออกแบบให้ใช้งานได้สะดวกทั้งบน desktop, tablet และ mobile',
  },
  {
    icon: '⚡',
    title: 'เร็วและลื่นไหล',
    description:
      'สร้างด้วย Next.js 16 พร้อมแอนิเมชันจาก react-spring ที่ลื่นไหลระดับ 60fps',
  },
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    description:
      'โครงสร้างโปรเจคแบบ Clean Architecture ง่ายต่อการบำรุงรักษาและต่อยอด',
  },
];

const techStack = [
  { name: 'Next.js 16', description: 'App Router + SSR', icon: '▲' },
  { name: 'React 19', description: 'Server Components', icon: '⚛️' },
  { name: 'Tailwind CSS v4', description: '@theme design tokens', icon: '💨' },
  { name: 'react-spring', description: 'Physics-based animation', icon: '🌊' },
  { name: 'next-themes', description: 'Dark mode support', icon: '🌙' },
  { name: 'TypeScript', description: 'Type-safe codebase', icon: '🔷' },
];

const steps = [
  { num: '01', title: 'เลือก UI', desc: 'สำรวจแกลเลอรีหรือค้นหาจากหมวดหมู่' },
  { num: '02', title: 'Copy Prompt', desc: 'กดปุ่ม Copy เพื่อคัดลอก prompt' },
  { num: '03', title: 'วางใน AI', desc: 'วาง prompt ลงใน ChatGPT, Claude หรือ AI อื่น' },
  { num: '04', title: 'ได้ UI สวย ๆ', desc: 'รับโค้ด UI พร้อมใช้งานจาก AI ทันที' },
];

export default function AboutPage() {
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  const subSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Hero ═══ */}
        <animated.div style={heroSpring} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            เกี่ยวกับ PromptUI
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-[1.15]">
            สร้าง UI ระดับมืออาชีพ
            <br />
            <span className="text-gradient">ด้วยพลังของ AI</span>
          </h1>
          <animated.p
            style={subSpring}
            className="text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {siteConfig.description}
          </animated.p>
        </animated.div>

        {/* ═══ How It Works ═══ */}
        <ScrollReveal>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              🚀 วิธีใช้งาน
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 100}>
                  <StepCard step={step} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ═══ Features ═══ */}
        <ScrollReveal>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              ✨ ทำไมต้อง PromptUI?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 80}>
                  <FeatureCard feature={feature} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ═══ Tech Stack ═══ */}
        <ScrollReveal>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-3">
              🛠️ เทคโนโลยีที่ใช้
            </h2>
            <p className="text-muted text-center mb-10 max-w-lg mx-auto">
              สร้างด้วยเทคโนโลยีที่ทันสมัยที่สุดเพื่อประสบการณ์การใช้งานที่เหนือระดับ
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, i) => (
                <ScrollReveal key={tech.name} delay={i * 60}>
                  <TechCard tech={tech} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ═══ CTA ═══ */}
        <ScrollReveal>
          <GlassPanel strong className="p-10 sm:p-14 text-center gradient-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              พร้อมเริ่มสร้าง UI แล้วหรือยัง?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              สำรวจ UI ตัวอย่างที่สวยงาม copy prompt แล้วสร้างผลงานด้วย AI
              ได้ทันที
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/gallery">
                <AnimatedButton variant="primary" className="px-8 py-3 text-base">
                  🎨 ไปแกลเลอรี
                </AnimatedButton>
              </Link>
              <Link href="/categories">
                <AnimatedButton variant="ghost" className="px-8 py-3 text-base">
                  📂 ดูหมวดหมู่
                </AnimatedButton>
              </Link>
            </div>
          </GlassPanel>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function StepCard({ step }: { step: { num: string; title: string; desc: string } }) {
  const [hovered, setHovered] = useState(false);
  const spring = useSpring({
    transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={spring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlassPanel className="p-6 text-center h-full">
        <span className="inline-block text-3xl font-black text-gradient mb-3">
          {step.num}
        </span>
        <h3 className="text-base font-bold text-foreground mb-1.5">
          {step.title}
        </h3>
        <p className="text-sm text-muted">{step.desc}</p>
      </GlassPanel>
    </animated.div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: { icon: string; title: string; description: string };
}) {
  const [hovered, setHovered] = useState(false);
  const iconSpring = useSpring({
    transform: hovered ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
    config: { tension: 300, friction: 15 },
  });

  return (
    <GlassPanel
      className="p-6 h-full cursor-default"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <animated.span style={iconSpring} className="inline-block text-3xl mb-3">
          {feature.icon}
        </animated.span>
        <h3 className="text-base font-bold text-foreground mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>
    </GlassPanel>
  );
}

function TechCard({
  tech,
}: {
  tech: { name: string; description: string; icon: string };
}) {
  const [hovered, setHovered] = useState(false);
  const spring = useSpring({
    transform: hovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0px)',
    config: { tension: 300, friction: 18 },
  });

  return (
    <animated.div
      style={spring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlassPanel className="p-4 text-center h-full">
        <span className="text-2xl block mb-2">{tech.icon}</span>
        <p className="text-xs font-bold text-foreground">{tech.name}</p>
        <p className="text-[11px] text-muted mt-0.5">{tech.description}</p>
      </GlassPanel>
    </animated.div>
  );
}
