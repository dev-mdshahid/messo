import React from "react";
import discountBadge from "@/public/media/img/icons/discount_badge.png";

//Icons
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbShare } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

const PremiumOfferCard = () => {
  return (
    <div className="w-full whitespace-nowrap rounded-xl bg-white p-8 shadow shadow-messo-100">
      <div className="flex flex-col items-center">
        <div className="w-fit rounded-full bg-yellow-50 p-4">
          <Image src={discountBadge} alt="" className="w-20" />
        </div>
        <p className="mt-3 font-medium capitalize text-gray-400">
          Special offer
        </p>
        <h2 className="text-xl font-bold capitalize text-blue-900">
          Only just for you
        </h2>
      </div>

      <div className="mt-6 flex items-center justify-between gap-8">
        <div className="flex items-center gap-5">
          <HiOutlineShoppingCart className="text-3xl text-amber-500" />
          <div>
            <h3 className="font-bold capitalize text-blue-900">
              Buy now to avail 35% off
            </h3>
            <p className="text-sm text-gray-500">Feel free to cancel anytime</p>
          </div>
        </div>
        <div className="rounded-full bg-amber-100 p-2 text-xl text-amber-500">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-8">
        <div className="flex items-center gap-5">
          <TbShare className="text-3xl text-green-500" />
          <div>
            <h3 className="font-bold capitalize text-blue-900">
              Invite friends to MessO
            </h3>
            <p className="text-sm text-gray-500">Avail 15% discount</p>
          </div>
        </div>
        <div className="rounded-full bg-green-100 p-2 text-xl text-green-500">
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="relative mt-8 rounded-lg bg-yellow-100 px-8 py-5">
        <div className="absolute bottom-[50%] left-0 h-[80px] w-1 translate-y-1/2 rounded-2xl bg-yellow-500"></div>
        <div className="">
          <h2 className="text-lg font-bold capitalize text-blue-900">
            Design system workshop{" "}
          </h2>
          <p className="mb-4 mt-1 text-sm text-gray-500">
            <span>20th December</span> <span className="ml-4">10:30 am</span>
          </p>
          <div className="flex justify-evenly gap-8">
            <div className="flex items-center gap-2 text-yellow-600">
              <AiOutlineStar className="text-2xl" />
              <span>Interested</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <RiShareForwardLine className="text-2xl" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumOfferCard;
