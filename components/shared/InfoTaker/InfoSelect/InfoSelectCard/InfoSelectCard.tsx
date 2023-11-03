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
      className={`relative w-fit cursor-pointer select-none rounded-lg  p-7 capitalize transition hover:bg-messo-900 hover:text-white ${
        selected ? "bg-messo-900 text-white" : "bg-white text-messo-900"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <Image
        src={option.icon}
        alt=""
        className="mx-auto mb-3 h-[80px] w-[80px]"
      />
      {selected ? (
        <Image
          src={checkMark}
          alt=""
          className="absolute left-3 top-2 mr-3 h-[35px] w-[35px]"
        />
      ) : (
        ""
      )}
      <h3 className="whitespace-nowrap text-center text-2xl font-semibold">
        {option.text}
      </h3>
      <p className="pt-1 text-center text-sm">({option.description})</p>
    </div>
  );
}
