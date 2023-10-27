import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { TbAccessible } from "react-icons/tb";

export default function Navbar() {
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
