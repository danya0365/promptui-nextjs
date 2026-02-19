'use client';

import { siteConfig } from '@/src/config/site.config';
import { AnimatedButton } from '@/src/presentation/components/shared/AnimatedButton';
import { GlassPanel } from '@/src/presentation/components/shared/GlassPanel';
import { ScrollReveal } from '@/src/presentation/components/shared/ScrollReveal';
import { useCallback, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const contactMethods = [
  {
    icon: '📧',
    title: 'อีเมล',
    value: 'hello@promptui.dev',
    href: 'mailto:hello@promptui.dev',
    description: 'ส่งอีเมลถึงเราได้ตลอดเวลา',
  },
  {
    icon: '💬',
    title: 'GitHub Issues',
    value: 'github.com/promptui',
    href: 'https://github.com/promptui',
    description: 'แจ้งปัญหาหรือเสนอฟีเจอร์ใหม่',
  },
  {
    icon: '🐦',
    title: 'Twitter / X',
    value: '@promptui',
    href: 'https://twitter.com/promptui',
    description: 'ติดตามข่าวสารและอัปเดตล่าสุด',
  },
];

export default function ContactPage() {
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ═══ Hero ═══ */}
        <animated.div style={heroSpring} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            ✉️ ติดต่อเรา
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 leading-[1.15]">
            พูดคุยกับ{' '}
            <span className="text-gradient">PromptUI</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            มีคำถาม ข้อเสนอแนะ หรืออยากร่วมงานกับเรา? ติดต่อได้เลย!
          </p>
        </animated.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ═══ Contact Form (3 cols) ═══ */}
          <ScrollReveal className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>

          {/* ═══ Contact Methods (2 cols) ═══ */}
          <div className="lg:col-span-2 space-y-5">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 100}>
                <ContactMethodCard method={method} />
              </ScrollReveal>
            ))}

            {/* Social Links */}
            <ScrollReveal delay={300}>
              <GlassPanel className="p-5">
                <h3 className="text-sm font-bold text-foreground mb-3">
                  🌐 ติดตามเรา
                </h3>
                <div className="flex items-center gap-3">
                  {siteConfig.footer.social.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-surface-alt text-muted border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {social.icon === 'github' ? '🐙' : '🐦'} {social.label}
                    </a>
                  ))}
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Mock submit
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    []
  );

  const successSpring = useSpring({
    opacity: submitted ? 1 : 0,
    transform: submitted ? 'translateY(0px)' : 'translateY(-10px)',
    config: { tension: 300, friction: 20 },
  });

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors';

  return (
    <GlassPanel strong className="p-6 sm:p-8 gradient-border h-full">
      <h2 className="text-lg font-bold text-foreground mb-1">
        📮 ส่งข้อความถึงเรา
      </h2>
      <p className="text-sm text-muted mb-6">
        กรอกแบบฟอร์มด้านล่าง เราจะตอบกลับโดยเร็วที่สุด
      </p>

      {submitted && (
        <animated.div
          style={successSpring}
          className="mb-4 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center border border-emerald-500/20"
        >
          ✅ ส่งข้อความสำเร็จ! เราจะตอบกลับเร็ว ๆ นี้
        </animated.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-muted mb-1.5"
            >
              ชื่อ
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="ชื่อของคุณ"
              value={formData.name}
              onChange={(e) =>
                setFormData((p) => ({ ...p, name: e.target.value }))
              }
              required
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-muted mb-1.5"
            >
              อีเมล
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((p) => ({ ...p, email: e.target.value }))
              }
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold text-muted mb-1.5"
          >
            หัวข้อ
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="หัวข้อข้อความ"
            value={formData.subject}
            onChange={(e) =>
              setFormData((p) => ({ ...p, subject: e.target.value }))
            }
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-muted mb-1.5"
          >
            ข้อความ
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="พิมพ์ข้อความของคุณที่นี่..."
            value={formData.message}
            onChange={(e) =>
              setFormData((p) => ({ ...p, message: e.target.value }))
            }
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        <AnimatedButton
          variant="primary"
          className="w-full py-3 text-sm"
        >
          🚀 ส่งข้อความ
        </AnimatedButton>
      </form>
    </GlassPanel>
  );
}

function ContactMethodCard({
  method,
}: {
  method: { icon: string; title: string; value: string; href: string; description: string };
}) {
  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    transform: hovered ? 'translateX(4px)' : 'translateX(0px)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <a
      href={method.href}
      target={method.href.startsWith('http') ? '_blank' : undefined}
      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div style={spring}>
        <GlassPanel className="p-5 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{method.icon}</span>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-0.5">
                {method.title}
              </h3>
              <p className="text-xs text-primary font-medium mb-1">
                {method.value}
              </p>
              <p className="text-xs text-muted">{method.description}</p>
            </div>
          </div>
        </GlassPanel>
      </animated.div>
    </a>
  );
}
