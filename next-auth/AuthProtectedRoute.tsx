"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

type AuthProtectedRouteProps = {
  children: React.ReactNode;
};

const AuthProtectedRoute = ({ children }: AuthProtectedRouteProps) => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";

  if (session.status === "authenticated") {
    router.push(redirectUrl);
  } else {
    return <>{children}</>;
  }
};

export default AuthProtectedRoute;
