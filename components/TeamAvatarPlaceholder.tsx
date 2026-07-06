// PLACEHOLDER — swap for a real next/image photo per person once available.
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamAvatarPlaceholder({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder photo for ${name}`}
      className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white/70"
    >
      {getInitials(name)}
    </div>
  );
}
