export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-6 ${className}`.trim()}>
      <div className="text-motusGold text-xs tracking-[0.35em] uppercase whitespace-nowrap">
        {children}
      </div>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}
