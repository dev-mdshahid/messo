import { IngredientsType } from "@/lib/type";
import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";

type BeautyIngredientsProps = {
  ingredients?: IngredientsType;
};

export default function BeautyIngredients({
  ingredients,
}: BeautyIngredientsProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-2xl font-semibold text-blue-900">
          <MdTipsAndUpdates className="text-3xl" /> Ingredients to look for
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        {ingredients ? (
          <div className="p-5">
            {ingredients?.ingredients.split("*").map((line, index) => (
              <p key={index}>
                {line}
                <br />
                <br />
              </p>
            ))}
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
