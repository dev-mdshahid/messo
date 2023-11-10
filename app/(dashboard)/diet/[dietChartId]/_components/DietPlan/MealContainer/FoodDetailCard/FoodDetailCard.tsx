import { FoodType } from "@/lib/type";
import React from "react";

type FoodDetailCardProps = {
  data: FoodType;
};

export default function FoodDetailCard({ data }: FoodDetailCardProps) {
  const {
    name,
    img,
    category,
    description,
    calories,
    nutrition: { protein, carbs, fat },
  } = data;
  return (
    <div className="space-y-5">
      <img src={img} alt={name + " image"} className="w-full rounded-xl" />
      <div className="text-gray-60 rounded-xl bg-messo-50 p-5 ">
        <h3 className="mb-2 text-lg font-bold text-messo-900">About {name}</h3>
        <p className="ml-1 text-sm text-gray-600">{description}</p>
      </div>
      <div className=" rounded-xl bg-red-50 p-5">
        <h3 className="mb-5 text-lg font-bold text-red-900">
          Nutrition Facts (per 100g)
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-red-400">
            <div className="flex h-24 w-24 flex-col  justify-center rounded-full bg-white text-center ">
              <div className="text-2xl font-bold text-red-400">{calories} </div>
              <div className="text-sm text-gray-600">calories</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <span className="flex items-center gap-2 whitespace-nowrap rounded-xl   px-5 font-semibold text-green-800">
              <span className="block h-2 w-2 rounded-full bg-green-600"></span>
              Carbohydrates : {carbs}g
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap rounded-xl   px-5 font-semibold text-red-800">
              <span className="block h-2 w-2 rounded-full bg-red-600"></span>
              Protein : {protein}g
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap rounded-xl   px-5 font-semibold text-yellow-800">
              <span className="block h-2 w-2 rounded-full bg-yellow-600"></span>
              Fat : {fat}g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
