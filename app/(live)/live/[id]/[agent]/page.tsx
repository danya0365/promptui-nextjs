
import { AiModel } from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { siteConfig } from '@/src/config/site.config';
import { GlassmorphismLoginDemo } from '@/src/presentation/components/demos/GlassmorphismLoginDemo';
import { GlassmorphismLoginDemoGemini } from '@/src/presentation/components/demos/GlassmorphismLoginDemoGemini';
import type { Metadata } from 'next';

/**
 * LivePreview lookup — maps [showcaseId][aiModelId] to its component
 * Each showcase can have multiple live previews from different AI models
 */
const LIVE_PREVIEW_COMPONENTS: Record<string, Partial<Record<AiModel, React.ComponentType>>> = {
  'showcase-001': {
    'claude-4-sonnet': GlassmorphismLoginDemo,
    'gemini-3-pro': GlassmorphismLoginDemoGemini,
  },
};

interface LivePreviewPageProps {
  params: Promise<{ id: string; agent: string }>;
}

export async function generateMetadata({ params }: LivePreviewPageProps): Promise<Metadata> {
  const { id, agent: modelId } = await params;
  const modelInfo = siteConfig.aiModels.find((m) => m.id === modelId);
  const modelLabel = modelInfo?.label || modelId;
  return {
    title: `Live Preview — ${id} by ${modelLabel} | PromptUI`,
    description: `Live preview ผลลัพธ์จาก ${modelLabel} สำหรับ ${id}`,
  };
}

/**
 * LivePreview Page — /live/[id]/[agent]
 * Renders the standalone live preview for a specific showcase × AI model
 * NO shared layout, NO global CSS — completely isolated
 */
export default async function LivePreviewPage({ params }: LivePreviewPageProps) {
  const { id, agent: modelId } = await params;
  const showcaseComponents = LIVE_PREVIEW_COMPONENTS[id];
  const PreviewComponent = showcaseComponents?.[modelId as AiModel];
  const modelInfo = siteConfig.aiModels.find((m) => m.id === modelId);

  if (!PreviewComponent) {
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
            Live Preview ยังไม่พร้อม
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
            Preview สำหรับ <strong>{id}</strong> โดย{' '}
            <strong>{modelInfo?.icon} {modelInfo?.label || modelId}</strong>
          </p>
          <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            กำลังอยู่ระหว่างการพัฒนา
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

  return <PreviewComponent />;
}
