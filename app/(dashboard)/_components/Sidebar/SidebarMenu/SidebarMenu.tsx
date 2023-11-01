"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarMenuProps = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const SidebarMenu = ({ icon, name, href }: SidebarMenuProps) => {
  const pathname = usePathname();
  const regularStyle =
    "flex items-center px-4 lg:pr-8 py-3 rounded-l-lg rounded-r border-r-4 border-white";
  const activeStyle =
    "flex items-center px-4 lg:pr-8 py-3 rounded-l-lg rounded-r bg-blue-100 text-messo-600 border-r-4 border-messo-600";
  return (
    <Link
      href={href}
      className={
        pathname.split("/")[1] === href.split("/")[1]
          ? activeStyle
          : regularStyle
      }
    >
      <span className="text-2xl">{icon}</span>

      <h4 className="ml-3 hidden text-sm font-semibold lg:inline-block">
        {name}
      </h4>
    </Link>
  );
};

export default SidebarMenu;
