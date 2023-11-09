"use client";
import React, { useState } from "react";
import { dietQuestions } from "@/data/question-sets/dietQuestions";
import { exerciseQuestions } from "@/data/question-sets/exerciseQuestions";
import { beautyQuestions } from "@/data/question-sets/beautyQuestions";
import InfoInputField from "./InfoInputField/InfoInputField";
import InfoSelect from "./InfoSelect/InfoSelect";
import DietPlan from "@/app/(dashboard)/diet/[dietChartId]/_components/DietPlan/DietPlan";
import ExercisePlan from "@/app/(dashboard)/exercise/[exercisePlanId]/_components/ExercisePlan/ExercisePlan";
import BeautySuggestions from "@/app/(dashboard)/beautycare/[beautySuggestionsId]/_components/BeautySuggestions/BeautySuggestions";
import { ExercisePlanType } from "@/lib/type";

type InfoTakerProps = {
  variant: "diet" | "exercise" | "beauty";
  // questions: {
  //   type: string;
  //   question: string;
  //   id: string;
  //   options: {
  //     [key: string]: any;
  //   }[];
  // }[];
};

export default function InfoTaker({ variant }: InfoTakerProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  console.log(data);

  // Selecting question set
  let questions = dietQuestions;
  if (variant === "exercise") {
    questions = exerciseQuestions;
  } else if (variant === "beauty") {
    questions = beautyQuestions;
  }

  // Length of the question set
  const numOfQuestions = questions.length;

  // Deciding which component to show for the question type
  const question = questions[step - 1];
  let QuestionComponent;
  if (step <= numOfQuestions) {
    // Current question and type
    const [type, inputType, style, size] = question.type.split("-");

    if (type === "input") {
      QuestionComponent = (
        <InfoInputField
          questionId={question.id}
          type={inputType}
          label={question.label ?? ""}
          placeholder={question.placeholder ?? ""}
          min={question.min}
          max={question.max}
          jump={question.jump ?? 1}
          data={data}
          setData={setData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (type === "select") {
      QuestionComponent = (
        <InfoSelect
          key={question.id}
          questionId={question.id}
          options={question.options ?? []}
          type={inputType}
          variant={style}
          size={size}
          data={data}
          setData={setData}
          step={step}
          setStep={setStep}
        />
      );
    }
  }

  return step > numOfQuestions ? (
    variant === "exercise" ? (
      <ExercisePlan planData={data as ExercisePlanType} />
    ) : variant === "beauty" ? (
      <BeautySuggestions data={data} />
    ) : (
      <DietPlan data={data} />
    )
  ) : (
    <section className="mx-auto flex h-full w-full max-w-[800px] justify-center">
      <div className="mt-5 lg:mt-20">
        {/* Question */}
        <h1 className="mb-2 px-2 text-center text-xl font-bold leading-relaxed text-messo-900 sm:text-3xl">
          {question.question}
        </h1>
        <p className="mx-auto px-6 text-center text-sm font-medium leading-relaxed text-gray-600 sm:text-[15px]">
          {question.description}
        </p>
        {QuestionComponent}
      </div>
    </section>
  );
}
