import { LucideCalculator } from "lucide-react";
import React from "react";

type DietSummaryProps = {
  targetedCalories: number;
  idealCalories: number;
  protein: number;
  carbohydrate: number;
  fat: number;
  className?: string;
};

export default function DietSummary({
  targetedCalories,
  idealCalories,
  protein,
  carbohydrate,
  fat,
  className,
}: DietSummaryProps) {
  return (
    <div
      className={
        "relative top-2 h-fit w-full rounded-xl border border-messo-100 bg-white p-5 lg:sticky lg:w-fit " +
        className
      }
    >
      <h2 className="flex items-center gap-2 pb-3 text-base font-bold capitalize text-blue-900 sm:text-xl">
        <LucideCalculator className="text-2xl" /> Calorie Counter
      </h2>
      <div className="h-px w-full bg-messo-900 opacity-20"></div>
      <div className="mt-4 rounded-xl bg-messo-50 p-3">
        <h3 className="mb-2 font-bold text-messo-900">Calories</h3>

        <div className="text-messo-900">
          <div className="flex justify-between gap-10">
            <p className="pl-4 ">Total demand</p>
            <p className="pr-1 font-semibold">{idealCalories} cal</p>
          </div>
          <div className="flex justify-between gap-10">
            <p className="pl-4">Total added</p>
            <p className="pr-1 font-semibold">- {targetedCalories} cal</p>
          </div>
          <div className="my-px ml-3 h-px bg-messo-900 opacity-20"></div>
          <div className="flex justify-between gap-10">
            <p className="pl-4">
              {targetedCalories > idealCalories ? "Extra" : "Deficit"}
            </p>
            <p className="pr-1 font-semibold">
              {targetedCalories > idealCalories
                ? (targetedCalories - idealCalories).toFixed(1)
                : (idealCalories - targetedCalories).toFixed(1)}{" "}
              cal
            </p>
          </div>
        </div>
      </div>

      {/* Nutrition */}
      <div className="mt-4 rounded-xl bg-purple-50 p-3">
        <h3 className="mb-2 font-bold text-purple-900">Nutrition facts</h3>
        <div className="text-purple-900">
          <div className="flex justify-between">
            <h5 className="pl-4 text-purple-900">Carbs</h5>
            <p className="pr-1 font-semibold">
              {(carbohydrate / 4).toFixed(1)} g
            </p>
          </div>
          <div className="flex justify-between">
            <h5 className="pl-4 text-purple-900">Protein</h5>
            <p className="pr-1 font-semibold">{(protein / 4).toFixed(1)} g</p>
          </div>

          <div className="flex justify-between">
            <h5 className="pl-4 text-purple-900">Fat</h5>
            <p className="pr-1 font-semibold">{(fat / 9).toFixed(1)} g</p>
          </div>
        </div>
      </div>
    </div>
  );
}
