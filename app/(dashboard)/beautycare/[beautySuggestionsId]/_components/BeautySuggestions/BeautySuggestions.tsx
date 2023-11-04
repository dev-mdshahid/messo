"use client";
import React from "react";
import SuggestionsContainer from "./SuggestionsContainer/SuggestionsContainer";
import BeautyProducts from "./BeautyProducts/BeautyProducts";
import BeautyIngredients from "./BeautyIngredients/BeautyIngredients";
import { useBeautySuggestions } from "@/hooks/useBeautySuggestions";
import { BeautyCollectedDataType } from "@/lib/type";

type BeautySuggestionsProps = {
  data?: BeautyCollectedDataType;
  id?: string;
};

export default function BeautySuggestions({
  data,
  id,
}: BeautySuggestionsProps) {
  const { selectedIngredients, selectedProducts, selectedSuggestions } =
    useBeautySuggestions(data ?? {});
  console.log(selectedProducts);

  return (
    <div className="mx-auto flex max-w-[900px] justify-center">
      <div>
        <h1 className="mb-7 mt-10 text-center text-4xl font-semibold text-messo-900">
          Here is your suggestions
        </h1>

        {/* Ingredients */}

        <BeautyIngredients ingredients={selectedIngredients} />

        {/* Recommended products */}
        {data ? <BeautyProducts data={data} products={selectedProducts} /> : ""}

        {/* Suggestions */}

        <SuggestionsContainer suggestion={selectedSuggestions} />
      </div>
    </div>
  );
}
