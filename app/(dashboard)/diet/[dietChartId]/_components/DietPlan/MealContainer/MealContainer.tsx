import React from "react";
import FoodPreviewCard from "./FoodPreviewCard/FoodPreviewCard";
import { BiFoodMenu } from "react-icons/bi";

type MealContainerProps = {
  title: string;
  foods: {
    id: string;
    quantity: number;
  }[];
  calories: number;
  time: string;
};

export default function MealContainer({
  title,
  foods,
  calories,
  time,
}: MealContainerProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-messo-100 bg-white">
      <h2 className="flex items-center gap-2 p-5 pb-3 text-lg font-bold capitalize text-blue-900 sm:text-xl">
        <BiFoodMenu className="text-2xl" /> {title}
      </h2>
      <div className="h-px w-full bg-messo-900 opacity-20"></div>
      <div className="m-3 rounded-xl bg-orange-50 p-5 text-orange-900">
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Time: </h1>
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Calories Reserved: </h1>
          <span>{calories} cal</span>
        </div>
        <div className="flex items-center gap-2 pb-1">
          <h1 className="font-semibold">Total Food Count: </h1>
          <span>{foods?.length}</span>
        </div>
      </div>
      <div className="h-px w-full bg-blue-900 opacity-20"></div>
      <h1 className="pl-5 pt-4 text-lg font-semibold text-messo-900 sm:text-xl">
        Recommended Foods
      </h1>
      <div className="grid gap-3 p-3 pt-3 sm:p-5">
        {foods?.map((food, index) => {
          // const result = allFoods.find(
          //   (element) => element.id.trim() === food.id.trim(),
          // );
          const result = {
            _id: "637905f8de7d558975f15b6f",
            id: "lp-9",
            category: "lean protein",
            name: "Shrimp",
            img: "https://i.pinimg.com/736x/ae/05/d0/ae05d0809792f85abbc3c4094a98997b.jpg",
            description:
              "Because they're low in carbs and calories and packed with nutrients, shrimp are an ideal choice if you're trying to shed some pounds. \nBut be careful how you cook it. If you prepare shrimp in a deep fryer or add it to a creamy sauce, you end up tipping the scale in the wrong direction.\n\nThe antioxidants in shrimp are good for your health. These substances can protect your cells against damage. Studies suggest that the antioxidant astaxanthin helps prevent wrinkles and lessens sun damage.",
            calories: 99,
            nutrition: {
              protein: 24,
              fat: 0.3,
              carbs: 0.2,
            },
            type: "non_vegetarian",
          };
          console.log(food);
          return (
            <FoodPreviewCard
              key={food.id}
              index={index}
              food={result}
              quantity={food.quantity}
              color="yellow"
            />
          );
        })}
      </div>
    </div>
  );
}
