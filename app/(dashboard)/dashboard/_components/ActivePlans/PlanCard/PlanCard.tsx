import React from "react";

// Icons
import { BiDumbbell } from "react-icons/bi";
import {
  MdFastfood,
  MdOutlineDeleteOutline,
  MdOutlineIosShare,
} from "react-icons/md";

type PlanCardProps = {
  name: string;
  startDate: string;
  quantity: number;
  days: number;
  type: "exercise" | "diet";
};

export default function PlanCard({
  name,
  startDate,
  quantity,
  days,
  type,
}: PlanCardProps) {
  return (
    <div className="cursor-pointer rounded-lg border bg-white py-4 transition hover:shadow-lg">
      <div className="grid grid-cols-[1fr_auto] items-center justify-between">
        <div>
          <h3 className="rounded border-l-4 border-blue-600 px-4 text-base font-semibold capitalize text-blue-900 sm:text-[18px]">
            {name}
          </h3>
          <p className="px-5 text-xs text-gray-500 sm:text-[13px]">
            Started on {startDate}
          </p>
        </div>
        {type === "exercise" ? (
          <BiDumbbell className="mx-5 text-3xl text-blue-600 sm:text-4xl" />
        ) : (
          <MdFastfood className="mx-5 text-3xl text-pink-600 sm:text-4xl" />
        )}
      </div>

      <div className="px-5">
        <div className="my-5 grid grid-cols-2">
          <div className="border-r text-center">
            <h2 className="text-2xl font-semibold text-blue-700 sm:text-3xl">
              {quantity}
            </h2>
            <p className="text-[13px] capitalize text-gray-500">
              total {type === "exercise" ? "exercises" : "calories"}
            </p>
          </div>
          <div className="border-l text-center">
            <h2 className="text-2xl font-semibold text-green-700 sm:text-3xl">
              {days}
            </h2>
            <p className="text-xs capitalize text-gray-500 sm:text-[13px]">
              Days tracked
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xl text-gray-500">
            <MdOutlineIosShare />
            <MdOutlineDeleteOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
