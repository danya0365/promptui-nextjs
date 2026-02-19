import '@/public/styles/index.css';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import { ThemeProvider } from '@/src/presentation/components/providers/ThemeProvider';

/**
 * (main) Route Group Layout
 * Wraps all "main site" pages with ThemeProvider + MainLayout
 * This does NOT affect pages in other route groups like (demo)
 */
export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
}
