import Sidebar from "@/components/shared/Sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col md:flex-row gap-2 min-h-screen">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-slate-100 rounded-xl p-4">{children}</div>
    </div>
  );
}
