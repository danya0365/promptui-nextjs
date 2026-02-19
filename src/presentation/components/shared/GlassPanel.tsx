interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
}

/**
 * GlassPanel — Glassmorphism container
 * Configurable blur strength via `strong` prop
 */
export function GlassPanel({
  children,
  className = '',
  strong = false,
}: GlassPanelProps) {
  return (
    <div
      className={`${strong ? 'glass-panel-strong' : 'glass-panel'} rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}
