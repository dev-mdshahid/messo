"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useGetUser } from "@/context/UserProvider";
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";

export default function Topbar() {
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const {
    user: { fname, lname, img },
  } = useGetUser();
  return (
    <section className="flex h-fit items-center justify-between p-5 py-2.5 sm:py-5">
      {/* left title */}
      <div className="mr-5 flex items-center">
        <IoArrowBack
          onClick={() => router.back()}
          className="mr-5 cursor-pointer text-xl text-gray-500 md:text-2xl"
        />

        <h1 className="select-none text-xl font-bold capitalize text-messo-900 md:text-2xl">
          {pathname.split("/")[1]}
        </h1>
      </div>

      {/* right side content */}
      <div className="flex items-center gap-7">
        {/* Search box */}
        <div className="hidden w-72 items-center gap-3 rounded-xl bg-messo-50 px-4 py-1.5 lg:flex">
          <BiSearchAlt className="text-2xl text-gray-700" />
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-sm"
            name="search"
            placeholder="Find something here..."
            id="search"
          />
        </div>

        {/* Icons */}
        {/* <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-messo-600">
            <IoNotificationsOutline className="text-xl" />
          </div>

          <div className="rounded-lg bg-blue-100 p-2 text-messo-600">
            <IoGiftOutline className="text-xl" />
          </div>
        </div> */}

        {/* Profile */}

        {fname ? (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-messo-600 text-xl text-white">
                  {img ? (
                    <Image
                      src={img}
                      alt={fname + "img"}
                      width={40}
                      height={40}
                    />
                  ) : (
                    fname[0]
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>
                  <h3 className="px-3 py-1 text-sm font-semibold text-messo-900">
                    Menu
                  </h3>
                </DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <button
                      onClick={() => {
                        setLoading(true);
                        signOut();
                      }}
                      disabled={loading}
                      className="flex cursor-pointer items-center rounded-md bg-red-500 px-4 py-1.5 text-xs text-white hover:bg-red-600 disabled:bg-red-500/50 sm:px-5 sm:py-2 sm:text-sm"
                    >
                      {loading ? (
                        <span className="loader"></span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <FaArrowRightFromBracket
                            size={16}
                            className="rotate-180"
                          />
                          Logout
                        </span>
                      )}
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden text-xs sm:block">
              <p className="whitespace-nowrap font-bold text-messo-900">
                {fname + " " + lname}
              </p>
              <p className="whitespace-nowrap font-semibold text-gray-500">
                User
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:w-48  sm:pr-5">
            <Skeleton className=" h-9 w-9 rounded-full bg-messo-200 sm:w-12 "></Skeleton>
            <div className="hidden w-full sm:block">
              <Skeleton className="mb-1 h-3 w-full bg-messo-100"></Skeleton>
              <Skeleton className="h-2 w-1/3 bg-messo-100"></Skeleton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
