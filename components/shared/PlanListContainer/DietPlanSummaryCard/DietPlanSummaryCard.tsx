import { DietPlanType } from "@/lib/type";
import Link from "next/link";
import React from "react";
import { FaBowlFood } from "react-icons/fa6";

// Icons
import { MdOutlineDeleteOutline, MdOutlineIosShare } from "react-icons/md";

type DietPlanSummaryCardProps = {
  plan: DietPlanType;
};

export default function DietPlanSummaryCard({
  plan,
}: DietPlanSummaryCardProps) {
  const {
    name,
    id,
    createdOn,
    targetedCalories,
    breakfast,
    snack1,
    lunch,
    snack2,
    dinner,
  } = plan;
  const foodNumber =
    breakfast.foods.length +
    snack1.foods.length +
    lunch.foods.length +
    snack2.foods.length +
    dinner.foods.length;
  return (
    <Link
      href={`diet/${id}`}
      className="w-full min-w-fit max-w-[400px] cursor-pointer rounded-lg border border-messo-100 bg-white py-4 transition hover:border-messo-300 hover:shadow-lg hover:shadow-messo-100"
    >
      <div className="grid grid-cols-[1fr_auto] items-center justify-between">
        <div>
          <h3 className="mb-1 rounded border-l-4 border-blue-600 px-4 text-base font-semibold capitalize text-blue-900 sm:text-[18px]">
            {name}
          </h3>
          <p className="px-5 text-xs text-gray-500 sm:text-[13px]">
            Created on {createdOn}
          </p>
        </div>

        <FaBowlFood className="mx-5 text-3xl text-messo-600 sm:text-4xl" />
      </div>

      <div className="px-5">
        <div className="my-5 grid grid-cols-2">
          <div className="border-r text-center">
            <h2 className="mb-1 text-2xl font-semibold text-blue-700 sm:text-3xl">
              {targetedCalories}
            </h2>
            <p className="text-[13px] capitalize text-gray-500">
              total calories
            </p>
          </div>
          <div className="border-l text-center">
            <h2 className="mb-1 text-2xl font-semibold text-green-700 sm:text-3xl">
              {foodNumber}
            </h2>
            <p className="text-xs capitalize text-gray-500 sm:text-[13px]">
              Total Foods
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 text-xl text-gray-500">
          <MdOutlineIosShare title="Export" />
          <MdOutlineDeleteOutline title="Delete" />
        </div>
      </div>
    </Link>
  );
}
