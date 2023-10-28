"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname, redirect } from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  if (session.status === "unauthenticated") {
    router.push(`/login?redirect=${pathname}`);
  }
  return children;
};

export default ProtectedRoute;
