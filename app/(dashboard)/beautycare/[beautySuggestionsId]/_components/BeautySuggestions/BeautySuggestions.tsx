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
        <div className="mb-7 space-y-5 ">
          <h1 className="mt-5 px-5 text-center text-xl font-bold text-messo-900 sm:text-2xl md:text-3xl">
            Hooray! We&apos;ve got it figured out!
          </h1>

          <p className="mx-auto w-4/5 text-center text-sm leading-relaxed text-gray-600">
            Here are the thoughtfully selected solutions we&apos;ve discovered
            to address your specific concerns.{" "}
            <span className="hidden lg:inline">
              Each remedy has been carefully chosen to enhance your beauty care
              routine. Ensuring easy integration into your daily regimen for
              visible results.
            </span>
          </p>
        </div>

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
