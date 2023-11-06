import { IngredientsType } from "@/lib/type";
import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";
import SingleIngredient from "./SingleIngredient/SingleIngredient";
import { BiSelectMultiple } from "react-icons/bi";

type BeautyIngredientsProps = {
  ingredients?: IngredientsType;
};

export default function BeautyIngredients({
  ingredients,
}: BeautyIngredientsProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-lg font-bold text-blue-900 md:text-xl">
          <BiSelectMultiple className="text-2xl" /> Ingredients to look for
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        {ingredients ? (
          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
            {ingredients.ingredients.map((ingredient, index) => (
              <SingleIngredient
                key={index}
                serial={index + 1}
                {...ingredient}
              />
            ))}
            {/* {ingredients?.ingredients.split("*").map((line, index) => (
              <p key={index}>
                {line}
                <br />
                <br />
              </p>
            ))} */}
          </div>
        ) : (
          <p className="p-5 text-red-500">
            Sorry! No ingredient could be recommended! Consult with your
            dermatologist please!
          </p>
        )}
      </div>
    </div>
  );
}
