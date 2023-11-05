import { bgColorList, textColorList } from "@/helpers/getColorList";
import React from "react";
import Image from "next/image";

type SeletectedCategoryCardProps = {
  option: {
    text: string;
    icon: any;
    value: string;
    jump: number;
  };
  index: number;
  dataKeys: string[];
};

export default function SeletectedCategoryCard({
  option,
  index,
  dataKeys,
}: SeletectedCategoryCardProps) {
  return (
    <div
      key={index}
      style={{
        backgroundColor: bgColorList[index],
      }}
      className={
        "flex flex-1 items-center gap-3 rounded-xl bg-messo-100 p-3 pl-4 pr-5 shadow transition hover:shadow-lg "
      }
    >
      <Image
        src={option.icon}
        alt={option.text + "photo"}
        className="h-12 w-12"
      />

      <div>
        <h4
          style={{
            color: textColorList[index],
          }}
          className="text-base font-bold capitalize text-blue-900 sm:text-lg"
        >
          {option.text}
        </h4>
        <p className="text-xs capitalize text-gray-500 sm:text-sm">
          {dataKeys[index].match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)?.join(" ")}
        </p>
      </div>
    </div>
  );
}
