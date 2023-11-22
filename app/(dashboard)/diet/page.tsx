"use client";
import PlanListContainer from "@/components/shared/PlanListContainer/PlanListContainer";
import { useGetUser } from "@/context/UserProvider";
import { sampleDietChart } from "@/data/diet/dietPlan";
import React from "react";

export default function DietPage() {
  const { user } = useGetUser();
  const { dietPlans } = user;
  return (
    <main>
      <PlanListContainer
        creatable
        variant="diet"
        title="Your diet charts"
        planList={[...dietPlans]}
      />
    </main>
  );
}
