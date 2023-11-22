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
import { ColorType, DietPlanType, FoodType, MealTimeType } from "@/lib/type";
import React, { useState } from "react";
import { BsTextParagraph } from "react-icons/bs";
import colors from "tailwindcss/colors";
import FoodDetailCard from "../FoodDetailCard/FoodDetailCard";
import { TbCheck, TbPlus } from "react-icons/tb";
import {
  DietplanContextType,
  useDietPlan,
} from "@/app/(dashboard)/diet/_context/dietPlan/DietPlanProvider";
import { dietPlanActionTypes } from "@/app/(dashboard)/diet/_state/dietPlan/dietPlanActionTypes";

type FoodPreviewCardByDataProps = {
  data: FoodType;
  quantity?: number;
  index: number;
  color?: ColorType;
  addable?: boolean;
  mealTime: MealTimeType;
  foodList: { id: string; quantity: number }[];
};

export default function FoodPreviewCardByData({
  data,
  quantity,
  index,
  color,
  addable,
  mealTime,
  foodList,
}: FoodPreviewCardByDataProps) {
  const context = useDietPlan();
  const { dietPlanState, dietPlanDispatch } = context as DietplanContextType;

  const [added, setAdded] = useState(false);
  const {
    id,
    name,
    category,
    img,
    description,
    calories,
    nutrition: { protein, fat, carbs },
  } = data;

  quantity = quantity ?? 100;

  const handleFoodAdd = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dietPlanDispatch({
      type: dietPlanActionTypes.ADD_NEW_FOOD,
      payload: {
        plan: {} as DietPlanType,
        newFood: {
          id,
          mealTime,
          category,
        },
      },
    });
    console.log(dietPlanState.data);
    setAdded(true);
  };

  return (
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
          <img src={img} alt={name} className="w-12 rounded-full" />
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
              {name}{" "}
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
                ({quantity} g - {calories} cal)
              </span>
            </h1>
            <h3 className="mt-1 flex items-center gap-2 text-xs text-gray-600">
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-orange-100  px-2 py-px font-medium text-orange-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                C : {((carbs / 900) * quantity).toFixed(2)}g
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-red-100  px-2 py-px font-medium text-red-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                P : {((protein / 400) * quantity).toFixed(2)}g
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-yellow-100  px-2 py-px font-medium text-yellow-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
                F : {((fat / 900) * quantity).toFixed(2)}g
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
                >
                  {addable ? (
                    added ? (
                      <TbCheck size={30} />
                    ) : (
                      <TbPlus size={30} onClick={handleFoodAdd} />
                    )
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
                  {" "}
                  {addable ? "Add this food" : "See details"}
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="no-scrollbar max-h-[100dvh] overflow-y-auto sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle>
            {name} ({category})
          </DialogTitle>
        </DialogHeader>
        <FoodDetailCard data={data} />
      </DialogContent>
    </Dialog>
  );
}
