import React from "react";
import DietPlan from "./_components/DietPlan/DietPlan";
import DietPlanProvider from "../_context/dietPlan/DietPlanProvider";

export default function DietChartPage({
  params,
}: {
  params: { dietChartId: string };
}) {
  const dietChartId = params.dietChartId;
  return (
    <DietPlanProvider>
      <DietPlan id={dietChartId} />
    </DietPlanProvider>
  );
}
