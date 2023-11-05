"use client";
import React from "react";
import shareLove from "@/public/media/img/icons/share_love.png";

//Icons
import { BsFillHeartFill } from "react-icons/bs";
import { RiShareForwardLine, RiUserAddFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { useGetUser } from "@/context/UserProvider";

const PremiumOfferCard = () => {
  const {
    user: { joinedAt },
  } = useGetUser();
  const date = new Date(joinedAt);
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full rounded-xl bg-white p-8 shadow shadow-messo-100">
      <div className="flex flex-col items-center">
        <div className="w-fit rounded-full bg-yellow-50 p-4">
          <Image src={shareLove} alt="" className="w-20" />
        </div>
        <p className="mt-3 font-medium capitalize text-gray-400">Thank you!</p>
        <h2 className="text-xl font-bold capitalize text-blue-900">
          You&apos;re the best!
        </h2>
      </div>

      <div className="mt-6 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <RiUserAddFill className="text-3xl text-green-600" />
          <div>
            <h3 className="font-bold capitalize text-blue-900">
              Joined in {months[month - 1]}, {year}
            </h3>
            <p className="text-sm text-gray-500">
              You&apos;re one of our first users
            </p>
          </div>
        </div>
        {/* <div className="rounded-full bg-amber-100 p-2 text-xl text-amber-500">
          <MdKeyboardArrowRight />
        </div> */}
      </div>
      <div className="mt-6 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <BsFillHeartFill className="text-3xl text-pink-500" />
          <div>
            <h3 className="font-bold capitalize text-blue-900">
              We&apos;ll never forget you!
            </h3>
            <p className="text-sm text-gray-500">We Promise! Seriously!</p>
          </div>
        </div>
        {/* <div className="rounded-full bg-green-100 p-2 text-xl text-green-500">
          <MdKeyboardArrowRight />
        </div> */}
      </div>

      <div className="relative mt-8 rounded-lg bg-yellow-100 px-8 py-5">
        <div className="absolute bottom-[50%] left-0 h-[40px] w-1 translate-y-1/2 rounded-2xl bg-yellow-500"></div>
        <div className="">
          <h2 className="text-lg font-bold capitalize text-blue-900">
            Lifetime membership!{" "}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            <span>You&apos;ve achieved this!</span>
            {/* <span className="ml-4">10:30 am</span> */}
          </p>
          {/* <div className="flex justify-evenly gap-8">
            <div className="flex items-center gap-2 text-yellow-600">
              <AiOutlineStar className="text-2xl" />
              <span>Interested</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <RiShareForwardLine className="text-2xl" />
              <span>Share</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PremiumOfferCard;
