export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-8 lg:px-16 ${className}`.trim()}>
      {children}
    </div>
  );
}
