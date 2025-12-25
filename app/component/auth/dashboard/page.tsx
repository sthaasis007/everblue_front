import DashboardLayout from "../../dashboard/dashboardlayout";
import StatCard from "../../dashboard/StatCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="rounded-2xl border bg-white p-6">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">
          Dummy dashboard after login. You can connect real data later.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Users" value="1,245" sub="+12% this month" />
        <StatCard title="Active Sessions" value="83" sub="Last 24 hours" />
        <StatCard title="Conversion Rate" value="4.6%" sub="Weekly average" />
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>

        <div className="mt-4 overflow-hidden rounded-xl border">
          <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <div>Event</div>
            <div>Status</div>
            <div className="text-right">Time</div>
          </div>

          {[
            { event: "User logged in", status: "Success", time: "2 min ago" },
            { event: "Profile updated", status: "Success", time: "1 hour ago" },
            { event: "Password change", status: "Pending", time: "Yesterday" },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-4 py-3 text-sm text-slate-700"
            >
              <div>{row.event}</div>
              <div>
                <span
                  className={[
                    "inline-flex rounded-full px-2 py-0.5 text-xs",
                    row.status === "Success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700",
                  ].join(" ")}
                >
                  {row.status}
                </span>
              </div>
              <div className="text-right text-slate-500">{row.time}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
