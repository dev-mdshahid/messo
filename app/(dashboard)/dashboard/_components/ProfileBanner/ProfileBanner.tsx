import React from "react";
import Image from "next/image";
import { useGetUser } from "@/context/UserProvider";

export default function ProfileBanner() {
  const { fname, lname, email } = useGetUser();
  return (
    <div>
      <div className="h-[100px] w-full rounded-xl bg-gradient-to-r from-messo-500 to-messo-400 sm:h-[200px]"></div>

      <div className="relative h-20 sm:h-28">
        <div className="absolute bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-messo-500 text-4xl capitalize text-white sm:left-4 sm:h-32 sm:w-32 sm:text-5xl">
          {fname[0]}
        </div>
        {/* <Image
          src={dummyDp}
          alt={fname + "dummy dp"}
          className="absolute bottom-6 left-4 h-32 w-32 rounded-full border-4 border-white"
        /> */}
        <div className="absolute left-28 top-3 sm:left-40 sm:top-4">
          {/* Name */}
          <h2 className="text-md font-bold text-messo-900 sm:text-2xl">
            {fname + " " + lname}
          </h2>

          {/* Email */}
          <p className="pt-px text-sm text-gray-500 sm:text-base">{email}</p>
        </div>
      </div>
    </div>
  );
}
