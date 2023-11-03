import React from "react";

type DietSummaryProps = {
  targetedCalories: number;
  idealCalories: number;
};

export default function DietSummary({
  targetedCalories,
  idealCalories,
}: DietSummaryProps) {
  return (
    <div className="sticky top-2 h-fit w-[300px] rounded-xl border border-blue-100 bg-white p-5">
      <h2 className="pb-3 text-2xl font-semibold capitalize text-blue-900">
        Calorie counter
      </h2>
      <div className="h-px w-full bg-blue-900 opacity-20"></div>
      <div className="mt-4">
        <h3 className="font-bold">Calories</h3>

        <div className="flex justify-between">
          <p className="pl-4">Total demand</p>
          <p className="pr-1">{idealCalories} cal</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Total added</p>
          <p className="pr-1">{targetedCalories} cal</p>
        </div>
        <div className="my-px ml-3 h-px bg-blue-900 opacity-20"></div>
        <div className="flex justify-between">
          <p className="pl-4">
            {targetedCalories > idealCalories ? "Extra" : "Deficit"}
          </p>
          <p className="pr-1">
            {targetedCalories > idealCalories
              ? targetedCalories - idealCalories
              : idealCalories - targetedCalories}{" "}
            cal
          </p>
        </div>
      </div>

      {/* Nutrition */}
      <div className="mt-4">
        <h3 className="font-bold">Nutrition</h3>

        <div className="flex justify-between">
          <p className="pl-4">Protein</p>
          <p className="pr-1">34g</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Carb</p>
          <p className="pr-1">123g</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Fat</p>
          <p className="pr-1">12.3g</p>
        </div>
      </div>
    </div>
  );
}
