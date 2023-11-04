"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  IoArrowBack,
  IoNotificationsOutline,
  IoGiftOutline,
} from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();
  const fname = "Md Shahidul";
  return (
    <section className="flex h-fit items-center justify-between p-5">
      {/* left title */}
      <div className="mr-5 flex items-center">
        <IoArrowBack
          onClick={() => router.back()}
          className="mr-5 cursor-pointer text-2xl text-gray-500"
        />

        <h1 className="select-none text-2xl font-bold capitalize text-messo-900">
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
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-messo-600">
            <IoNotificationsOutline className="text-xl" />
          </div>

          <div className="rounded-lg bg-blue-100 p-2 text-messo-600">
            <IoGiftOutline className="text-xl" />
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 pr-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-messo-600 text-xl text-white">
            {fname[0]}
          </div>
          <div className="text-xs">
            <p className="whitespace-nowrap font-bold">{"Md Shahidul Islam"}</p>
            <p className="whitespace-nowrap font-semibold text-gray-500">
              User
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
