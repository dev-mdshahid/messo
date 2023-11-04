import React from "react";
import Image from "next/image";
import { useGetUser } from "@/context/UserProvider";

export default function ProfileBanner() {
  const { fname, lname, email } = useGetUser();
  return (
    <div>
      <div className="h-[200px] w-full rounded-xl bg-gradient-to-r from-messo-500 to-messo-400"></div>

      <div className="relative h-28">
        <div className="absolute bottom-6 left-4 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-messo-500 text-5xl capitalize text-white">
          {fname[0]}
        </div>
        {/* <Image
          src={dummyDp}
          alt={fname + "dummy dp"}
          className="absolute bottom-6 left-4 h-32 w-32 rounded-full border-4 border-white"
        /> */}
        <div className="absolute left-40 top-4">
          {/* Name */}
          <h2 className="text-2xl font-bold text-messo-900">
            {fname + " " + lname}
          </h2>

          {/* Email */}
          <p className="pt-px text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
}
