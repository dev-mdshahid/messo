"use client";

import React, { useState } from "react";
import Image from "next/image";
import checkMark from "@/public/media/img/icons/check_mark.png";

type InfoSelectCardProps = {
  option: {
    [key: string]: any;
  };
};

export default function InfoSelectCard({ option }: InfoSelectCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`relative w-fit cursor-pointer select-none rounded-lg p-5 capitalize transition hover:bg-messo-900 hover:text-white md:p-7 ${
        selected ? "bg-messo-900 text-white" : "bg-white text-messo-900"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <Image
        src={option.icon}
        alt=""
        className="mx-auto mb-3 h-[60px] w-[60px] md:h-[80px] md:w-[80px]"
      />
      {selected ? (
        <Image
          src={checkMark}
          alt=""
          className="absolute right-0 top-2 mr-3 h-[35px] w-[35px]"
        />
      ) : (
        ""
      )}
      <h3 className="whitespace-nowrap text-center text-base font-semibold sm:text-lg md:text-2xl">
        {option.text}
      </h3>
      <p className="pt-1 text-center text-xs md:text-sm">
        ({option.description})
      </p>
    </div>
  );
}
