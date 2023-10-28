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
      <div className="flex items-center justify-between">
        <div>
          <h3 className="rounded border-l-4 border-blue-600 px-4 text-[18px] font-semibold capitalize text-blue-900">
            {name}
          </h3>
          <p className="px-5 text-[13px] text-gray-500">
            Started on {startDate}
          </p>
        </div>
        {type === "exercise" ? (
          <BiDumbbell className="mx-5 text-4xl text-blue-600" />
        ) : (
          <MdFastfood className="mx-5 text-4xl text-pink-600" />
        )}
      </div>

      <div className="px-5">
        <div className="my-5 grid grid-cols-2">
          <div className="border-r text-center">
            <h2 className="text-3xl font-semibold text-blue-700">{quantity}</h2>
            <p className="text-[13px] capitalize text-gray-500">
              total {type === "exercise" ? "exercises" : "calories"}
            </p>
          </div>
          <div className="border-l text-center">
            <h2 className="text-3xl font-semibold text-green-700">{days}</h2>
            <p className="text-[13px] capitalize text-gray-500">
              Days completed
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
