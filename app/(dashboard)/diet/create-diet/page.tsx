import InfoTaker from "@/components/shared/InfoTaker/InfoTaker";
import React from "react";
import DietPlanProvider from "../_context/dietPlan/DietPlanProvider";

export default function CreateDietPage() {
  return (
    <DietPlanProvider>
      <InfoTaker variant="diet" />
    </DietPlanProvider>
  );
}
