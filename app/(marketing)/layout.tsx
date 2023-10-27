import React from "react";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProtectedRoute>
      <section className="mx-auto flex h-full flex-col justify-between space-y-5">
        <Navbar />
        <main className="p-5">{children}</main>
        <Footer />
      </section>
    </AuthProtectedRoute>
  );
}
