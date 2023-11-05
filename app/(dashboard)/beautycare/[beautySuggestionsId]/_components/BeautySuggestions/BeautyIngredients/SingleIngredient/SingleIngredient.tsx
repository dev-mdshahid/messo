import { bgColorList, textColorList } from "@/helpers/getColorList";
import { getRandom } from "@/helpers/getRandom";
import React from "react";
import colors from "tailwindcss/colors";

type SingleIngredientProps = {
  ingredient?: string;
  purpose?: string;
  description: string;
  serial: number;
};

export default function SingleIngredient({
  ingredient,
  purpose,
  description,
  serial,
}: SingleIngredientProps) {
  const descriptionSentences = description.split(".");

  return (
    <div
      style={{
        backgroundColor: bgColorList[serial - 1],
      }}
      className="rounded-xl bg-messo-50 p-5 px-6"
    >
      <h3
        style={{
          color: textColorList[serial - 1],
        }}
        className="mb-2 text-lg font-semibold text-messo-800"
      >
        {serial}. {ingredient ? ingredient : purpose}
      </h3>
      <div className="text-sm leading-relaxed text-gray-600">
        {description}
        {/* {descriptionSentences.map((sentence, index) => (
          <p key={index} className="inline">
            {sentence ? sentence : ""}.{" "}
            {index % 2 === 1 ? (
              <div>
                <br />
              </div>
            ) : (
              ""
            )}
          </p>
        ))} */}
      </div>
    </div>
  );
}
