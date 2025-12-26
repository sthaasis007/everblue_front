export default function CircleCarousel() {
  const items = Array.from({ length: 8 });

  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="mb-4 text-sm font-semibold text-slate-700">CURRENT</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((_, i) => (
          <div key={i} className="flex shrink-0 flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-red-500/80" />
            <div className="h-3 w-14 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </section>
  );
}
