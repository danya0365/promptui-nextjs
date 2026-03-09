
import { AiModel } from '@/src/application/repositories/IShowcaseLivePreviewRepository';
import { siteConfig } from '@/src/config/site.config';
import { AcademicWebArchiveDemoGemini } from '@/src/presentation/components/demos/AcademicWebArchiveDemoGemini';
import { AdvancedCyberpunkNeonDemoGemini } from '@/src/presentation/components/demos/AdvancedCyberpunkNeonDemoGemini';
import { AIChatInterfaceDemoGemini } from '@/src/presentation/components/demos/AIChatInterfaceDemoGemini';
import { AICommandCenterDemoGemini } from '@/src/presentation/components/demos/AICommandCenterDemoGemini';
import { AIDeityAwakeningDemoGemini } from '@/src/presentation/components/demos/AIDeityAwakeningDemoGemini';
import { AndalusianDemoGemini } from '@/src/presentation/components/demos/AndalusianDemoGemini';
import { AwardStylePremiumDirectoryDemoGemini } from '@/src/presentation/components/demos/AwardStylePremiumDirectoryDemoGemini';
import { BillionDollarIPODemoGemini } from '@/src/presentation/components/demos/BillionDollarIPODemoGemini';
import { BlackMirrorPsychologicalDemoGemini } from '@/src/presentation/components/demos/BlackMirrorPsychologicalDemoGemini';
import { BoldAIStartupDirectoryDemoGemini } from '@/src/presentation/components/demos/BoldAIStartupDirectoryDemoGemini';
import { BoldStartupManifestoDemoGemini } from '@/src/presentation/components/demos/BoldStartupManifestoDemoGemini';
import { BrainComputerInterfaceDemoGemini } from '@/src/presentation/components/demos/BrainComputerInterfaceDemoGemini';
import { CalendarAppDemoGemini } from '@/src/presentation/components/demos/CalendarAppDemoGemini';
import { CalmOrganicWebDirectoryDemoGemini } from '@/src/presentation/components/demos/CalmOrganicWebDirectoryDemoGemini';
import { ChromeInspiredWebDirectoryDemoGemini } from '@/src/presentation/components/demos/ChromeInspiredWebDirectoryDemoGemini';
import { CinematicHollywoodTrailerDemoGemini } from '@/src/presentation/components/demos/CinematicHollywoodTrailerDemoGemini';
import { CinematicProductLaunchDemoGemini } from '@/src/presentation/components/demos/CinematicProductLaunchDemoGemini';
import { CinematicSpatialDemoGemini } from '@/src/presentation/components/demos/CinematicSpatialDemoGemini';
import { CivilizationSimulationDemoGemini } from '@/src/presentation/components/demos/CivilizationSimulationDemoGemini';
import { ClaymorphismDirectoryDemoGemini } from '@/src/presentation/components/demos/ClaymorphismDirectoryDemoGemini';
import { CosmicInspiredWebDirectoryDemoGemini } from '@/src/presentation/components/demos/CosmicInspiredWebDirectoryDemoGemini';
import { CyberpunkCityPlatformDemoGemini } from '@/src/presentation/components/demos/CyberpunkCityPlatformDemoGemini';
import { CyberpunkDarkWebInterfaceDemoGemini } from '@/src/presentation/components/demos/CyberpunkDarkWebInterfaceDemoGemini';
import { CyberpunkHackerTerminalDemoGemini } from '@/src/presentation/components/demos/CyberpunkHackerTerminalDemoGemini';
import { CyberWarfareDashboardDemoGemini } from '@/src/presentation/components/demos/CyberWarfareDashboardDemoGemini';
import { DigitalTilePhysicsDemoGemini } from '@/src/presentation/components/demos/DigitalTilePhysicsDemoGemini';
import { DramaticFuturisticTechDirectoryDemoGemini } from '@/src/presentation/components/demos/DramaticFuturisticTechDirectoryDemoGemini';
import { ECommerceAdminPanelDemoGemini } from '@/src/presentation/components/demos/ECommerceAdminPanelDemoGemini';
import { EliteTechFoundersDirectoryDemoGemini } from '@/src/presentation/components/demos/EliteTechFoundersDirectoryDemoGemini';
import { EvolvingAIPersonaDemoGemini } from '@/src/presentation/components/demos/EvolvingAIPersonaDemoGemini';
import { ExperimentalPhysicsUIDemoGemini } from '@/src/presentation/components/demos/ExperimentalPhysicsUIDemoGemini';
import { FileManagerDemoGemini } from '@/src/presentation/components/demos/FileManagerDemoGemini';
import { FinanceBankingDashboardDemoGemini } from '@/src/presentation/components/demos/FinanceBankingDashboardDemoGemini';
import { FragmentedGlitchCyberpunkDemoGemini } from '@/src/presentation/components/demos/FragmentedGlitchCyberpunkDemoGemini';
import { FuturisticGlassmorphismDirectoryDemoGemini } from '@/src/presentation/components/demos/FuturisticGlassmorphismDirectoryDemoGemini';
import { FuturisticHolographicWarRoomDemoGemini } from '@/src/presentation/components/demos/FuturisticHolographicWarRoomDemoGemini';
import { FuturisticNeuralNetworkDemoGemini } from '@/src/presentation/components/demos/FuturisticNeuralNetworkDemoGemini';
import { FuturisticOSWebExperienceDemoGemini } from '@/src/presentation/components/demos/FuturisticOSWebExperienceDemoGemini';
import { FuturisticSpacePlatformDemoGemini } from '@/src/presentation/components/demos/FuturisticSpacePlatformDemoGemini';
import { GalacticLaunchSystemDemoGemini } from '@/src/presentation/components/demos/GalacticLaunchSystemDemoGemini';
import { GamingPlatformDirectoryDemoGemini } from '@/src/presentation/components/demos/GamingPlatformDirectoryDemoGemini';
import { GenerativeAIVisualsDemoGemini } from '@/src/presentation/components/demos/GenerativeAIVisualsDemoGemini';
import { GestureDrivenHolographicUIDemoGemini } from '@/src/presentation/components/demos/GestureDrivenHolographicUIDemoGemini';
import { GlassmorphismLoginDemo } from '@/src/presentation/components/demos/GlassmorphismLoginDemo';
import { GlassmorphismLoginDemoGemini } from '@/src/presentation/components/demos/GlassmorphismLoginDemoGemini';
import { GlobalEventPlatformDemoGemini } from '@/src/presentation/components/demos/GlobalEventPlatformDemoGemini';
import { GodLevelCyberpunkHackerDemoGemini } from '@/src/presentation/components/demos/GodLevelCyberpunkHackerDemoGemini';
import { GodLevelHolographicIntelligenceDemoGemini } from '@/src/presentation/components/demos/GodLevelHolographicIntelligenceDemoGemini';
import { GodModeCreatorConsoleDemoGemini } from '@/src/presentation/components/demos/GodModeCreatorConsoleDemoGemini';
import { HealthFitnessTrackerDemoGemini } from '@/src/presentation/components/demos/HealthFitnessTrackerDemoGemini';
import { HighContrastEditorialDirectoryDemoGemini } from '@/src/presentation/components/demos/HighContrastEditorialDirectoryDemoGemini';
import { HighEnergyTechDirectoryDemoGemini } from '@/src/presentation/components/demos/HighEnergyTechDirectoryDemoGemini';
import { HypercarLuxuryPlatformDemoGemini } from '@/src/presentation/components/demos/HypercarLuxuryPlatformDemoGemini';
import { ImmersiveAIConsciousnessDemoGemini } from '@/src/presentation/components/demos/ImmersiveAIConsciousnessDemoGemini';
import { iOS26LiquidGlassDemoGemini } from '@/src/presentation/components/demos/iOS26LiquidGlassDemoGemini';
import { IoTSmartHomeDashboardDemoGemini } from '@/src/presentation/components/demos/IoTSmartHomeDashboardDemoGemini';
import { IslamicCardDemoGemini } from '@/src/presentation/components/demos/IslamicCardDemoGemini';
import IslamicGoldenAgeLibraryDemoClaudeSonnet from '@/src/presentation/components/demos/IslamicGoldenAgeLibraryDemoClaudeSonnet';
import { IslamicGoldenAgeLibraryDemoGemini } from '@/src/presentation/components/demos/IslamicGoldenAgeLibraryDemoGemini';
import { IslamicKnowledgePlatformDemoGemini } from '@/src/presentation/components/demos/IslamicKnowledgePlatformDemoGemini';
import { IslamicNightDemoGemini } from '@/src/presentation/components/demos/IslamicNightDemoGemini';
import KaabaInspiredDemoClaudeSonnet from '@/src/presentation/components/demos/KaabaInspiredDemoClaudeSonnet';
import { KaabaInspiredDemoGemini } from '@/src/presentation/components/demos/KaabaInspiredDemoGemini';
import { KanbanBoardDemoGemini } from '@/src/presentation/components/demos/KanbanBoardDemoGemini';
import { LiveSimulationMatrixDemoGemini } from '@/src/presentation/components/demos/LiveSimulationMatrixDemoGemini';
import { LivingAdaptiveCardsDemoGemini } from '@/src/presentation/components/demos/LivingAdaptiveCardsDemoGemini';
import { LuxuryMinimalEditorialDirectoryDemoGemini } from '@/src/presentation/components/demos/LuxuryMinimalEditorialDirectoryDemoGemini';
import { MetaversePortalDemoGemini } from '@/src/presentation/components/demos/MetaversePortalDemoGemini';
import { MinimalBlogLandingDemoGemini } from '@/src/presentation/components/demos/MinimalBlogLandingDemoGemini';
import { MinimalSpatialDashboardDemoGemini } from '@/src/presentation/components/demos/MinimalSpatialDashboardDemoGemini';
import { MinorityReportHologramDemoGemini } from '@/src/presentation/components/demos/MinorityReportHologramDemoGemini';
import { ModernDashboardDemoGemini } from '@/src/presentation/components/demos/ModernDashboardDemoGemini';
import { ModernIslamicDashboardDemoGemini } from '@/src/presentation/components/demos/ModernIslamicDashboardDemoGemini';
import { MultiStepRegisterDemoGemini } from '@/src/presentation/components/demos/MultiStepRegisterDemoGemini';
import { MusicPlayerDashboardDemoGemini } from '@/src/presentation/components/demos/MusicPlayerDashboardDemoGemini';
import { NeoBrutalistPromptGalleryDemoGemini } from '@/src/presentation/components/demos/NeoBrutalistPromptGalleryDemoGemini';
import { NeonDashboardWidgetsDemoGemini } from '@/src/presentation/components/demos/NeonDashboardWidgetsDemoGemini';
import { NextGenSpatialOSDemoGemini } from '@/src/presentation/components/demos/NextGenSpatialOSDemoGemini';
import OttomanPalaceDemoClaudeSonnet from '@/src/presentation/components/demos/OttomanPalaceDemoClaudeSonnet';
import { OttomanPalaceDemoGemini } from '@/src/presentation/components/demos/OttomanPalaceDemoGemini';
import { PhysicsDrivenWebWorldDemoGemini } from '@/src/presentation/components/demos/PhysicsDrivenWebWorldDemoGemini';
import { PostHumanInterfaceDemoGemini } from '@/src/presentation/components/demos/PostHumanInterfaceDemoGemini';
import { PostHumanTranscendenceDemoGemini } from '@/src/presentation/components/demos/PostHumanTranscendenceDemoGemini';
import { PredictiveAnalysisHologramDemoGemini } from '@/src/presentation/components/demos/PredictiveAnalysisHologramDemoGemini';
import { ProductCardGridDemoGemini } from '@/src/presentation/components/demos/ProductCardGridDemoGemini';
import { ProfileCardCollectionDemoGemini } from '@/src/presentation/components/demos/ProfileCardCollectionDemoGemini';
import RamadanLanternDemoClaudeSonnet from '@/src/presentation/components/demos/RamadanLanternDemoClaudeSonnet';
import { RamadanLanternDemoGemini } from '@/src/presentation/components/demos/RamadanLanternDemoGemini';
import { RealityFractureDemoGemini } from '@/src/presentation/components/demos/RealityFractureDemoGemini';
import { RecipeCookingAppDemoGemini } from '@/src/presentation/components/demos/RecipeCookingAppDemoGemini';
import { Retro90sTechMagazineDemoGemini } from '@/src/presentation/components/demos/Retro90sTechMagazineDemoGemini';
import { SaaSLandingPageDemoGemini } from '@/src/presentation/components/demos/SaaSLandingPageDemoGemini';
import { SelfEvolvingInterfaceDemoGemini } from '@/src/presentation/components/demos/SelfEvolvingInterfaceDemoGemini';
import { SocialMediaAnalyticsDemoGemini } from '@/src/presentation/components/demos/SocialMediaAnalyticsDemoGemini';
import { SpatialComputingDemoGemini } from '@/src/presentation/components/demos/SpatialComputingDemoGemini';
import { SpatialDepthUIDemoGemini } from '@/src/presentation/components/demos/SpatialDepthUIDemoGemini';
import { SuperintelligenceLaunchDemoGemini } from '@/src/presentation/components/demos/SuperintelligenceLaunchDemoGemini';
import { SwissInspiredModernDirectoryDemoGemini } from '@/src/presentation/components/demos/SwissInspiredModernDirectoryDemoGemini';
import { TacticalSimulationDemoGemini } from '@/src/presentation/components/demos/TacticalSimulationDemoGemini';
import { TravelBookingAppDemoGemini } from '@/src/presentation/components/demos/TravelBookingAppDemoGemini';
import { UnrealEngineCinematicDemoGemini } from '@/src/presentation/components/demos/UnrealEngineCinematicDemoGemini';
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
  'showcase-030': { 'gemini-3.1-pro': GamingPlatformDirectoryDemoGemini },
  'showcase-031': { 'gemini-3.1-pro': ClaymorphismDirectoryDemoGemini },
  'showcase-032': { 'gemini-3.1-pro': HighContrastEditorialDirectoryDemoGemini },
  'showcase-033': { 'gemini-3.1-pro': DramaticFuturisticTechDirectoryDemoGemini },
  'showcase-034': { 'gemini-3.1-pro': ChromeInspiredWebDirectoryDemoGemini },
  'showcase-035': { 'gemini-3.1-pro': CosmicInspiredWebDirectoryDemoGemini },
  'showcase-036': { 'gemini-3.1-pro': AwardStylePremiumDirectoryDemoGemini },
  'showcase-037': { 'gemini-3.1-pro': AICommandCenterDemoGemini },
  'showcase-038': { 'gemini-3.1-pro': EliteTechFoundersDirectoryDemoGemini },
  'showcase-039': { 'gemini-3.1-pro': HighEnergyTechDirectoryDemoGemini },
  'showcase-040': { 'gemini-3.1-pro': FuturisticSpacePlatformDemoGemini },
  'showcase-041': { 'gemini-3.1-pro': CinematicProductLaunchDemoGemini },
  'showcase-042': { 'gemini-3.1-pro': SuperintelligenceLaunchDemoGemini },
  'showcase-043': { 'gemini-3.1-pro': HypercarLuxuryPlatformDemoGemini },
  'showcase-044': { 'gemini-3.1-pro': FuturisticOSWebExperienceDemoGemini },
  'showcase-045': { 'gemini-3.1-pro': BoldStartupManifestoDemoGemini },
  'showcase-046': { 'gemini-3.1-pro': BillionDollarIPODemoGemini },
  'showcase-047': { 'gemini-3.1-pro': ImmersiveAIConsciousnessDemoGemini },
  'showcase-048': { 'gemini-3.1-pro': CivilizationSimulationDemoGemini },
  'showcase-049': { 'gemini-3.1-pro': CinematicHollywoodTrailerDemoGemini },
  'showcase-050': { 'gemini-3.1-pro': ExperimentalPhysicsUIDemoGemini },
  'showcase-051': { 'gemini-3.1-pro': GalacticLaunchSystemDemoGemini },
  'showcase-052': { 'gemini-3.1-pro': UnrealEngineCinematicDemoGemini },
  'showcase-053': { 'gemini-3.1-pro': GenerativeAIVisualsDemoGemini },
  'showcase-054': { 'gemini-3.1-pro': GlobalEventPlatformDemoGemini },
  'showcase-055': { 'gemini-3.1-pro': MetaversePortalDemoGemini },
  'showcase-056': { 'gemini-3.1-pro': PostHumanInterfaceDemoGemini },
  'showcase-057': { 'gemini-3.1-pro': BrainComputerInterfaceDemoGemini },
  'showcase-058': { 'gemini-3.1-pro': AIDeityAwakeningDemoGemini },
  'showcase-059': { 'gemini-3.1-pro': CyberpunkCityPlatformDemoGemini },
  'showcase-060': { 'gemini-3.1-pro': BlackMirrorPsychologicalDemoGemini },
  'showcase-061': { 'gemini-3.1-pro': PostHumanTranscendenceDemoGemini },
  'showcase-062': { 'gemini-3.1-pro': LiveSimulationMatrixDemoGemini },
  'showcase-063': { 'gemini-3.1-pro': EvolvingAIPersonaDemoGemini },
  'showcase-064': { 'gemini-3.1-pro': PhysicsDrivenWebWorldDemoGemini },
  'showcase-065': { 'gemini-3.1-pro': SelfEvolvingInterfaceDemoGemini },
  'showcase-066': { 'gemini-3.1-pro': RealityFractureDemoGemini },
  'showcase-067': { 'gemini-3.1-pro': FuturisticNeuralNetworkDemoGemini },
  'showcase-068': { 'gemini-3.1-pro': TacticalSimulationDemoGemini },
  'showcase-069': { 'gemini-3.1-pro': DigitalTilePhysicsDemoGemini },
  'showcase-070': { 'gemini-3.1-pro': LivingAdaptiveCardsDemoGemini },
  'showcase-071': { 'gemini-3.1-pro': GodModeCreatorConsoleDemoGemini },
  'showcase-072': { 'gemini-3.1-pro': SpatialComputingDemoGemini },
  'showcase-073': { 'gemini-3.1-pro': SpatialDepthUIDemoGemini },
  'showcase-074': { 'gemini-3.1-pro': MinimalSpatialDashboardDemoGemini },
  'showcase-075': { 'gemini-3.1-pro': CinematicSpatialDemoGemini },
  'showcase-076': { 'gemini-3.1-pro': NextGenSpatialOSDemoGemini },
  'showcase-077': { 'gemini-3.1-pro': CyberpunkHackerTerminalDemoGemini },
  'showcase-078': { 'gemini-3.1-pro': AdvancedCyberpunkNeonDemoGemini },
  'showcase-079': { 'gemini-3.1-pro': CyberWarfareDashboardDemoGemini },
  'showcase-080': { 'gemini-3.1-pro': FragmentedGlitchCyberpunkDemoGemini },
  'showcase-081': { 'gemini-3.1-pro': GodLevelCyberpunkHackerDemoGemini },
  'showcase-082': { 'gemini-3.1-pro': MinorityReportHologramDemoGemini },
  'showcase-083': { 'gemini-3.1-pro': PredictiveAnalysisHologramDemoGemini },
  'showcase-084': { 'gemini-3.1-pro': GestureDrivenHolographicUIDemoGemini },
  'showcase-085': { 'gemini-3.1-pro': FuturisticHolographicWarRoomDemoGemini },
  'showcase-086': { 'gemini-3.1-pro': GodLevelHolographicIntelligenceDemoGemini },
  'showcase-087': { 'claude-4.6-opus': iOS26LiquidGlassDemoGemini },
  'showcase-088': { 'gemini-3-flash': IslamicCardDemoGemini },
  'showcase-089': { 'gemini-3-flash': IslamicKnowledgePlatformDemoGemini },
  'showcase-090': { 'gemini-3-flash': IslamicNightDemoGemini },
  'showcase-091': { 'gemini-3-flash': AndalusianDemoGemini },
  'showcase-092': { 'gemini-3-flash': ModernIslamicDashboardDemoGemini },
  'showcase-093': { 
    'gemini-3-flash': KaabaInspiredDemoGemini,
    'claude-4.6-sonnet': KaabaInspiredDemoClaudeSonnet,
  },
  'showcase-094': { 
    'gemini-3-flash': RamadanLanternDemoGemini,
    'claude-4.6-sonnet': RamadanLanternDemoClaudeSonnet,
  },
  'showcase-095': { 
    'gemini-3-flash': OttomanPalaceDemoGemini,
    'claude-4.6-sonnet': OttomanPalaceDemoClaudeSonnet,
  },
  'showcase-096': { 
    'gemini-3-flash': IslamicGoldenAgeLibraryDemoGemini,
    'claude-4.6-sonnet': IslamicGoldenAgeLibraryDemoClaudeSonnet,
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
