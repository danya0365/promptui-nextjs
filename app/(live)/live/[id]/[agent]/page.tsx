
import { AiModel } from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { siteConfig } from '@/src/config/site.config';
import { AcademicWebArchiveDemoGemini } from '@/src/presentation/components/demos/AcademicWebArchiveDemoGemini';
import { AIChatInterfaceDemoGemini } from '@/src/presentation/components/demos/AIChatInterfaceDemoGemini';
import { BoldAIStartupDirectoryDemoGemini } from '@/src/presentation/components/demos/BoldAIStartupDirectoryDemoGemini';
import { CalendarAppDemoGemini } from '@/src/presentation/components/demos/CalendarAppDemoGemini';
import { CalmOrganicWebDirectoryDemoGemini } from '@/src/presentation/components/demos/CalmOrganicWebDirectoryDemoGemini';
import { CyberpunkDarkWebInterfaceDemoGemini } from '@/src/presentation/components/demos/CyberpunkDarkWebInterfaceDemoGemini';
import { ECommerceAdminPanelDemoGemini } from '@/src/presentation/components/demos/ECommerceAdminPanelDemoGemini';
import { FileManagerDemoGemini } from '@/src/presentation/components/demos/FileManagerDemoGemini';
import { FinanceBankingDashboardDemoGemini } from '@/src/presentation/components/demos/FinanceBankingDashboardDemoGemini';
import { FuturisticGlassmorphismDirectoryDemoGemini } from '@/src/presentation/components/demos/FuturisticGlassmorphismDirectoryDemoGemini';
import { GlassmorphismLoginDemo } from '@/src/presentation/components/demos/GlassmorphismLoginDemo';
import { GlassmorphismLoginDemoGemini } from '@/src/presentation/components/demos/GlassmorphismLoginDemoGemini';
import { HealthFitnessTrackerDemoGemini } from '@/src/presentation/components/demos/HealthFitnessTrackerDemoGemini';
import { IoTSmartHomeDashboardDemoGemini } from '@/src/presentation/components/demos/IoTSmartHomeDashboardDemoGemini';
import { KanbanBoardDemoGemini } from '@/src/presentation/components/demos/KanbanBoardDemoGemini';
import { LuxuryMinimalEditorialDirectoryDemoGemini } from '@/src/presentation/components/demos/LuxuryMinimalEditorialDirectoryDemoGemini';
import { MinimalBlogLandingDemoGemini } from '@/src/presentation/components/demos/MinimalBlogLandingDemoGemini';
import { ModernDashboardDemoGemini } from '@/src/presentation/components/demos/ModernDashboardDemoGemini';
import { MultiStepRegisterDemoGemini } from '@/src/presentation/components/demos/MultiStepRegisterDemoGemini';
import { MusicPlayerDashboardDemoGemini } from '@/src/presentation/components/demos/MusicPlayerDashboardDemoGemini';
import { NeoBrutalistPromptGalleryDemoGemini } from '@/src/presentation/components/demos/NeoBrutalistPromptGalleryDemoGemini';
import { NeonDashboardWidgetsDemoGemini } from '@/src/presentation/components/demos/NeonDashboardWidgetsDemoGemini';
import { ProductCardGridDemoGemini } from '@/src/presentation/components/demos/ProductCardGridDemoGemini';
import { ProfileCardCollectionDemoGemini } from '@/src/presentation/components/demos/ProfileCardCollectionDemoGemini';
import { RecipeCookingAppDemoGemini } from '@/src/presentation/components/demos/RecipeCookingAppDemoGemini';
import { Retro90sTechMagazineDemoGemini } from '@/src/presentation/components/demos/Retro90sTechMagazineDemoGemini';
import { SaaSLandingPageDemoGemini } from '@/src/presentation/components/demos/SaaSLandingPageDemoGemini';
import { SocialMediaAnalyticsDemoGemini } from '@/src/presentation/components/demos/SocialMediaAnalyticsDemoGemini';
import { SwissInspiredModernDirectoryDemoGemini } from '@/src/presentation/components/demos/SwissInspiredModernDirectoryDemoGemini';
import { TravelBookingAppDemoGemini } from '@/src/presentation/components/demos/TravelBookingAppDemoGemini';
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
  'showcase-002': {
    'gemini-3-pro': ModernDashboardDemoGemini,
  },
  'showcase-008': {
    'gemini-3-pro': NeonDashboardWidgetsDemoGemini,
  },
  'showcase-003': { 'gemini-3-pro': SaaSLandingPageDemoGemini },
  'showcase-004': { 'gemini-3-pro': ProductCardGridDemoGemini },
  'showcase-005': { 'gemini-3-pro': MultiStepRegisterDemoGemini },
  'showcase-006': { 'gemini-3-pro': ProfileCardCollectionDemoGemini },
  'showcase-007': { 'gemini-3-pro': MinimalBlogLandingDemoGemini },
  'showcase-009': { 'gemini-3-pro': FinanceBankingDashboardDemoGemini },
  'showcase-010': { 'gemini-3-pro': KanbanBoardDemoGemini },
  'showcase-011': { 'gemini-3-pro': HealthFitnessTrackerDemoGemini },
  'showcase-012': { 'gemini-3-pro': SocialMediaAnalyticsDemoGemini },
  'showcase-013': { 'gemini-3-pro': ECommerceAdminPanelDemoGemini },
  'showcase-014': { 'gemini-3-pro': IoTSmartHomeDashboardDemoGemini },
  'showcase-015': { 'gemini-3-pro': MusicPlayerDashboardDemoGemini },
  'showcase-016': { 'gemini-3-pro': CalendarAppDemoGemini },
  'showcase-017': { 'gemini-3-pro': FileManagerDemoGemini },
  'showcase-018': { 'gemini-3-pro': AIChatInterfaceDemoGemini },
  'showcase-019': { 'gemini-3-pro': TravelBookingAppDemoGemini },
  'showcase-020': { 'gemini-3-pro': RecipeCookingAppDemoGemini },
  'showcase-021': { 'gemini-3.1-pro': NeoBrutalistPromptGalleryDemoGemini },
  'showcase-022': { 'gemini-3.1-pro': FuturisticGlassmorphismDirectoryDemoGemini },
  'showcase-023': { 'gemini-3.1-pro': Retro90sTechMagazineDemoGemini },
  'showcase-024': { 'gemini-3.1-pro': LuxuryMinimalEditorialDirectoryDemoGemini },
  'showcase-025': { 'gemini-3.1-pro': CyberpunkDarkWebInterfaceDemoGemini },
  'showcase-026': { 'gemini-3.1-pro': CalmOrganicWebDirectoryDemoGemini },
  'showcase-027': { 'gemini-3.1-pro': SwissInspiredModernDirectoryDemoGemini },
  'showcase-028': { 'gemini-3.1-pro': BoldAIStartupDirectoryDemoGemini },
  'showcase-029': { 'gemini-3.1-pro': AcademicWebArchiveDemoGemini },
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
