import Image from "next/image";
import React from "react";

type FoodPreviewCardProps = {
  food: {
    _id: string;
    id: string;
    category: string;
    name: string;
    img: string;
    description: string;
    calories: number;
    nutrition: {
      protein: number;
      fat: number;
      carbs: number;
    };
    type: string;
  };
  quantity: number;
  index: number;
};

export default function FoodPreviewCard({
  food,
  quantity,
  index,
}: FoodPreviewCardProps) {
  const { name, img, category, calories, nutrition } = food;
  const { protein, fat, carbs } = nutrition;
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl border p-2 hover:shadow-lg">
      <h1 className="pl-1 text-2xl text-blue-900 opacity-70">{index + 1}</h1>
      <Image
        src={img}
        alt={name}
        height={48}
        width={48}
        className="w-12 rounded-full"
      />
      <div>
        <h1 className="text-xl">
          {name}{" "}
          <span className="text-sm text-blue-900 opacity-70">({category})</span>
        </h1>
        <h3 className="text-sm text-gray-500">
          <span className="font-semibold">{quantity}</span> grams (
          {((protein / 400) * quantity).toPrecision(2)}g protein,{" "}
          {((fat / 900) * quantity).toPrecision(2)}g fat,{" "}
          {((carbs / 900) * quantity).toPrecision(2)}g carbs){" "}
        </h3>
      </div>
    </div>
  );
}
