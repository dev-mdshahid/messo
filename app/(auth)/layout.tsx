import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-fit min-h-[100dvh] items-center justify-center overflow-y-auto sm:bg-[#eceff7] sm:p-5">
      {children}
    </main>
  );
}
