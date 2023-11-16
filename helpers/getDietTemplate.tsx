import { DietCollectedDataType } from "@/lib/type";
import { getNutritionRequirements } from "./getNutritionRequirements";

export const getDietTemplate = (
  email: string,
  data: DietCollectedDataType,
  height: number,
  weight: number,
  age: number,
) => {
  const { goal, dietaryRestrictions, mealFrequency } = data;
  const { targetedCalories, idealCalories, protein, carbohydrate, fat } =
    getNutritionRequirements(data, height, weight, age);
  return {
    name:
      goal === "gainWeight"
        ? "Gain weight plan"
        : goal === "loseWeight"
        ? "Lose weight plan"
        : "Maintain weight plan",
    createdOn: new Date(),
    client: email,
    idealCalories: idealCalories,
    targetedCalories: targetedCalories,
    protein: protein,
    carbohydrate: carbohydrate,
    fat: fat,
    water: 4,
    salt: 6,
    sugar: 25,
    oil: 20,
    breakfast: {
      title: "Breakfast",
      time: "8:00AM to 8:30AM",
      calories: targetedCalories * 0.3,
      foods: {
        liquid: [],
        whole_grain: [],
        ...(dietaryRestrictions.includes("vegetarian")
          ? { vegetarian_protein: [] }
          : { lean_protein: [] }),
        vegetable: [],
        fat: [],
      },
    },
    snack1: {
      title: "Morning snack",
      time: "10:30AM to 11:00 AM",
      calories: targetedCalories * 0.1,
      foods: {
        fruits: [],
      },
    },
    lunch: {
      title: "Lunch",
      time: "2:00PM to 2:30PM",
      calories: targetedCalories * 0.3,
      foods: {
        liquid: [],
        whole_grain: [],
        ...(dietaryRestrictions.includes("vegetarian")
          ? { vegetarian_protein: [] }
          : { lean_protein: [] }),
        vegetable: [],
        fat: [],
      },
    },
    snack2: {
      title: "Afternoon snack",
      time: "5:00 PM to 5:30PM",
      calories: targetedCalories * 0.1,
      foods: {
        fruits: [],
      },
    },
    dinner: {
      title: "Dinner",
      time: "8:00AM to 8:30AM",
      calories: targetedCalories * 0.3,
      foods: {
        liquid: [],
        whole_grain: [],
        ...(dietaryRestrictions.includes("vegetarian")
          ? { vegetarian_protein: [] }
          : { lean_protein: [] }),
        vegetable: [],
        fat: [],
      },
    },
  };
};
