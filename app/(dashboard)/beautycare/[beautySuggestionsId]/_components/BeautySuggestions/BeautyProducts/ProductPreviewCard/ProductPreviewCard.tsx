import { beautyQuestions } from "@/data/question-sets/beautyQuestions";
import { getColorList } from "@/helpers/getColorList";
import { BeautyCollectedDataType } from "@/lib/type";
import React from "react";

type ProductPreviewCardProps = {
  name: string;
  img: string;
  index: number;
  data: BeautyCollectedDataType;
};

export default function ProductPreviewCard({
  name,
  img,
  index,
  data,
}: ProductPreviewCardProps) {
  const bgColorList = getColorList(50);
  const borderColorList = getColorList(200);
  const bgDeepColorList = getColorList(200);
  const textColorList = getColorList(800);
  const {
    problemSource,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  } = data;

  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);

  const selectedOptions = dataKeys.map(
    (key, index) =>
      beautyQuestions
        .filter((ques) => ques.id === key)[0]
        .options.filter((opt) => opt.value === dataValues[index])[0],
  );

  return (
    <a
      style={{
        backgroundColor: bgColorList[index % 15],
      }}
      href={`https://www.google.com/search?q=${name.split(" ").join("+")}`}
      target="_blank"
      rel="noreferrer"
      className="grid w-full gap-2 rounded-xl bg-yellow-50 p-4 hover:shadow "
    >
      <img
        style={{
          border: `1px solid ${borderColorList[index % 15]}`,
        }}
        src={img}
        alt={name + " photo"}
        className=" w-full rounded-xl border border-yellow-200"
      />

      <div className="flex flex-col justify-between p-2 text-center  ">
        <h3
          style={{
            color: textColorList[index % 15],
          }}
          className="font-semibold text-messo-900"
        >
          {name}
        </h3>
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
          {selectedOptions.map((option) => (
            <div
              style={{
                backgroundColor: bgDeepColorList[index % 15],
                color: textColorList[index % 15],
              }}
              key={option.text}
              className="rounded-xl bg-yellow-300 px-3 py-1 font-medium "
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
