import vegetarian from "@/public/media/img/icons/vegetarian.png";
import nonVegetarian from "@/public/media/img/icons/non_vegetarian.png";
import peraNai from "@/public/media/img/icons/okay.png";

import loseWeight from "@/public/media/img/icons/weight_lose.png";
import gainWeight from "@/public/media/img/icons/weight_gain.png";
import maintainWeight from "@/public/media/img/icons/weight_maintain.png";

import inactive from "@/public/media/img/icons/inactive_diet.png";
import slightlyActive from "@/public/media/img/icons/slightly_active_diet.png";
import veryActive from "@/public/media/img/icons/very_active_diet.png";

/*
Question types are : 
  1. "input-[type]"
  2. "select-card-[single/multi]"
  3. "select-list-[single/multi]"
  4. "select-list-[single/multi]-mini"
*/

export const dietQuestions = [
  {
    type: "select",
    question: "What is your type?",
    description:
      "Knowing your food preference will help us to build the best diet plan",
    id: "type",
    options: [
      {
        value: "vegetarian",
        icon: vegetarian,
        text: "Vegetarian",
        description: "Eat only vegetables",
      },
      {
        value: "nonVegetarian",
        icon: nonVegetarian,
        text: "Non Vegetarian",
        description: "Eat fish, meat or chicken",
      },
      {
        value: "noPreference",
        icon: peraNai,
        text: "No preference",
        description: "Okay with everything",
      },
    ],
  },
  {
    type: "select",
    question: "What is your primary goal?",
    id: "goal",
    options: [
      {
        value: "loseWeight",
        icon: loseWeight,
        text: "Lose weight",
        description: "Burn away extra weight",
      },
      {
        value: "gainWeight",
        icon: gainWeight,
        text: "Gain Weight",
        description: "Add some extra weight",
      },
      {
        value: "maintainWeight",
        icon: maintainWeight,
        text: "Maintain Weight",
        description: "Happy with the current weight",
      },
    ],
  },
  {
    type: "select",
    question: "How active are you?",
    id: "activeLevel",
    options: [
      {
        value: "inactive",
        icon: inactive,
        text: "Inactive",
        description: "Little to no exercise",
      },
      {
        value: "slightlyActive",
        icon: slightlyActive,
        text: "Slightly Active",
        description: "Exercise 3 times/ week",
      },
      {
        value: "veryActive",
        icon: veryActive,
        text: "Very Active",
        description: "Intense workout 4-5 times/week",
      },
    ],
  },
];
