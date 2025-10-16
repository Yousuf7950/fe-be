import SidebarLink from "../Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-160px)] bg-gray-50">
      {/* ===== Sidebar ===== */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
        <h2 className="text-xl font-semibold mb-8 text-blue-600">Dashboard</h2>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          <SidebarLink href="/dashboard" label="Overview" />
          <SidebarLink href="/dashboard/settings" label="Settings" />
          <SidebarLink href="/" label="Back to Home" />
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <section className="flex-1 p-8">
        <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
          {children}
        </div>
      </section>
    </div>
  );
}
