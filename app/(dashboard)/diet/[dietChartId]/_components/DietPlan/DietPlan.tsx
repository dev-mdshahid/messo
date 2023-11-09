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
        <div className="mx-auto w-full max-w-[1000px]">
          <div className="mb-7">
            <h1 className="mb-2 mt-5 text-center text-xl font-bold text-messo-900 sm:text-3xl md:mb-5 md:mt-10">
              Here is your diet plan
            </h1>

            <p className="mx-auto w-4/5 text-center text-sm leading-relaxed sm:text-sm">
              We have created this diet plan tailored to your need.{" "}
              <span className="hidden sm:inline">
                It ensures you are getting enough nutrition every day while also
                hitting your goal.
              </span>{" "}
              If you have health condition, please consult with your dietician
              before trying it out.
              {/* <span className="hidden sm:inline">
            Developing a well-rounded physique includes giving due attention to
            appropriate parts of your body. To help you achieve your fitness
            goals, here&apos;s{" "}
          </span>
          A comprehensive list of exercises specifically designed to enhance and
          strengthen the crucial muscle groups. */}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
            <div className="order-2 grid gap-5 lg:order-1">
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
              className="order-1 lg:order-2"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
