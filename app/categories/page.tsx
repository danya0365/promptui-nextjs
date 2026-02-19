import { siteConfig } from '@/src/config/site.config';
import { CategoriesView } from '@/src/presentation/components/categories/CategoriesView';
import { createServerCategoriesPresenter } from '@/src/presentation/presenters/categories/CategoriesPresenterServerFactory';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function generateMetadata(): Promise<Metadata> {
  const presenter = createServerCategoriesPresenter();
  return presenter.generateMetadata();
}

/**
 * Categories page — Server Component
 */
export default async function CategoriesPage() {
  const presenter = createServerCategoriesPresenter();

  try {
    const viewModel = await presenter.getViewModel(siteConfig.categories);
    return <CategoriesView initialViewModel={viewModel} />;
  } catch (error) {
    console.error('Error fetching categories:', error);

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดหมวดหมู่ได้</p>
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
