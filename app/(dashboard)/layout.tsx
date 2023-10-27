import Sidebar from "@/components/shared/dashboardLayout/Sidebar/Sidebar";
import Topbar from "@/components/shared/dashboardLayout/Topbar/Topbar";
import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <main className="grid h-screen grid-cols-[auto_1fr]">
        <Sidebar />
        <section className="grid grid-rows-[auto_1fr] overflow-y-auto">
          <Topbar />
          <div className="rounded-tl-xl bg-messo-50 bg-opacity-70 p-6">
            {children}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
