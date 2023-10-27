"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return (
    <div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
}
