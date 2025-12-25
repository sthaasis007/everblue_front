import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-lg font-bold text-slate-800">EverBlue</div>

          <div className="flex items-center gap-3">
            <div className="hidden text-sm text-slate-600 sm:block">
              Welcome, User
            </div>
            <Link
              href="/"
              className="rounded-md border px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-2xl border bg-white p-4">
          <nav className="space-y-1">
            <Link
              href="/auth/dashboard"
              className="block rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-800"
            >
              Dashboard
            </Link>
            <button
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
              type="button"
            >
              Reports (dummy)
            </button>
            <button
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
              type="button"
            >
              Settings (dummy)
            </button>

            <div className="pt-3">
              <Link
                href="/login"
                className="block rounded-lg border px-3 py-2 text-center text-sm text-slate-700 hover:bg-slate-50"
              >
                Logout (dummy)
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main */}
        <section className="space-y-6">{children}</section>
      </div>
    </div>
  );
}
