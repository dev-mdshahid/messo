import React, { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import CategorizedFoodList from "./CategorizedFoodList/CategorizedFoodList";
import { FoodCategoryType, MealTimeType } from "@/lib/type";

type MealContainerProps = {
  mealPlan: {
    title: string;
    time: string;
    calories: number;
    foods: {
      [key: string]: {
        id: string;
        quantity: number;
      }[];
    };
  };
  mealTime: MealTimeType;
};

export default function MealContainer({
  mealPlan,
  mealTime,
}: MealContainerProps) {
  let totalFoodCount = 0;
  const { title, calories, time, foods } = mealPlan;
  const [categorizedFoods, setCategorizedFoods] = useState(foods);
  const foodTypes = Object.keys(foods);

  // Counting total food number
  for (let i = 0; i < foodTypes.length; i++) {
    totalFoodCount += foods[foodTypes[i]].length;
  }

  // const foodCategoryMap: Record<string, string> = {
  //   "whole grain": "carbohydrate",
  //   "lean protein": "protein",
  //   veg_protein: "veg_protein",
  //   liquid: "liquid",
  //   fruits: "fruits",
  //   vegetables: "vegetables",
  //   fat: "fat",
  // };

  return (
    <div className="overflow-hidden rounded-xl border border-messo-100 bg-white">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 p-5 text-lg font-bold capitalize text-blue-900 sm:text-xl">
          <BiFoodMenu className="text-2xl" /> {title}
        </h2>
        {/* <Button className="mr-3 flex items-center gap-2 bg-messo-800 hover:bg-messo-900">
          <FiEdit size={20} />
          Edit
        </Button> */}
      </div>

      <div className="h-px w-full bg-messo-900 opacity-20"></div>
      <div className="m-5 rounded-lg bg-messo-100 p-5 text-messo-900">
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Time: </h1>
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Calories Reserved: </h1>
          <span>{calories.toFixed(2)} cal</span>
        </div>
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Total Food Count: </h1>
          <span>{totalFoodCount}</span>
        </div>
      </div>
      <div className="h-px w-full bg-blue-900 opacity-20"></div>
      {/* <h1 className="pl-5 pt-4 text-lg font-semibold text-messo-900 sm:text-xl">
        Food list
      </h1> */}
      <div className="grid gap-5 p-3 pt-3 sm:p-5">
        {foodTypes.map((category, index) => (
          <CategorizedFoodList
            key={index}
            category={category as FoodCategoryType}
            mealTime={mealTime}
            // title={foodCategoryMap[category]}
            foodList={foods[category]}
            categorizedFoods={categorizedFoods}
            setCategorizedFoods={setCategorizedFoods}
          />
        ))}
        {/* <CategorizedFoodList category="carbohydrate" foodList={foods} />
        <CategorizedFoodList category="protein" foodList={foods} />
        <CategorizedFoodList category="fat" foodList={foods} /> */}
      </div>
    </div>
  );
}
