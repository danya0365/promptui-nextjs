import { GalleryView } from '@/src/presentation/components/gallery/GalleryView';
import { createServerGalleryPresenter } from '@/src/presentation/presenters/gallery/GalleryPresenterServerFactory';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerGalleryPresenter();
  return presenter.generateMetadata();
}

interface GalleryPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

/**
 * Gallery page — Server Component for SEO optimization
 */
export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const presenter = createServerGalleryPresenter();
  
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const category = resolvedParams.category;

  try {
    const viewModel = await presenter.getViewModel(page, 12, category);
    return <GalleryView initialViewModel={viewModel} />;
  } catch (error) {
    console.error('Error fetching gallery data:', error);

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดแกลเลอรีได้</p>
          <Link
            href="/"
            className="btn-primary inline-flex items-center px-4 py-2"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    );
  }
}
