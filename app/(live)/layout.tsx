/**
 * (demo) Route Group Layout
 * Standalone wrapper — NO ThemeProvider, NO MainLayout, NO global CSS.
 * Each demo page handles its own styling from scratch.
 */
export default function LivePreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
          *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          /* Custom Scrollbar for Webkit */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: rgba(15, 23, 42, 0.5); border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: rgba(15, 23, 42, 0.8); }
      `}</style>
      {children}
    </>
  );
}
