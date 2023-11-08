import { ColorType, ExercisePlanType } from "@/lib/type";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import SummaryPropertyValue from "./SummaryPropertyValue/SummaryPropertyValue";

type ExercisePlanSummaryProps = {
  planData: ExercisePlanType;
};

export default function ExercisePlanSummary({
  planData,
}: ExercisePlanSummaryProps) {
  const { target, level, duration, img, workouts } = planData;
  return (
    <div className="h-fit min-w-[280px] max-w-[500px] rounded-xl border border-messo-100 bg-white">
      <h3 className="px-6 py-4 text-center text-lg font-bold text-messo-900">
        Plan Summary
      </h3>

      <div className="h-px w-full bg-messo-900 opacity-20"></div>

      <div className="space-y-3 p-5">
        <SummaryPropertyValue
          key={1}
          property="target"
          value={target}
          icon={<TbTargetArrow />}
        />
        <SummaryPropertyValue
          key={2}
          property="level"
          value={
            level === 1 ? "beginner" : level === 2 ? "intermediate" : "advanced"
          }
          icon={<VscGraph />}
          color={level === 1 ? "green" : level === 2 ? "orange" : "red"}
        />
        <SummaryPropertyValue
          key={3}
          property="Total exercises"
          value={workouts.length}
          icon={<GiBiceps />}
          color="sky"
        />
        <SummaryPropertyValue
          key={4}
          property="Duration"
          value={duration + " minutes"}
          icon={<BsClockHistory />}
          color="purple"
        />
      </div>
    </div>
  );
}
