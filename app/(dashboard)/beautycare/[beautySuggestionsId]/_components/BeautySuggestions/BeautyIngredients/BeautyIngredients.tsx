import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";

type BeautyIngredientsProps = {
  ingredients: {
    [key: string]: any;
    ingredients: string;
  };
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
        <p className="p-5">
          {ingredients?.ingredients.split("*").map((line, index) => (
            <p key={index}>
              {line}
              <br />
              <br />
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}
