import React from "react";
import dummyDp from "@/public/media/img/icons/dummy_avatar.png";
import Image from "next/image";

export default function ProfileBanner() {
  const fname = "Md Shahidul";
  const lname = "Islam";
  const email = "mdshahidulridoy@gmail.com";
  return (
    <div>
      <div className="h-[200px] w-full rounded-xl bg-[url('https://png.pngtree.com/background/20211217/original/pngtree-geometric-cross-logo-health-care-light-effect-blue-gradient-background-picture-image_1592436.jpg')] bg-cover bg-center bg-no-repeat"></div>

      <div className="relative h-28">
        <Image
          src={dummyDp}
          alt={fname + "dummy dp"}
          className="absolute bottom-6 left-4 h-32 w-32 rounded-full border-2 border-white"
        />
        <div className="absolute left-40 top-3">
          {/* Name */}
          <h2 className="text-2xl font-bold text-blue-900">
            {fname + " " + lname}
          </h2>

          {/* Email */}
          <p className="pt-px text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
}
