import ActivePlansSkeleton from "@/app/(dashboard)/dashboard/_components/ActivePlans/ActivePlansSkeleton";
import PlanCardSkeleton from "@/app/(dashboard)/dashboard/_components/ActivePlans/PlanCard/PlanCardSkeleton";
import { sampleDietChart } from "@/data/diet/dietPlan";
import { getDateTime } from "@/helpers/getDateTime";
import { useGetSingleDietPlan } from "@/hooks/useGetSingleDietPlan";
import { DietPlanType } from "@/lib/type";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";

// Icons
import { MdOutlineDeleteOutline, MdOutlineIosShare } from "react-icons/md";

type DietPlanSummaryCardProps = {
  // plan: DietPlanType;
  planId: string;
};

export default function DietPlanSummaryCard({
  // plan,
  planId,
}: DietPlanSummaryCardProps) {
  const { data, status } = useGetSingleDietPlan(planId);
  console.log(planId);
  console.log(data);
  let name,
    id,
    createdOn,
    targetedCalories,
    breakfast,
    snack1,
    lunch,
    snack2,
    dinner;

  // Counting total food number
  let totalFoodCount = 0;

  if (data?.plan) {
    const { plan } = data;
    name = plan.name;
    id = plan.id;
    createdOn = plan.createdOn;
    targetedCalories = plan.targetedCalories;
    breakfast = plan.breakfast;
    snack1 = plan.snack1;
    lunch = plan.lunch;
    snack2 = plan.snack2;
    dinner = plan.dinner;

    let foodTypes = Object.keys(breakfast.foods);
    for (let i = 0; i < foodTypes.length; i++) {
      totalFoodCount += breakfast.foods[foodTypes[i]].length;
    }

    foodTypes = Object.keys(snack1.foods);
    // Counting total food number
    for (let i = 0; i < foodTypes.length; i++) {
      totalFoodCount += snack1.foods[foodTypes[i]].length;
    }

    foodTypes = Object.keys(lunch.foods);
    for (let i = 0; i < foodTypes.length; i++) {
      totalFoodCount += lunch.foods[foodTypes[i]].length;
    }

    foodTypes = Object.keys(snack2.foods);
    for (let i = 0; i < foodTypes.length; i++) {
      totalFoodCount += snack2.foods[foodTypes[i]].length;
    }

    foodTypes = Object.keys(dinner.foods);
    for (let i = 0; i < foodTypes.length; i++) {
      totalFoodCount += dinner.foods[foodTypes[i]].length;
    }
  }

  const date = getDateTime(createdOn);

  return data ? (
    <Link
      href={`diet/${id}`}
      className="w-full min-w-fit max-w-[400px] cursor-pointer rounded-lg border border-messo-100 bg-white py-4 transition hover:border-messo-300 hover:shadow-lg hover:shadow-messo-100"
    >
      <div className="grid grid-cols-[1fr_auto] items-center justify-between">
        <div>
          <h3 className="mb-1 rounded border-l-4 border-messo-600 px-4 text-base font-semibold capitalize text-messo-900 sm:text-[18px]">
            {name}
          </h3>
          <p className="px-5 text-xs text-gray-500 sm:text-[13px]">
            Created on {date}
          </p>
        </div>

        <FaBowlFood className="mx-5 text-3xl text-messo-600 sm:text-4xl" />
      </div>

      <div className="px-5">
        <div className="my-5 grid grid-cols-2">
          <div className="border-r text-center">
            <h2 className="mb-1 text-2xl font-semibold text-messo-700 sm:text-3xl">
              {targetedCalories}
            </h2>
            <p className="text-xs capitalize text-gray-500 sm:text-[13px]">
              total calories
            </p>
          </div>
          <div className="border-l text-center">
            <h2 className="mb-1 text-2xl font-semibold text-green-700 sm:text-3xl">
              {totalFoodCount}
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
  ) : (
    <PlanCardSkeleton className="w-full max-w-[400px]" />
  );
}
