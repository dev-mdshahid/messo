import React from "react";
import ExercisePreviewCard from "./ExercisePreviewCard/ExercisePreviewCard";

export type ExerciseType = {
  _id: string;
  name: string;
  part: string[];
  rep: number;
  set: number;
  time?: number;
  description: string;
  img: string;
  video: string;
  target: string;
  health_complication: string[];
};

type ExerciseContainerProps = {
  title: string;
  exercises: ExerciseType[];
  level: string;
};

export default function ExerciseContainer({
  title,
  exercises,
  level,
}: ExerciseContainerProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-messo-100 bg-white">
        <h2 className="p-5 pb-3 text-2xl font-semibold text-messo-900">
          {title}
        </h2>
        <div className="h-px w-full bg-messo-900 opacity-20"></div>
        <div className="grid p-2">
          {exercises?.map((exercise, index) => {
            const result = exercises?.find(
              (element) => element?.name.trim() === exercise?.name.trim(),
            );
            if (result) {
              return (
                <ExercisePreviewCard
                  key={exercise._id}
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
