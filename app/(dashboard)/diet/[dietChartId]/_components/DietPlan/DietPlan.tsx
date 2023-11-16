"use client";
import React from "react";
import { sampleDietChart } from "@/data/sampleData";
import MealContainer from "./MealContainer/MealContainer";
import DietSummary from "./DietSummary/DietSummary";
import { DietCollectedDataType, DietPlanType } from "@/lib/type";
import { useNutritionRequirements } from "@/hooks/useNutritionRequirements";
import { useGetUser } from "@/context/UserProvider";
import { getNutritionRequirements } from "@/helpers/getNutritionRequirements";
import { getDietTemplate } from "@/helpers/getDietTemplate";
import { Button } from "@/components/ui/button";

type DietPlanProps = {
  data?: DietCollectedDataType;
  id?: string;
};

export default function DietPlan({ data, id }: DietPlanProps) {
  let targetedCalories = 0,
    idealCalories = 0,
    protein = 0,
    carbohydrate = 0,
    fat = 0;
  let dietPlan;

  const {
    user: { email, height, weight, age },
  } = useGetUser();

  if (data) {
    dietPlan = getDietTemplate(email, data, height, weight, age);
    targetedCalories = dietPlan.targetedCalories;
    idealCalories = dietPlan.idealCalories;
    protein = dietPlan.protein;
    carbohydrate = dietPlan.carbohydrate;
    fat = dietPlan.fat;
  } else {
  }

  useNutritionRequirements(data as DietCollectedDataType);

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
          {dietPlan ? (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
              <div className="order-2 grid gap-5 lg:order-1">
                {/* Breakfast */}
                <MealContainer
                  mealPlan={dietPlan?.breakfast}
                  mealTime="breakfast"
                />

                {/* Snack 1 */}
                <MealContainer mealPlan={dietPlan?.snack1} mealTime="snack1" />

                {/* Lunch */}
                <MealContainer mealPlan={dietPlan?.lunch} mealTime="lunch" />

                {/* Snack 2 */}
                <MealContainer mealPlan={dietPlan?.snack2} mealTime="snack2" />

                {/* Dinner */}
                <MealContainer mealPlan={dietPlan?.dinner} mealTime="dinner" />
              </div>
              <DietSummary
                idealCalories={idealCalories}
                targetedCalories={targetedCalories}
                protein={protein}
                carbohydrate={carbohydrate}
                fat={fat}
                className="order-1 lg:order-2"
              />
            </div>
          ) : (
            <div className="px-5 py-10 text-center text-red-500">
              No Diet plan has been found!
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
