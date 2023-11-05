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
import { TbAccessible } from "react-icons/tb";

const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const pathname = usePathname();
  if (status === "unauthenticated") redirect(`/login?redirect=${pathname}`);

  return (
    <nav className="fixed bottom-0 z-10 flex h-fit w-full flex-col justify-between rounded-l-xl border-t border-messo-50 bg-white p-4 pb-0 pr-0 pt-2 sm:relative sm:h-full sm:border-t-0 sm:pl-1 lg:pl-4">
      <div>
        {/* Logo */}
        <h1 className="mt-4 hidden w-full items-center justify-center gap-2 text-lg font-semibold text-messo-700 sm:flex sm:text-xl lg:text-2xl">
          {" "}
          <TbAccessible className={"text-2xl sm:text-3xl lg:text-4xl"} />{" "}
          <span className="hidden pr-4 lg:block ">MessO</span>
        </h1>
        {/* <div className="mt-4 hidden items-center pl-4 sm:flex">
          <div className="bg-messo mr-2 flex h-9 w-9 items-center justify-center rounded-xl rounded-br">
            <FaChild className="text-2xl text-white" />
          </div>
          <h1 className="hidden text-xl font-bold lg:inline-block">MessO</h1>
        </div> */}

        {/* Main menu */}
        <h3 className="mt-10 hidden pl-4 text-sm font-semibold text-messo-900 xl:block">
          Main Menu
        </h3>
        <div className="mt-0 flex w-full justify-evenly gap-2 bg-white text-gray-500 transition sm:relative sm:mt-12 sm:flex-col sm:justify-start xl:mt-4">
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

      <div className=" mb-5 hidden pr-2 sm:block sm:pr-3 lg:pr-5">
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
