"use client";
import React from "react";
import InputField from "../../form/InputField";
import { Button } from "@/components/ui/button";

type InfoInputFieldProps = {
  questionId: string;
  label: string;
  placeholder: string;
  type?: string;
  min?: number;
  max?: number;
  data: {
    [key: string]: any;
  };
  setData: (value: { [key: string]: any }) => void;
  step: number;
  setStep: (value: number) => void;
};

export default function InfoInputField({
  questionId,
  label,
  placeholder,
  type,
  min,
  max,
  data,
  setData,
  step,
  setStep,
}: InfoInputFieldProps) {
  // Handler functon
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("button hit");
    const formElement = event.target as HTMLFormElement;
    const value = formElement.info;
    const updatedData = {
      ...data,
      [questionId]: value,
    };
    setData(updatedData);
    setStep(step + 1);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <InputField
        name="info"
        label={label}
        type={type ?? ""}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  );
}
