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
import { ColorType, FoodType } from "@/lib/type";
import Image from "next/image";
import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import colors from "tailwindcss/colors";
import FoodDetailCard from "../FoodDetailCard/FoodDetailCard";

type FoodPreviewCardProps = {
  food: FoodType;
  quantity: number;
  index: number;
  color?: ColorType;
};

export default function FoodPreviewCard({
  food,
  quantity,
  index,
  color,
}: FoodPreviewCardProps) {
  const { name, img, category, description, calories, nutrition } = food;
  const { protein, fat, carbs } = nutrition;
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
          className="no-scrollbar flex cursor-pointer items-center gap-3 overflow-x-auto rounded-xl bg-messo-50 p-3 text-left hover:shadow-lg"
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
          <Image
            src={img}
            alt={name}
            height={48}
            width={48}
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
              {/* <span className="rounded bg-orange-100  px-2 py-px font-medium text-orange-800">
            {calories} cal
          </span> */}
              <span className="flex items-center gap-1 whitespace-nowrap rounded-xl bg-green-100  px-2 py-px font-medium text-green-800">
                <span className="block h-1.5 w-1.5 rounded-full bg-green-600"></span>
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
                >
                  <BsTextParagraph size={30} />
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
            {name} ({category})
          </DialogTitle>
        </DialogHeader>
        <FoodDetailCard data={food} />
      </DialogContent>
    </Dialog>
  );
}
