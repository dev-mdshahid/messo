import { ExercisePlanType } from "@/lib/type";
import React from "react";
import Link from "next/link";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";

type ExercisePlanCardProps = {
  plan: ExercisePlanType;
};

export default function ExercisePlanCard({ plan }: ExercisePlanCardProps) {
  const { id, title, duration, img, level, workouts } = plan;
  const levelIconArray = [];
  for (let i = 0; i < 3; i++) {
    if (i < level) {
      levelIconArray.push(<AiFillThunderbolt className="text-messo-500" />);
    } else {
      levelIconArray.push(<AiOutlineThunderbolt />);
    }
  }
  return (
    <Link
      href={`exercise/${id}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
      className={` h-40 min-w-[280px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat text-white`}
    >
      <div className="flex h-full w-full flex-col justify-center gap-2 bg-messo-800/50 p-5">
        <div className="flex gap-1 text-lg">{levelIconArray}</div>
        <h1 className="text-xl font-bold uppercase ">{title}</h1>
        <p className="uppercase ">
          <span className="font-bold">{duration}</span> minutes -{" "}
          <span className="font-bold">{workouts.length}</span> exercises
        </p>
      </div>
    </Link>
  );
}
