import React from "react";
import ExercisePlanListContainer from "./_components/ExercisePlanListConainer/ExercisePlanListContainer";
import { exercisePlans } from "@/data/exercisePlans";
import colors from "tailwindcss/colors";

export default function ExercisePage() {
  return (
    <main>
      <ExercisePlanListContainer
        key={1}
        creatable
        title="Your Exercise Plans"
        planList={exercisePlans}
      />
      <ExercisePlanListContainer
        key={2}
        title="Featured Beginner plans"
        planList={exercisePlans}
      />
      <ExercisePlanListContainer
        key={3}
        title="Featured Intermediate plans"
        planList={exercisePlans}
      />
      <ExercisePlanListContainer
        key={4}
        title="Featured Advanced plans"
        planList={exercisePlans}
      />
    </main>
  );
}
