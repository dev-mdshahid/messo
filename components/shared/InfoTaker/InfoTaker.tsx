"use client";
import React, { useState } from "react";
import { dietQuestions } from "@/data/questionnaires";
import DietPlan from "@/app/(dashboard)/diet/create-diet/_components/DietPlan/DietPlan";
import InfoInputField from "./InfoInputField/InfoInputField";
import InfoSelect from "./InfoSelect/InfoSelect";

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

  let questions = dietQuestions;

  const numOfQuestions = questions.length;

  return step > numOfQuestions ? (
    <DietPlan data={data} />
  ) : (
    <section className="flex h-full justify-center">
      <div className="mt-20">
        {/* Question */}
        <h1 className="mb-3 text-center text-4xl font-semibold text-messo-900">
          {questions[step - 1].question}
        </h1>
        <p className="mx-auto px-6 text-center text-gray-600">
          {questions[step - 1].description}
        </p>
        <InfoSelect
          key={questions[step - 1].id}
          questionId={questions[step - 1].id}
          options={questions[step - 1].options}
          // variant="list"
          data={data}
          setData={setData}
          step={step}
          setStep={setStep}
          type="multi"
        />
      </div>
    </section>
  );
}
