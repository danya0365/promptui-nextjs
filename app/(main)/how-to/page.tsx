'use client';

import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';


const tutorials = [
  {
    step: '01',
    icon: '🔍',
    title: 'สำรวจ UI ตัวอย่าง',
    description:
      'เปิดหน้าแกลเลอรีเพื่อดู UI ตัวอย่างทั้งหมด หรือกรองตามหมวดหมู่ ระดับความยาก หรือค้นหาด้วยคีย์เวิร์ด',
    tips: [
      'ใช้แถบค้นหาเพื่อหา UI ที่ต้องการ',
      'กรองตามหมวดหมู่ เช่น Login, Dashboard, Landing Page',
      'เลือกระดับความยาก: เริ่มต้น, ปานกลาง, ขั้นสูง',
      'สลับระหว่างมุมมอง Grid และ List ได้',
    ],
  },
  {
    step: '02',
    icon: '👁️',
    title: 'ดูรายละเอียด UI',
    description:
      'คลิกที่การ์ด UI เพื่อเปิดหน้ารายละเอียด ดูตัวอย่างเต็ม ๆ พร้อม tag และข้อมูลระดับความยาก',
    tips: [
      'ดู tag ต่าง ๆ เพื่อเข้าใจเทคโนโลยีที่ใช้',
      'ระดับความยากช่วยให้รู้ว่า prompt ซับซ้อนแค่ไหน',
      'ดู UI ที่เกี่ยวข้องด้านล่างเพื่อแรงบันดาลใจเพิ่มเติม',
    ],
  },
  {
    step: '03',
    icon: '📋',
    title: 'Copy Prompt',
    description:
      'กดปุ่ม "Copy Prompt" เพื่อคัดลอก prompt ไปยัง clipboard ของคุณ ง่าย ๆ แค่คลิกเดียว',
    tips: [
      'Copy ได้จากหน้ารายละเอียดหรือจากการ์ดในแกลเลอรี',
      'เมื่อ copy สำเร็จจะเห็นข้อความ "Copied!" ยืนยัน',
      'Prompt ถูกออกแบบมาให้ใช้ได้กับ AI หลายตัว',
    ],
  },
  {
    step: '04',
    icon: '🤖',
    title: 'วาง Prompt ใน AI',
    description:
      'เปิด ChatGPT, Claude, Gemini หรือ AI ที่คุณใช้ แล้ววาง prompt ที่ copy มา',
    tips: [
      'ใช้ได้กับ ChatGPT, Claude, Gemini, Copilot และอื่น ๆ',
      'สามารถปรับแต่ง prompt เพิ่มเติมได้ตามต้องการ',
      'ลองระบุเทคโนโลยีที่ต้องการเพิ่มใน prompt เช่น "ใช้ Tailwind CSS"',
    ],
  },
  {
    step: '05',
    icon: '✨',
    title: 'ได้ UI พร้อมใช้',
    description:
      'AI จะสร้างโค้ด UI ให้คุณตาม prompt นำไปใช้ในโปรเจคของคุณได้เลย!',
    tips: [
      'ตรวจสอบโค้ดก่อนนำไปใช้เสมอ',
      'ปรับแต่งสี ฟอนต์ และ spacing ตามดีไซน์ของคุณ',
      'ถ้าผลลัพธ์ไม่ถูกใจ ลองปรับ prompt แล้วส่งใหม่',
    ],
  },
];

