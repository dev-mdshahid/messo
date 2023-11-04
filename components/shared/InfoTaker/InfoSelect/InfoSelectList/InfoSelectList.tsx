"use client";
import React, { useState } from "react";
import Image from "next/image";
import checkMark from "@/public/media/img/icons/check_mark.png";

type InfoSelectListProps = {
  option: {
    [key: string]: any;
  };
  size?: string;
  type?: string;
};

export default function InfoSelectList({
  option,
  size,
  type,
}: InfoSelectListProps) {
  const [selected, setSelected] = useState(false);
  return size === "mini" ? (
    <div
      className={`mx-auto flex w-full max-w-[600px] cursor-pointer select-none items-center justify-between gap-10 rounded-lg border border-messo-50  capitalize text-messo-900 transition hover:border-messo-900/40 hover:bg-messo-100 ${
        selected ? "border-messo-900/40 bg-messo-100" : "bg-white"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex w-full items-center justify-between p-5">
        <div className="flex items-center">
          {option.icon ? (
            <Image
              src={option.icon}
              alt=""
              className="mr-3 h-[35px] w-[35px]"
            />
          ) : (
            ""
          )}

          <h3 className="text-lg font-semibold">{option.text}</h3>
        </div>
        {selected ? (
          <Image src={checkMark} alt="" className=" h-[35px] w-[35px]" />
        ) : type === "multi" ? (
          <span className="mr-2 h-5 w-5 rounded-full border border-messo-900/50 "></span>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <div
      className={`mx-auto flex w-full max-w-[600px] cursor-pointer select-none items-center justify-between gap-10 rounded-lg capitalize transition hover:bg-messo-900 hover:text-white ${
        selected ? "bg-messo-900 text-white" : "bg-white text-messo-900"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center p-5">
        {selected ? (
          <Image src={checkMark} alt="" className="mr-3 h-[35px] w-[35px]" />
        ) : (
          ""
        )}

        <div>
          <h3 className="text-xl font-semibold">{option.text}</h3>
          <p className="pt-1 text-xs">({option.description})</p>
        </div>
      </div>
      {option.icon ? (
        <Image
          src={option.icon}
          alt=""
          className="mr-5 h-[80px] w-[80px] rounded-lg"
        />
      ) : (
        ""
      )}
    </div>
  );
}
