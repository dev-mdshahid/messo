import Sidebar from "@/app/(dashboard)/_components/Sidebar/Sidebar";
import Topbar from "@/app/(dashboard)/_components/Topbar/Topbar";
import UserProvider from "@/context/UserProvider";
import React, { Suspense } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <main className="grid h-screen grid-cols-[auto_1fr]">
        <Sidebar />
        <section className="grid h-full grid-rows-[auto_1fr] overflow-y-auto">
          <Topbar />
          <div className="overflow-y-auto rounded-tl-xl bg-messo-50/80 p-6">
            {children}
          </div>
        </section>
      </main>
    </UserProvider>
  );
}
