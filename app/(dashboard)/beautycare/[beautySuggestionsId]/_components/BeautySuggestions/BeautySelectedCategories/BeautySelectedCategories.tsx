import { beautyQuestions } from "@/data/question-sets/beautyQuestions";
import { BeautyCollectedDataType } from "@/lib/type";
import React from "react";
import SeletectedCategoryCard from "./SelectedCategoryCard/SeletectedCategoryCard";
import { TbLayoutGrid } from "react-icons/tb";

type BeautySelectedCategoriesProps = {
  data: BeautyCollectedDataType;
};

export default function BeautySelectedCategories({
  data,
}: BeautySelectedCategoriesProps) {
  // Getting the selected options data
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);

  const selectedOptions = dataKeys.map(
    (key, index) =>
      beautyQuestions
        .filter((ques) => ques.id === key)[0]
        .options.filter((opt) => opt.value === dataValues[index])[0],
  );

  return (
    <section className="rounded-xl bg-white">
      <h2 className="flex items-center gap-2 p-5 pb-3 text-lg font-bold text-blue-900 sm:text-xl">
        <TbLayoutGrid className="text-2xl" /> Selected Categories
      </h2>
      <div className="h-px w-full bg-blue-900 opacity-20"></div>
      <div className="mb-5 grid w-full grid-cols-1 flex-wrap justify-center gap-5 rounded-xl p-4 sm:grid-cols-2 lg:flex">
        {selectedOptions.map((option, index) => (
          <SeletectedCategoryCard
            key={index}
            option={option}
            index={index}
            dataKeys={dataKeys}
          />
        ))}
      </div>
    </section>
  );
}
