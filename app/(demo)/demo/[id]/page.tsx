import { GlassmorphismLoginDemo } from '@/src/presentation/components/demos/GlassmorphismLoginDemo';
import type { Metadata } from 'next';

/**
 * Demo lookup — maps showcase ID to its live demo component
 * Each demo is a fully self-contained React component with its own Tailwind CSS
 */
const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  'showcase-001': GlassmorphismLoginDemo,
};

const DEMO_METADATA: Record<string, { title: string; description: string }> = {
  'showcase-001': {
    title: 'Glassmorphism Login Form — Live Demo',
    description: 'ฟอร์ม Login สุดหรูพร้อม glassmorphism effect, gradient border และ floating label animation',
  },
};

interface DemoPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { id } = await params;
  const meta = DEMO_METADATA[id];
  return meta
    ? { title: meta.title, description: meta.description }
    : { title: 'Demo — PromptUI', description: 'Live demo preview' };
}

/**
 * Demo Page — Dynamic route [id]
 * Renders the standalone live demo for each showcase item
 * NO shared layout, NO global CSS — completely isolated
 */
export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params;
  const DemoComponent = DEMO_COMPONENTS[id];

  if (!DemoComponent) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0f1a',
        color: '#e2e8f0',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧</p>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Demo ยังไม่พร้อม
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
            Live demo สำหรับ "{id}" กำลังอยู่ระหว่างการพัฒนา
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.625rem 1.5rem',
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              color: '#fff',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
            }}
          >
            ← กลับหน้าหลัก
          </a>
        </div>
      </div>
    );
  }

  return <DemoComponent />;
}
