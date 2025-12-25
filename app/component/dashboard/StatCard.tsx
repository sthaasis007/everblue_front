export default function StatCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-600">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
      {sub ? <p className="mt-2 text-xs text-slate-500">{sub}</p> : null}
    </div>
  );
}
