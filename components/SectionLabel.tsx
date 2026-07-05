export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}
