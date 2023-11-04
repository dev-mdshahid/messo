import React from "react";
import DietPlan from "./_components/DietPlan/DietPlan";

export default function DietChartPage({
  params,
}: {
  params: { dietChartId: string };
}) {
  const dietChartId = params.dietChartId;
  return <DietPlan id={dietChartId} />;
}
