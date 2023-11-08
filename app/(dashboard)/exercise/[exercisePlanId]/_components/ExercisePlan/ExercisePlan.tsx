"use client";
import React, { useState } from "react";
import ExerciseContainer from "./ExerciseContainer/ExerciseContainer";
import { ExercisePlanType } from "@/lib/type";
import ExercisePlanSummary from "./ExercisePlanSummary/ExercisePlanSummary";

type ExercisePlanProps = {
  planData: ExercisePlanType;
};

export default function ExercisePlan({ planData }: ExercisePlanProps) {
  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <div className="mb-7">
        <h1 className="mb-2 mt-5 text-center text-xl font-bold text-messo-900 sm:mb-5 sm:mt-10 sm:text-3xl">
          Here is your exercise plan
        </h1>

        <p className="mx-auto w-4/5 text-center text-sm leading-relaxed sm:text-sm">
          Developing a well-rounded physique includes giving due attention to
          your back and shoulders.{" "}
          <span className="hidden sm:inline">
            To help you achieve your fitness goals, here&apos;s a comprehensive
            list of exercises specifically designed to enhance and strengthen
            these crucial muscle groups.
          </span>
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
        <ExerciseContainer planData={planData} />
        <section className="hidden lg:block">
          <ExercisePlanSummary planData={planData} />
        </section>
      </div>
    </div>
  );
}
