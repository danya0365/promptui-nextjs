/**
 * (demo) Route Group Layout
 * Standalone wrapper — NO ThemeProvider, NO MainLayout, NO global CSS.
 * Each demo page handles its own styling from scratch.
 */
export default function DemoGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
