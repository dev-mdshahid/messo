import React from "react";
import { ingredients, products, suggestions } from "@/data/beautyData";
import SuggestionsContainer from "./SuggestionsContainer/SuggestionsContainer";
import BeautyProducts from "./BeautyProducts/BeautyProducts";
import BeautyIngredients from "./BeautyIngredients/BeautyIngredients";

type BeautySuggestionsProps = {
  data?: {
    [key: string]: any;
  };
  id?: string;
};

export default function BeautySuggestions({
  data,
  id,
}: BeautySuggestionsProps) {
  const tempIngredients = ingredients[0];
  const tempSuggestions = suggestions[0];
  const tempProducts = [products[0], products[1]];
  return (
    <div className="mx-auto flex max-w-[900px] justify-center">
      <div>
        <h1 className="mb-7 mt-10 text-center text-4xl font-semibold text-messo-900">
          Here is your suggestions
        </h1>

        {/* Ingredients */}
        {ingredients ? <BeautyIngredients ingredients={tempIngredients} /> : ""}

        {/* Recommended products */}
        <BeautyProducts products={tempProducts} />

        {/* Suggestions */}
        {suggestions ? (
          <SuggestionsContainer suggestion={tempSuggestions} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
