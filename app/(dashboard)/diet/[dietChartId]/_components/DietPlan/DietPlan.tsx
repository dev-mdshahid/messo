"use client";
import React, { useEffect, useState } from "react";
import { sampleDietChart } from "@/data/sampleData";
import MealContainer from "./MealContainer/MealContainer";
import DietSummary from "./DietSummary/DietSummary";
import {
  DietCollectedDataType,
  DietNewFoodType,
  DietPlanType,
} from "@/lib/type";
import { useNutritionRequirements } from "@/hooks/useNutritionRequirements";
import { useGetUser } from "@/context/UserProvider";
import { getNutritionRequirements } from "@/helpers/getNutritionRequirements";
import { getDietTemplate } from "@/helpers/getDietTemplate";
import { Button } from "@/components/ui/button";
import {
  DietplanContextType,
  useDietPlan,
} from "../../../_context/dietPlan/DietPlanProvider";
import { dietPlanActionTypes } from "../../../_state/dietPlan/dietPlanActionTypes";
import { useGetSingleDietPlan } from "@/hooks/useGetSingleDietPlan";

type DietPlanProps = {
  data?: DietCollectedDataType;
  id?: string;
};

export default function DietPlan({ data, id }: DietPlanProps) {
  const saved = data ? false : true;
  const context = useDietPlan();
  const res = useGetSingleDietPlan(id ?? "");
  console.log(res);
  const { dietPlanState, dietPlanDispatch } = context as DietplanContextType;
  let targetedCalories = 0,
    idealCalories = 0,
    protein = 0,
    carbohydrate = 0,
    fat = 0;

  // Collecting the data
  const planData = dietPlanState.data;
  targetedCalories = planData?.targetedCalories ?? 0;
  idealCalories = planData?.idealCalories ?? 0;
  protein = planData?.protein ?? 0;
  carbohydrate = planData?.carbohydrate ?? 0;
  fat = planData?.fat ?? 0;
  const {
    user: { email, height, weight, age },
  } = useGetUser();

  useEffect(() => {
    if (data) {
      let dietPlan = getDietTemplate(email, data, height, weight, age);

      dietPlanDispatch({
        type: dietPlanActionTypes.FETCH_SUCCESS,
        payload: {
          plan: dietPlan,
          newFood: {} as DietNewFoodType,
        },
      });
    } else if (res.data) {
      dietPlanDispatch({
        type: dietPlanActionTypes.FETCH_SUCCESS,
        payload: {
          plan: res.data.plan,
          newFood: {} as DietNewFoodType,
        },
      });
    }
  }, [res.data]);

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
          {planData ? (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto]">
              <div className="order-2 grid gap-5 lg:order-1">
                {/* Breakfast */}
                <MealContainer
                  mealPlan={planData?.breakfast}
                  mealTime="breakfast"
                  saved={saved}
                />

                {/* Snack 1 */}
                <MealContainer
                  mealPlan={planData?.snack1}
                  mealTime="snack1"
                  saved={saved}
                />

                {/* Lunch */}
                <MealContainer
                  mealPlan={planData?.lunch}
                  mealTime="lunch"
                  saved={saved}
                />

                {/* Snack 2 */}
                <MealContainer
                  mealPlan={planData?.snack2}
                  mealTime="snack2"
                  saved={saved}
                />

                {/* Dinner */}
                <MealContainer
                  mealPlan={planData?.dinner}
                  mealTime="dinner"
                  saved={saved}
                />
              </div>
              <DietSummary
                idealCalories={idealCalories}
                targetedCalories={targetedCalories}
                protein={protein}
                carbohydrate={carbohydrate}
                fat={fat}
                className="order-1 lg:order-2"
                saved={saved}
              />
            </div>
          ) : (
            <div className="rounded-xl bg-white px-5 py-10 text-center text-red-500">
              No Diet plan has been found!
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
