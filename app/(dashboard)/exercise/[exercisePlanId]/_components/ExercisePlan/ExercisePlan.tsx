"use client";
import React, { useState } from "react";
import ExerciseContainer from "./ExerciseContainer/ExerciseContainer";
import { sampleExercisePlan } from "@/data/sampleData";

type ExercisePlanProps = {
  data: {
    [key: string]: any;
  };
};

export default function ExercisePlan({ data }: ExercisePlanProps) {
  const [level, setLevel] = useState("Beginner");

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="mb-7 mt-10 text-center text-4xl font-semibold text-messo-900">
          Here is your exercise plan
        </h1>

        {/* Level choose */}
        <div className="child:cursor-pointer child-hover:hover:bg-messo-900 child-hover:text-white child:transition child:rounded-md child:p-2 child:px-4 mb-7 flex justify-center gap-5 font-semibold ">
          <div
            className={
              "cursor-pointer rounded-md p-2 px-4 transition hover:hover:bg-messo-900 hover:text-white " +
              (level === "Beginner"
                ? "bg-messo-900 text-white"
                : "bg-white text-messo-900")
            }
            onClick={() => setLevel("Beginner")}
          >
            Beginner
          </div>
          <div
            className={
              "cursor-pointer rounded-md p-2 px-4 transition hover:hover:bg-messo-900 hover:text-white " +
              (level === "Intermediate"
                ? "bg-messo-900 text-white"
                : "bg-white text-messo-900")
            }
            onClick={() => setLevel("Intermediate")}
          >
            Intermediate
          </div>
          <div
            className={
              "cursor-pointer rounded-md p-2 px-4 transition hover:hover:bg-messo-900 hover:text-white " +
              (level === "Advanced"
                ? "bg-messo-900 text-white"
                : "bg-white text-messo-900")
            }
            onClick={() => setLevel("Advanced")}
          >
            Advanced
          </div>
        </div>
        <ExerciseContainer
          title={"Exercises"}
          exercises={sampleExercisePlan}
          level={level}
        />
      </div>
    </div>
  );
}
