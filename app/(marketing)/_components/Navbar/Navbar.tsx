"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";

import { TbAccessible } from "react-icons/tb";

export default function Navbar() {
  const { status } = useSession();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";
  if (status === "authenticated") redirect(redirectUrl);

  return (
    <nav className="border-b border-messo-100 p-4">
      <div className="mx-auto flex w-full max-w-screen-2xl  justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-messo-700 lg:text-3xl">
          {" "}
          <TbAccessible className={" text-3xl lg:text-4xl"} /> MessO
        </h1>
        <div className="flex gap-3">
          <Link href={"signup"}>
            <Button variant={"outline"}>Signup</Button>
          </Link>

          <Link href={"login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
