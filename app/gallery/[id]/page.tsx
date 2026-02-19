import { ShowcaseDetailView } from '@/src/presentation/components/showcase-detail/ShowcaseDetailView';
import { createServerShowcaseDetailPresenter } from '@/src/presentation/presenters/showcase-detail/ShowcaseDetailPresenterServerFactory';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

interface ShowcaseDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ShowcaseDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const presenter = createServerShowcaseDetailPresenter();
  return presenter.generateMetadata(resolvedParams.id);
}

/**
 * Showcase Detail page — Dynamic route [id]
 * Server Component for SEO following CREATE_PAGE_PATTERN
 */
export default async function ShowcaseDetailPage({
  params,
}: ShowcaseDetailPageProps) {
  const resolvedParams = await params;
  const presenter = createServerShowcaseDetailPresenter();

  try {
    const viewModel = await presenter.getViewModel(resolvedParams.id);

    return (
      <ShowcaseDetailView
        id={resolvedParams.id}
        initialViewModel={viewModel ?? undefined}
      />
    );
  } catch (error) {
    console.error('Error fetching showcase detail:', error);

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดข้อมูลได้</p>
          <Link
            href="/gallery"
            className="btn-primary inline-flex items-center px-4 py-2"
          >
            กลับไปแกลเลอรี
          </Link>
        </div>
      </div>
    );
  }
}
