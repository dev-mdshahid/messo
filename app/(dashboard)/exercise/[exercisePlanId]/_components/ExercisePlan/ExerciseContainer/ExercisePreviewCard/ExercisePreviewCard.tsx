import React from "react";
import { IoVideocam } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { ExerciseType } from "../ExerciseContainer";
import Image from "next/image";

type ExercisePreviewCardProps = {
  exercise: ExerciseType;
  index: number;
};

export default function ExercisePreviewCard({
  exercise,
  index,
}: ExercisePreviewCardProps) {
  const {
    name,
    description,
    set,
    rep,
    time,
    health_complication,
    img,
    video,
    target,
    part,
  } = exercise;
  return (
    <div className="m-3 mb-1 flex w-[700px] cursor-pointer items-center justify-between gap-4 rounded-lg border bg-white p-2 transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        <h1 className="pl-1 text-2xl text-messo-900 opacity-70">{index + 1}</h1>
        <Image
          src={img}
          alt={name}
          width={60}
          height={60}
          className=" w-[60px] rounded-lg"
        />
        <div className="col-span-3 text-gray-600">
          <h3 className="text-lg font-semibold text-messo-900">
            {name} <span className="text-xs text-gray-500">({part[0]})</span>
          </h3>
          <div className="mb-2 mt-1.5 flex gap-4 text-sm">
            <p className="">
              <span className="font-semibold">Sets:</span> {set}
            </p>
            <p className="">
              <span className="font-semibold">Reps:</span> {rep}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Time:</span> {time}s
            </p>
          </div>
          {/* <p className="font-bold text-messo-900">Details: </p> */}
        </div>
      </div>
      <div className="child:whitespace-nowrap flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg bg-messo-100 px-2 py-1 text-messo-500 transition hover:scale-105">
          <RiMessage3Fill />
          <span className="text-sm font-semibold">See details</span>
        </div>
        <a
          href={video}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg bg-messo-100 px-2 py-1 text-messo-500 transition hover:scale-105"
        >
          <IoVideocam />
          <span className="text-sm font-semibold">Watch video</span>
        </a>
      </div>
    </div>
  );
}
