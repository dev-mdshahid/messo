import React from "react";
import { sampleDietChart } from "@/data/sampleData";
import MealContainer from "./MealContainer/MealContainer";
import DietSummary from "./DietSummary/DietSummary";

type DietPlanProps = {
  data?: {
    [key: string]: any;
  };
  id?: string;
};

export default function DietPlan({ data, id }: DietPlanProps) {
  console.log(data);
  return (
    <main>
      <div>
        <div className="flex justify-center">
          <div>
            <h1 className="mb-10 mt-10 text-center text-4xl font-semibold capitalize text-messo-900">
              Here is your diet plan
            </h1>
            <div className="flex gap-5">
              <div>
                {/* One for breakfast */}
                <MealContainer {...sampleDietChart.breakfast} />

                {/* Mid Meal */}
                <MealContainer {...sampleDietChart.midMeal} />

                {/* Before lunch */}
                <MealContainer {...sampleDietChart.beforeLunch} />

                {/* Lunch */}
                <MealContainer {...sampleDietChart.lunch} />

                {/* Evening */}
                <MealContainer {...sampleDietChart.evening} />

                {/* Dinner */}
                <MealContainer {...sampleDietChart.dinner} />

                {/* After Dinner */}
                <MealContainer {...sampleDietChart.afterDinner} />
              </div>
              <DietSummary
                idealCalories={sampleDietChart?.idealCalories}
                targetedCalories={sampleDietChart?.targetedCalories}
              />
            </div>
          </div>
        </div>
        )
      </div>
    </main>
  );
}
