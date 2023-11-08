import React from "react";
import ExercisePreviewCard from "./ExercisePreviewCard/ExercisePreviewCard";
import { ExercisePlanType } from "@/lib/type";
import { exerciseData } from "@/data/exerciseData";
import { BsJournalBookmarkFill } from "react-icons/bs";

type ExerciseContainerProps = {
  planData: ExercisePlanType;
};

export default function ExerciseContainer({
  planData,
}: ExerciseContainerProps) {
  const { id, title, target, level, duration, img, workouts } = planData;
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-xl border border-messo-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-base font-bold capitalize text-blue-900 sm:text-xl">
          <BsJournalBookmarkFill className="text-2xl" /> {title}
        </h2>
        <div className="h-px w-full bg-messo-900 opacity-20"></div>
        <div className="grid gap-3 p-3 sm:gap-4 sm:p-5">
          {workouts?.map((exercise, index) => {
            const result = exerciseData?.find(
              (element) => element.id.trim() === exercise.id.trim(),
            );
            if (result) {
              return (
                <ExercisePreviewCard
                  key={exercise.id}
                  rep={exercise.rep}
                  howLong={exercise.howLong}
                  exercise={result}
                  index={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
