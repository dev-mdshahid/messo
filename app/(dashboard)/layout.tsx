import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div>
        <p>Hi I am from dashboard layout</p>
        {children}
      </div>
    </ProtectedRoute>
  );
}
