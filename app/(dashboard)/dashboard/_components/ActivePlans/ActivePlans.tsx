import React from "react";
import PlanCard from "./PlanCard/PlanCard";

export default function ActivePlans() {
  return (
    <div className="mt-12 whitespace-nowrap">
      <h2 className="pb-6 text-xl font-bold text-blue-900">Active Plans</h2>

      <div className="grid grid-cols-1 gap-5 transition md:grid-cols-2 xl:grid-cols-3 ">
        {/* Single plan UI */}
        <PlanCard
          name="Exercise Plan"
          startDate="28/10/2023"
          quantity={17}
          days={20}
          type="exercise"
        />
        <PlanCard
          name="Diet & Nutrition Plan"
          startDate="28/10/2023"
          quantity={2000}
          days={20}
          type="diet"
        />
        <PlanCard
          name="Lose weight plan"
          startDate="28/10/2023"
          quantity={1150}
          days={20}
          type="diet"
        />
      </div>
    </div>
  );
}
