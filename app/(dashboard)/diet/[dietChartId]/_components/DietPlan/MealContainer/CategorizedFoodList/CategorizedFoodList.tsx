"use client";
import { FoodType } from "@/lib/type";
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

export type CategorizedFoodListProps = {
  category:
    | "liquid"
    | "carbohydrate"
    | "protein"
    | "veg_protein"
    | "fat"
    | "vegetables"
    | "fruits";
  foodList: FoodType[];
};

export default function CategorizedFoodList({
  category,
  foodList,
}: CategorizedFoodListProps) {
  const [editable, setEditable] = useState(false);
  const color =
    category === "carbohydrate"
      ? "orange"
      : category === "protein"
      ? "red"
      : category === "fat"
      ? "yellow"
      : category === "vegetables"
      ? "green"
      : category === "veg_protein"
      ? "lime"
      : category === "fruits"
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
          {category}
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
        {foodList?.map((food, index) => {
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
          return (
            <FoodPreviewCard
              key={food.id}
              index={index}
              food={result}
              quantity={200}
              color={color}
            />
          );
        })}

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
              <AddFoodModal category={category} />
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </div>
  );
}
