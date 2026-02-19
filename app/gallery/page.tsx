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

/**
 * Gallery page — Server Component for SEO optimization
 */
export default async function GalleryPage() {
  const presenter = createServerGalleryPresenter();

  try {
    const viewModel = await presenter.getViewModel();
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