const faqs = [
  {
    q: 'PromptUI ใช้ฟรีหรือเปล่า?',
    a: 'ใช่! PromptUI เป็นแพลตฟอร์มฟรี คุณสามารถ copy prompt ไปใช้ได้ไม่จำกัด',
  },
  {
    q: 'ต้องลงทะเบียนไหม?',
    a: 'ไม่ต้อง! สามารถใช้งาน copy prompt ได้ทันทีโดยไม่ต้องลงทะเบียน',
  },
  {
    q: 'Prompt ใช้ได้กับ AI ตัวไหนบ้าง?',
    a: 'Prompt ของเราออกแบบมาให้ใช้ได้กับ AI ทุกตัวที่สร้างโค้ดได้ เช่น ChatGPT, Claude, Gemini, Copilot',
  },
  {
    q: 'สามารถแก้ไข prompt ได้ไหม?',
    a: 'ได้เลย! คุณสามารถปรับแต่ง prompt ให้ตรงกับความต้องการของคุณก่อนส่งให้ AI',
  },
  {
    q: 'UI ที่ได้จะเป็นเทคโนโลยีอะไร?',
    a: 'ขึ้นอยู่กับ AI ที่คุณใช้และ prompt ที่ระบุ คุณสามารถเพิ่มข้อกำหนดเทคโนโลยีใน prompt ได้',
  },
];

export default function HowToPage() {
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Hero ═══ */}
        <animated.div style={heroSpring} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            📖 คู่มือการใช้งาน
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-[1.15]">
            วิธีใช้งาน{' '}
            <span className="text-gradient">PromptUI</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            เพียง 5 ขั้นตอนง่าย ๆ คุณก็สามารถสร้าง UI สวย ๆ ด้วย AI ได้แล้ว
          </p>
        </animated.div>

        {/* ═══ Steps ═══ */}
        <section className="mb-20">
          <div className="space-y-6">
            {tutorials.map((tutorial, index) => (
              <ScrollReveal key={tutorial.step} delay={index * 100}>
                <TutorialStep tutorial={tutorial} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <ScrollReveal>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              ❓ คำถามที่พบบ่อย
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <FaqItem faq={faq} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ═══ CTA ═══ */}
        <ScrollReveal>
          <GlassPanel strong className="p-10 sm:p-14 text-center gradient-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              พร้อมลองแล้ว! 🚀
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              ไปสำรวจ UI ตัวอย่างแล้วเริ่ม copy prompt กันเลย
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/gallery">
                <AnimatedButton variant="primary" className="px-8 py-3 text-base">
                  🎨 เปิดแกลเลอรี
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

function TutorialStep({
  tutorial,
  index,
}: {
  tutorial: {
    step: string;
    icon: string;
    title: string;
    description: string;
    tips: string[];
  };
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const iconSpring = useSpring({
    transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
    config: { tension: 300, friction: 15 },
  });

  const isEven = index % 2 === 0;

  return (
    <GlassPanel
      className="overflow-hidden"
    >
      <div
        className="flex flex-col sm:flex-row items-stretch"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Step Number + Icon Side */}
        <div
          className={`flex flex-col items-center justify-center gap-3 p-6 sm:p-8 sm:w-44 flex-shrink-0 ${
            isEven
              ? 'bg-gradient-to-br from-primary/15 to-accent/10'
              : 'bg-gradient-to-br from-accent/15 to-primary/10'
          }`}
        >
          <span className="text-sm font-black text-gradient">
            STEP {tutorial.step}
          </span>
          <animated.span style={iconSpring} className="text-4xl">
            {tutorial.icon}
          </animated.span>
        </div>

        {/* Content Side */}
        <div className="flex-1 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground mb-2">
            {tutorial.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4">
            {tutorial.description}
          </p>

          {/* Tips */}
          <div className="space-y-2">
            {tutorial.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary text-xs mt-0.5 flex-shrink-0">
                  ✦
                </span>
                <span className="text-sm text-muted">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  const arrowSpring = useSpring({
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  });

  const contentSpring = useSpring({
    maxHeight: open ? '200px' : '0px',
    opacity: open ? 1 : 0,
    paddingTop: open ? 12 : 0,
    config: { tension: 250, friction: 22 },
  });

  return (
    <GlassPanel className="cursor-pointer select-none" >
      <div onClick={() => setOpen(!open)} className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-foreground">{faq.q}</h3>
          <animated.span style={arrowSpring} className="text-primary text-lg flex-shrink-0">
            ▾
          </animated.span>
        </div>
        <animated.div style={contentSpring} className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
        </animated.div>
      </div>
    </GlassPanel>
  );
}
