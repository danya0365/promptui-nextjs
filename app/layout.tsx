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
};

/**
 * Root Layout — Bare minimum
 * Only HTML/body/font. No ThemeProvider or MainLayout here.
 * Route groups handle their own wrapping.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
