"use client";
import React from "react";
import SuggestionsContainer from "./SuggestionsContainer/SuggestionsContainer";
import BeautyProducts from "./BeautyProducts/BeautyProducts";
import BeautyIngredients from "./BeautyIngredients/BeautyIngredients";
import { useBeautySuggestions } from "@/hooks/useBeautySuggestions";
import { BeautyCollectedDataType } from "@/lib/type";
import BeautySelectedCategories from "./BeautySelectedCategories/BeautySelectedCategories";

type BeautySuggestionsProps = {
  data: BeautyCollectedDataType;
  id?: string;
};

export default function BeautySuggestions({
  data,
  id,
}: BeautySuggestionsProps) {
  const { selectedIngredients, selectedProducts, selectedSuggestions } =
    useBeautySuggestions(data);

  // console.log(
  //   beautyQuestions
  //     .filter((ques) => ques.id === "faceConcern")[0]
  //     .options.filter((opt) => opt.value === "acneIssue")[0],
  // );

  return (
    <div className="mx-auto flex w-full max-w-[1200px] justify-center">
      <div>
        <h1 className="mb-7 mt-10 text-center text-4xl font-semibold text-messo-900">
          Gotcha! Here is the solution!
        </h1>

        {/* Selected categories */}
        <BeautySelectedCategories data={data} />

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
