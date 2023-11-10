import PlanListContainer from "@/components/shared/PlanListContainer/PlanListContainer";
import { Button } from "@/components/ui/button";
import { sampleDietChart } from "@/data/diet/dietPlan";
import Link from "next/link";
import React from "react";

export default function DietPage() {
  return (
    <div>
      <PlanListContainer
        creatable
        variant="diet"
        title="Your diet charts"
        planList={[sampleDietChart]}
      />
    </div>
  );
}
