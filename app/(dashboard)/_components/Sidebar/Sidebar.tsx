"use client";
import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
// Importing ions
import { FaChild } from "react-icons/fa";
import { IoFitness, IoBarChart, IoBarbell } from "react-icons/io5";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";

const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const pathname = usePathname();
  if (status === "unauthenticated") redirect(`/login?redirect=${pathname}`);

  return (
    <nav className="flex h-full w-full  flex-col justify-between rounded-l-xl bg-white p-4 pr-0 pt-2">
      <div>
        {/* Logo */}
        <div className="mt-4 flex items-center pl-4">
          <div className="bg-messo mr-2 flex h-9 w-9 items-center justify-center rounded-xl rounded-br">
            <FaChild className="text-2xl text-white" />
          </div>
          <h1 className="hidden text-xl font-bold lg:inline-block">MessO</h1>
        </div>

        {/* Main menu */}
        <h3 className="mt-10 hidden pl-4 text-sm font-semibold xl:block">
          Main Menu
        </h3>
        <div className="child:whitespace-nowrap xl:child:pr-8 mt-12 flex flex-col gap-2 text-gray-500 transition xl:mt-4">
          {/* Navigation menu*/}
          <SidebarMenu
            icon={<IoBarChart />}
            name="Dashboard"
            href="/dashboard"
          />
          {/* <Menu icon={<FaUserCircle />} name="My Profile" to="/profile" /> */}
          <SidebarMenu icon={<IoBarbell />} name="Exercise" href="/exercise" />
          <SidebarMenu
            icon={<IoFitness />}
            name="Diet and Nutrition"
            href="/diet"
          />
          <SidebarMenu
            icon={<MdFaceRetouchingNatural />}
            name="Beauty Care"
            href="/beautycare"
          />
          {/* <Menu
            icon={<GiHealthNormal />}
            name="Test Your Health"
            to="/testhealth"
          /> */}
        </div>
      </div>

      <div className="mb-5 pr-3 lg:pr-5">
        {status === "authenticated" ? (
          <Button
            disabled={loading}
            className="mt-5 w-full"
            variant={"destructive"}
            onClick={() => {
              setLoading(true);
              signOut();
            }}
          >
            {loading ? (
              <ButtonLoader
                className="hidden lg:inline-block"
                text="Logging out..."
              />
            ) : (
              <span className=" flex w-full items-center justify-center gap-2">
                <span className="hidden lg:inline-block">Logout</span>

                <FaArrowRightFromBracket size={20} />
              </span>
            )}
          </Button>
        ) : (
          <Button className="mt-5 w-full">
            <Link href={"/login"}>Login</Link>{" "}
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
