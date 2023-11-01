"use client";
import React from "react";

type DietPlanProps = {
  data?: {
    [key: string]: any;
  };
};

export default function DietPlan({ data }: DietPlanProps) {
  console.log(data);
  return <div>DietPlan</div>;
}
