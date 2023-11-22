import { DietPlanStateType } from "@/lib/type";

export const dietPlanInitialValue: DietPlanStateType = {
  loading: false,
  error: false,
  data: {
    id: "",
    name: "",
    createdOn: new Date(),
    client: "",
    idealCalories: 0,
    targetedCalories: 0,
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    water: 0,
    salt: 0,
    sugar: 0,
    oil: 0,
    breakfast: {
      title: "Breakfast",
      time: "8:00AM to 8:30AM",
      calories: 0,
      foods: {},
    },
    snack1: {
      title: "",
      time: "",
      calories: 0,
      foods: {},
    },
    lunch: {
      title: "Lunch",
      time: "2:00PM to 2:30PM",
      calories: 0,
      foods: {},
    },
    snack2: {
      title: "Afternoon snack",
      time: "5:00 PM to 5:30PM",
      calories: 0,
      foods: {},
    },
    dinner: {
      title: "Dinner",
      time: "8:00AM to 8:30AM",
      calories: 0,
      foods: {},
    },
  },
};
