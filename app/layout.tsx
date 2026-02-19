import '@/public/styles/index.css';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import { ThemeProvider } from '@/src/presentation/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
});

export const metadata: Metadata = {
  title: 'PromptUI — UI Showcase Gallery',
  description:
    'ค้นพบ UI สวย ๆ พร้อม prompt ที่ใช้สร้าง — copy ไปใช้กับ AI ได้ทันที',
  keywords: ['prompt', 'ui', 'showcase', 'gallery', 'ai', 'component'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
