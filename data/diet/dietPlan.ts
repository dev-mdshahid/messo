import { DietPlanType } from "@/lib/type";

export const sampleDietChart: DietPlanType = {
  id: "1",
  client: "mdshahidulridoy@gmail.com",
  name: "Weight Loss plan",
  createdOn: "10 Nov, 2023",
  idealCalories: 2000,
  targetedCalories: 1500,
  water: 3,
  salt: 1,
  sugar: 3,
  oil: 5,
  breakfast: {
    title: "Breakfast",
    time: "8:00AM to 8:30AM",
    calories: 200,
    foods: [
      {
        id: "lp-2",
        quantity: 200,
      },
      {
        id: "fr-7",
        quantity: 200,
      },
      {
        id: "fr-11",
        quantity: 200,
      },
    ],
  },
  snack1: {
    title: "Snack 1",
    time: "10:30AM to 11:00 AM",
    calories: 200,
    foods: [
      {
        id: "wg-7",
        quantity: 200,
      },
      {
        id: "ld-2",
        quantity: 200,
      },
      {
        id: "lp-1",
        quantity: 200,
      },
    ],
  },
  lunch: {
    title: "Lunch",
    time: "2:00PM to 2:30PM",
    calories: 200,
    foods: [
      {
        id: "wg-1",
        quantity: 200,
      },
      {
        id: "ld-2",
        quantity: 200,
      },
      {
        id: "ve-14",
        quantity: 200,
      },
      {
        id: "ve-1",
        quantity: 200,
      },
      {
        id: "ve-10",
        quantity: 200,
      },
      {
        id: "ve-8",
        quantity: 200,
      },
      {
        id: "ve-7",
        quantity: 200,
      },
      {
        id: "ve-5",
        quantity: 200,
      },
      {
        id: "ve-9",
        quantity: 200,
      },
      {
        id: "ve-21",
        quantity: 200,
      },
    ],
  },
  snack2: {
    title: "Evening",
    time: "5:00 PM to 5:30PM",
    calories: 200,
    foods: [
      {
        id: "fr-2",
        quantity: 200,
      },
      {
        id: "fr-3",
        quantity: 200,
      },
    ],
  },
  dinner: {
    title: "Dinner",
    time: "8:00-8:30PM",
    calories: 200,
    foods: [
      {
        id: "wg-2",
        quantity: 200,
      },
      {
        id: "ld-2",
        quantity: 200,
      },
      {
        id: "ve-14",
        quantity: 200,
      },
      {
        id: "ve-4",
        quantity: 200,
      },
      {
        id: "ve-10",
        quantity: 200,
      },
      {
        id: "ve-3",
        quantity: 200,
      },
      {
        id: "ve-7",
        quantity: 200,
      },
      {
        id: "ve-5",
        quantity: 200,
      },
      {
        id: "ve-9",
        quantity: 200,
      },
      {
        id: "ve-21",
        quantity: 200,
      },
    ],
  },
};
