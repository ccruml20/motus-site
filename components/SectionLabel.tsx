export default function SectionLabel({
  children,
  className = "",
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "bg-white/18" : "bg-black/10";
  const text =
    tone === "dark" ? "text-motusGold" : "text-[color:var(--color-motusGoldText)]";

  return (
    <div className={`flex items-center gap-6 ${className}`.trim()}>
      <div className={`${text} text-[11px] tracking-[0.35em] uppercase whitespace-nowrap`}>
        {children}
      </div>
      <div className={`h-px flex-1 ${line}`} />
    </div>
  );
}
