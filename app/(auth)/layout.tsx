import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProtectedRoute>
      <main className="flex h-fit min-h-screen items-center justify-center overflow-y-auto bg-[#eceff7] p-5">
        {children}
      </main>
    </AuthProtectedRoute>
  );
}