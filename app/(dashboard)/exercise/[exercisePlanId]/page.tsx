import React from "react";
import ExercisePlan from "./_components/ExercisePlan/ExercisePlan";
import { exercisePlans } from "@/data/exercisePlans";

type ExercisePlanPageProps = {
  params: {
    exercisePlanId: string;
  };
};

export default function ExercisePlanPage({ params }: ExercisePlanPageProps) {
  const planId = params.exercisePlanId;
  const planData = exercisePlans.filter((plan) => plan.id === planId)[0];
  return <ExercisePlan planData={planData} />;
}
