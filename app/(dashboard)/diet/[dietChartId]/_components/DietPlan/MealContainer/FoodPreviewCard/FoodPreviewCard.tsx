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
  foodList: { id: string; quantity: number }[];
};

export default function FoodPreviewCard({
  id,
  quantity,
  index,
  color,
  addable,
  mealTime,
}: FoodPreviewCardProps) {
  const { data, status } = useGetSingleFood(id);

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
