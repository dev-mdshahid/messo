"use client";

import React, { useState } from "react";
import InfoSelectCard from "./InfoSelectCard/InfoSelectCard";
import InfoSelectList from "./InfoSelectList/InfoSelectList";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

type InfoSelectProps = {
  options: {
    [key: string]: any;
  }[];
  data: {
    [key: string]: any;
  };
  setData: (value: { [key: string]: any }) => void;
  step: number;
  setStep: (value: number) => void;
  variant?: "card" | "list";
  type?: "single" | "multi";
  questionId: string;
};

export default function InfoSelect({
  data,
  setData,
  step,
  setStep,
  variant,
  type,
  options,
  questionId,
}: InfoSelectProps) {
  const [multiList, setMultiList] = useState<string[]>([]);
  console.log(multiList);

  const handleSelect = (value: string) => {
    if (type === "multi" && !multiList.includes(value)) {
      setMultiList([...multiList, value]);
    } else if (type === "multi" && multiList.includes(value)) {
      let updatedList = [...multiList];
      updatedList = updatedList.filter((element) => element != value);
      setMultiList(updatedList);
    } else {
      const updatedData = { ...data, [questionId]: value };
      setData(updatedData);
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    if (multiList.length > 0) {
      const updatedData = { ...data, [questionId]: multiList };
      setData(updatedData);
      setStep(step + 1);
    } else {
      toast({
        title: "Please select at least 1 option.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div
        className={
          "mt-12 flex justify-center " +
          (variant === "list" ? "mt-8 flex-col gap-4" : "gap-6")
        }
      >
        {/* Printing all the options */}
        {options.map((option) => (
          <div key={option.value} onClick={() => handleSelect(option.value)}>
            {variant === "list" ? (
              <InfoSelectList type={type} option={option} />
            ) : (
              <InfoSelectCard option={option} />
            )}
          </div>
        ))}
      </div>
      {type === "multi" ? (
        <Button
          className="mt-6 w-full bg-messo-900 hover:bg-messo-800"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      ) : (
        ""
      )}
    </>
  );
}
