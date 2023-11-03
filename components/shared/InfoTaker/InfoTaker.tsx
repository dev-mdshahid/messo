"use client";
import React, { useState } from "react";
import { dietQuestions } from "@/data/questionnaires";
import InfoInputField from "./InfoInputField/InfoInputField";
import InfoSelect from "./InfoSelect/InfoSelect";
import DietPlan from "@/app/(dashboard)/diet/[dietChartId]/_components/DietPlan/DietPlan";
import ExercisePlan from "@/app/(dashboard)/exercise/[exercisePlanId]/_components/ExercisePlan/ExercisePlan";
import BeautySuggestions from "@/app/(dashboard)/beautycare/[beautySuggestionsId]/_components/BeautySuggestions/BeautySuggestions";

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

  // Selecting question set
  let questions = dietQuestions;

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
      <ExercisePlan data={data} />
    ) : variant === "beauty" ? (
      <BeautySuggestions data={data} />
    ) : (
      <DietPlan data={data} />
    )
  ) : (
    <section className="mx-auto flex h-full w-full max-w-[800px] justify-center">
      <div className="mt-20">
        {/* Question */}
        <h1 className="mb-2 text-center text-3xl font-semibold leading-relaxed text-messo-900">
          {question.question}
        </h1>
        <p className="mx-auto px-6 text-center text-[15px] text-gray-600">
          {question.description}
        </p>
        {QuestionComponent}
      </div>
    </section>
  );
}
