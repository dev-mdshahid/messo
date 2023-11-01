import InfoTaker from "@/components/shared/InfoTaker/InfoTaker";
import React from "react";
import { dietQuestions } from "@/data/questionnaires";
import DietPlan from "./_components/DietPlan/DietPlan";

export default function CreateDietPage() {
  return (
    <div>
      <InfoTaker variant="diet" />
    </div>
  );
}
