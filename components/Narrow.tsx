export default function Narrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-3xl ${className}`.trim()}>{children}</div>;
}
