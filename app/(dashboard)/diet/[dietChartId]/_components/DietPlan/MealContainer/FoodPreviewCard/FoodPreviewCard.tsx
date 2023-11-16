import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ColorType, FoodType, MealTimeType } from "@/lib/type";
import React, { useState } from "react";
import { BsTextParagraph } from "react-icons/bs";
import colors from "tailwindcss/colors";
import FoodDetailCard from "../FoodDetailCard/FoodDetailCard";
import { TbPlus } from "react-icons/tb";
import { useGetSingleFood } from "@/hooks/useGetSingleFood";
import FoodPreviewCardSkeleton from "./FoodPreviewCardSkeleton";
import { MdOutlineNoFood } from "react-icons/md";

type FoodPreviewCardProps = {
  id: string;
  quantity?: number;
  index: number;
  color?: ColorType;
  addable?: boolean;
  mealTime: MealTimeType;
  foods: { id: string; quantity: number }[];
  setFoods: (newFood: { id: string; quantity: number }[]) => void;
};

export default function FoodPreviewCard({
  id,
  quantity,
  index,
  color,
  addable,
  mealTime,
  foods,
  setFoods,
}: FoodPreviewCardProps) {
  const { data, status } = useGetSingleFood(id);
  // const food = {
  //   _id: "637905f8de7d558975f15b6f",
  //   id: "lp-9",
  //   category: "lean protein",
  //   name: "Shrimp",
  //   img: "https://i.pinimg.com/736x/ae/05/d0/ae05d0809792f85abbc3c4094a98997b.jpg",
  //   description:
  //     "Because they're low in carbs and calories and packed with nutrients, shrimp are an ideal choice if you're trying to shed some pounds. \nBut be careful how you cook it. If you prepare shrimp in a deep fryer or add it to a creamy sauce, you end up tipping the scale in the wrong direction.\n\nThe antioxidants in shrimp are good for your health. These substances can protect your cells against damage. Studies suggest that the antioxidant astaxanthin helps prevent wrinkles and lessens sun damage.",
  //   calories: 99,
  //   nutrition: {
  //     protein: 24,
  //     fat: 0.3,
  //     carbs: 0.2,
  //   },
  //   type: "non_vegetarian",
  // };

  let foodData;
  if (data && status === "success") {
    const {
      name,
      category,
      img,
      description,
      calories,
      nutrition: { protein, fat, carbs },
    } = data.food;

    foodData = {
      category,
      name,
      img,
      description,
      calories,
      nutrition: {
        protein,
        fat,
        carbs,
      },
    };
  }
  quantity = quantity ?? 100;

  const handleFoodAdd = () => {
    // setFoods([...foods, { id: id, quantity: 100 }]);
  };

  return foodData && data && status === "success" ? (
    <Dialog>
      <DialogTrigger>
        <div
          style={
            color
              ? {
                  backgroundColor: colors[color][50],
                }
              : {}
          }
          className={
            "no-scrollbar flex cursor-pointer items-center gap-3 overflow-x-auto rounded-xl bg-messo-50 p-3 text-left hover:shadow-lg " +
            (addable ? "border border-messo-50 bg-white" : "")
          }
        >
          <h1
            style={
              color
                ? {
                    color: colors[color][900],
                  }
                : {}
            }
            className="pl-1 text-2xl text-messo-900 opacity-70"
          >
            {index + 1}
          </h1>
          <img
            src={foodData.img}
            alt={foodData.name}
            className="w-12 rounded-full"
          />
          <div>
            <h1
              style={
                color
                  ? {
                      color: colors[color][900],
                    }
                  : {}
              }
              className="text-medium font-semibold"
            >
              {foodData.name}{" "}
              <span
                style={
                  color
                    ? {
                        color: colors[color][900],
                      }
                    : {}
                }
                className="text-sm font-medium text-messo-900"
              >
                ({quantity} g - {foodData.calories} cal)
              </span>
            </h1>
            <h3 className="mt-1 flex items-center gap-2 text-xs text-gray-600">
              {/* <span className="rounded bg-orange-100  px-2 py-px font-medium text-orange-800">
            {calories} cal
          </span> */}
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-orange-100  px-2 py-px font-medium text-orange-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                C : {((foodData.nutrition.carbs / 900) * quantity).toFixed(2)}g
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-red-100  px-2 py-px font-medium text-red-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                P : {((foodData.nutrition.protein / 400) * quantity).toFixed(2)}
                g
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-yellow-100  px-2 py-px font-medium text-yellow-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
                F : {((foodData.nutrition.fat / 900) * quantity).toFixed(2)}g
              </span>
              {/* <span className="whitespace-nowrap rounded-xl  bg-red-100  px-2 py-px font-medium text-red-800">
            {((protein / 400) * quantity).toFixed(2)}g protein
          </span> */}
              {/* <span className="whitespace-nowrap rounded-xl  bg-yellow-100  px-2 py-px font-medium text-yellow-800">
            {((fat / 900) * quantity).toFixed(2)}g fat
          </span> */}
            </h3>
          </div>
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <HoverCard>
              <HoverCardTrigger>
                <div
                  style={
                    color
                      ? {
                          color: colors[color][900],
                        }
                      : {}
                  }
                  className="mr-2 hidden rounded-xl px-2  py-2 text-messo-900 transition hover:scale-105 sm:block"
                  onClick={() => handleFoodAdd()}
                >
                  {addable ? (
                    <TbPlus size={30} />
                  ) : (
                    <BsTextParagraph size={30} />
                  )}
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit py-2">
                <div
                  style={
                    color
                      ? {
                          color: colors[color][900],
                        }
                      : {}
                  }
                  className="text-sm font-medium text-messo-900"
                >
                  See full detail
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="no-scrollbar max-h-[100dvh] overflow-y-auto sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle>
            {foodData.name} ({foodData.category})
          </DialogTitle>
        </DialogHeader>
        <FoodDetailCard data={data.food} />
      </DialogContent>
    </Dialog>
  ) : status === "loading" ? (
    <FoodPreviewCardSkeleton />
  ) : (
    <div className="mt-5 flex flex-col items-center py-10 text-center text-lg font-semibold text-messo-900/60">
      <MdOutlineNoFood className={"mb-2 text-3xl"} />
      <p>Sorry! Couldn&apos;t fetch the food!</p>
    </div>
  );
}
