"use client";
import { FoodCategoryType, FoodType, MealTimeType } from "@/lib/type";
import React, { useState } from "react";
import FoodPreviewCard from "../FoodPreviewCard/FoodPreviewCard";
import { PiGrainsFill } from "react-icons/pi";
import colors from "tailwindcss/colors";
import { TbCheckbox, TbEdit, TbPlus } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import AddFoodModal from "./AddFoodModal/AddFoodModal";
import FoodPreviewCardSkeleton from "../FoodPreviewCard/FoodPreviewCardSkeleton";
import { MdOutlineNoFood } from "react-icons/md";

export type CategorizedFoodListProps = {
  // title:
  //   | "liquid"
  //   | "carbohydrate"
  //   | "protein"
  //   | "vegprotein"
  //   | "fat"
  //   | "vegetables"
  //   | "fruits";
  category: FoodCategoryType;
  foodList: {
    id: string;
    quantity: number;
  }[];
  categorizedFoods: { [key: string]: any };
  setCategorizedFoods: (food: { [key: string]: any }) => void;
  mealTime: MealTimeType;
};

export default function CategorizedFoodList({
  // title,
  foodList,
  category,
  mealTime,
}: CategorizedFoodListProps) {
  const [foods, setFoods] = useState(foodList);
  const [editable, setEditable] = useState(false);
  const color =
    category === "whole_grain"
      ? "orange"
      : category === "lean_protein"
      ? "red"
      : category === "fat"
      ? "yellow"
      : category === "vegetable"
      ? "green"
      : category === "vegetarian_protein"
      ? "lime"
      : category === "fruit"
      ? "emerald"
      : "blue";

  //   Edit handler funciton
  const handleEdit = () => {
    setEditable(!editable);
  };
  return (
    <div
      style={{
        backgroundColor: colors[color][100],
      }}
      className="w-full rounded-lg bg-green-100 p-4"
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2
          style={{
            color: colors[color][900],
          }}
          className=" flex items-center gap-1 text-lg font-bold capitalize text-green-900"
        >
          <PiGrainsFill />
          {category.split("_").join(" ")}
        </h2>
        <button
          onClick={handleEdit}
          style={{
            color: colors[color][900],
          }}
          className="text-2xl opacity-70 hover:opacity-100"
        >
          {editable ? (
            <TbCheckbox title="Save changes" />
          ) : (
            <TbEdit title="Edit foods" />
          )}
        </button>
      </div>

      <div className="grid w-full gap-3">
        {foods.length ? (
          foods?.map(({ id, quantity }, index) => {
            // const result = allFoods.find(
            //   (element) => element.id.trim() === food.id.trim(),
            // );
            return (
              <FoodPreviewCard
                mealTime={mealTime}
                key={id}
                index={index}
                id={id}
                quantity={quantity}
                color={color}
                foods={foods}
                setFoods={setFoods}
              />
            );
          })
        ) : (
          <div
            style={{
              color: colors[color][900],
              opacity: 0.5,
            }}
            className="flex flex-col items-center p-5 text-center font-semibold text-messo-900/60"
          >
            <MdOutlineNoFood className={"mb-2 text-3xl"} />
            <p>No food has been added yet!</p>
          </div>
        )}

        {/* Add food button */}

        {editable ? (
          <Dialog>
            <DialogTrigger>
              <Button
                style={{
                  border: `1px solid ${colors[color][200]}`,
                  backgroundColor: colors[color][50],
                  color: colors[color][900],
                }}
                variant={"outline"}
                className="flex w-full justify-center gap-1"
              >
                <TbPlus size={18} />
                Add new item
              </Button>
            </DialogTrigger>
            <DialogContent className="no-scrollbar max-h-[100dvh] overflow-y-auto sm:max-h-[600px]">
              <DialogTitle>Add new food</DialogTitle>
              <AddFoodModal
                existingFoods={foods}
                setExistingFoods={setFoods}
                category={category}
              />
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </div>
  );
}
