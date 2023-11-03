import vegetarian from "@/public/media/img/icons/vegetarian.png";
import vegan from "@/public/media/img/icons/vegan.png";
import lactoseIntolerance from "@/public/media/img/icons/lactose_free.png";
import gluenFree from "@/public/media/img/icons/gluten_free.png";

import loseWeight from "@/public/media/img/icons/weight_lose.png";
import gainWeight from "@/public/media/img/icons/weight_gain.png";
import maintainWeight from "@/public/media/img/icons/weight_maintain.png";

import inactive from "@/public/media/img/icons/inactive_diet.png";
import slightlyActive from "@/public/media/img/icons/slightly_active_diet.png";
import veryActive from "@/public/media/img/icons/very_active_diet.png";

import appleShaped from "@/public/media/img/icons/apple_shaped.png";
import pearShaped from "@/public/media/img/icons/pear_shaped.png";
import hourglassShaped from "@/public/media/img/icons/hourglass_shaped.png";
import rectangleShaped from "@/public/media/img/icons/rectangle_shaped.png";

import lifeExpectancy from "@/public/media/img/icons/life_expectancy.png";
import brainPower from "@/public/media/img/icons/brain.png";
import bloodPressure from "@/public/media/img/icons/blood_pressure.png";
import reduceCholesterol from "@/public/media/img/icons/cholesterol.png";
import sleepBetter from "@/public/media/img/icons/sleep.png";
import boneHealth from "@/public/media/img/icons/bone_health.png";
import riskOfCancer from "@/public/media/img/icons/cancer.png";

import tiredAllDay from "@/public/media/img/icons/tired_all_day.png";
import tiredBeforeMeal from "@/public/media/img/icons/tired_before_meal.png";
import yawning from "@/public/media/img/icons/yawn.png";
import active from "@/public/media/img/icons/active.png";

import yesIcon from "@/public/media/img/icons/yes.png";
import noIcon from "@/public/media/img/icons/no.png";
/*
Question types are : 
  1. "input-[type]"
  2. "select-[single/multi]-[card/list]-[default/mini]"
*/

export const dietQuestions = [
  {
    type: "select-single-card-default",
    question: "What is your primary goal?",
    description:
      "Your primary goal is the biggest factor in determining the correct diet.",
    id: "goal",
    options: [
      {
        value: "loseWeight",
        icon: loseWeight,
        text: "Lose weight",
        description: "Burn away extra weight",
        jump: 1,
      },
      {
        value: "gainWeight",
        icon: gainWeight,
        text: "Gain Weight",
        description: "Add some extra weight",
        jump: 1,
      },
      {
        value: "maintainWeight",
        icon: maintainWeight,
        text: "Maintain Weight",
        description: "Happy with the current weight",
        jump: 2,
      },
    ],
  },
  {
    type: "input-number",
    label: "Desired weight(kg)",
    placeholder: "Enter your dream weight",
    min: 40,
    max: 100,
    question: "What is your desired weight?",
    description: "Think about the weight that you dreamed of your entire life.",
    id: "desiredWeight",
  },
  {
    type: "select-multi-list-mini",
    question: "What do you want to achieve?",
    description: "You can select multiple goals",
    id: "secondaryGoals",
    options: [
      {
        value: "lifeExpectancy",
        icon: lifeExpectancy,
        text: "Increase life expectancy",
        jump: 1,
      },
      {
        value: "brainPower",
        icon: brainPower,
        text: "Boost brain power",
        jump: 1,
      },
      {
        value: "bloodPressure",
        icon: bloodPressure,
        text: "Improve blood pressure",
        jump: 1,
      },
      {
        value: "reduceCholesterol",
        icon: reduceCholesterol,
        text: "Reduce cholesterol level",
        jump: 1,
      },
      {
        value: "sleepBetter",
        icon: sleepBetter,
        text: "Seelp better",
        jump: 1,
      },
      {
        value: "boneHealth",
        icon: boneHealth,
        text: "Improve bone health",
        jump: 1,
      },
      {
        value: "riskOfCancer",
        icon: riskOfCancer,
        text: "Reduce the risk of cancer",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-default",
    question: "What is your body type?",
    description:
      "Your body type tells us how your body behaves with foods and stores fat",
    id: "bodyType",
    options: [
      {
        value: "appleShaped",
        icon: appleShaped,
        text: "Apple-shaped",
        description: "Large bust, narrow hips, and rounded midsection",
        jump: 1,
      },
      {
        value: "pearShaped",
        icon: pearShaped,
        text: "Pear-shaped",
        description: "Narrow waist, hips are wider than shoulders",
        jump: 1,
      },
      {
        value: "hourglassShaped",
        icon: hourglassShaped,
        text: "Hourglass-shaped",
        description: "Well-defined waist, shoulders are the same width as hips",
        jump: 1,
      },
      {
        value: "rectangleShaped",
        icon: rectangleShaped,
        text: "Rectangle-shaped",
        description: "Bust, waist and hips are almost the same width",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-card-default",
    question: "How active are you during the day?",
    description: "The calories you burn during the day depends of this.",
    id: "activityLevel",
    options: [
      {
        value: "inactive",
        icon: inactive,
        text: "Inactive",
        description: "Little to no exercise",
        jump: 1,
      },
      {
        value: "slightlyActive",
        icon: slightlyActive,
        text: "Slightly Active",
        description: "Exercise 3 times/ week",
        jump: 1,
      },
      {
        value: "veryActive",
        icon: veryActive,
        text: "Very Active",
        description: "Intense workout 4-5 times/week",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-mini",
    question: "How energetic do you feel?",
    description:
      "By analysing this, our diet can keep your energy level steady all day.",
    id: "energyLevel",
    options: [
      {
        value: "veryLow",
        icon: tiredAllDay,
        text: "I feel like I am out of energy all day",
        jump: 1,
      },
      {
        value: "low",
        icon: tiredBeforeMeal,
        text: "I feel tired before meals",
        jump: 1,
      },
      {
        value: "medium",
        icon: yawning,
        text: "I have a couple of afternoon yawns",
        jump: 1,
      },
      {
        value: "high",
        icon: active,
        text: "I feel ready to rock all the time",
        jump: 1,
      },
    ],
  },
  {
    type: "select-multi-list-mini",
    question: "Do you suffer from any of the following conditions?",
    description:
      "By providing us with this information, we will be able to prepare the best meal plan for you!",
    id: "healthIssues",
    options: [
      {
        value: "no",
        text: "No, I don't",
        jump: 1,
      },
      {
        value: "diabetes",
        text: "Diabetes",
        jump: 1,
      },
      {
        value: "heartDisease",
        text: "Heart disease",
        jump: 1,
      },
      {
        value: "bloodPressure",
        text: "High blood pressure",
        jump: 1,
      },
      {
        value: "cholesterol",
        text: "High cholesterol",
        jump: 1,
      },
      {
        value: "kidney",
        text: "Chronic kidney disease(CKD)",
        jump: 1,
      },
      {
        value: "cancer",
        text: "Cancer",
        jump: 1,
      },
      {
        value: "gastric",
        text: "Gastrintestinal disorder",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-mini",
    question: "Do you experience stomach discomfort during the day?",
    description:
      "We will be careful about the type of food that can make you feel this way",
    id: "stomachDiscomfort",
    options: [
      {
        value: true,
        icon: yesIcon,
        text: "Yes",
        jump: 1,
      },
      {
        value: false,
        icon: noIcon,
        text: "No",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-default",
    question: "How many meals a day would you like to have?",
    description: "We will organize your meal plan based on your preference",
    id: "mealFrequency",
    options: [
      {
        value: 2,
        text: "Two",
        description: "Breakfast, dinner, optional snacks",
        jump: 1,
      },
      {
        value: 3,
        text: "Three",
        description: "Breakfast, lunch and dinner",
        jump: 1,
      },
      {
        value: 4,
        text: "Four",
        description: "Breakfast, snack, lunch and dinner",
        jump: 1,
      },
      {
        value: 5,
        text: "Five",
        description: "Breakfast, lunch, dinner and two snacks",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-default",
    question: "How much water do you drink daily?",
    description: "We mean clean water, excluding coffee, tea, and other drinks",
    id: "waterIntake",
    options: [
      {
        value: "<0.5",
        text: "Less than 0.5 L 💧",
        description: "Less than 2 glasses",
        jump: 1,
      },
      {
        value: "0.5-1.5",
        text: "0.5 - 1.5 L 💧💧",
        description: "2 - 6 glasses",
        jump: 1,
      },
      {
        value: "1.5-2.5",
        text: "1.5 - 2.5 L 💧💧💧",
        description: "Breakfast, snack, lunch and dinner",
        jump: 1,
      },
      {
        value: ">2.5",
        text: "More than 2.5 L 🌊",
        description: "More than 10 glasses",
        jump: 1,
      },
    ],
  },

  {
    type: "select-multi-card-default",
    question: "Do you have any dietary restrictions?",
    description:
      "We will make sure you don't have to break those restrictions.",
    id: "dietaryRestrictions",
    options: [
      {
        value: "vegetarian",
        icon: vegetarian,
        text: "Vegetarian",
        description: "Eat only vegetables",
        jump: 1,
      },
      {
        value: "vegan",
        icon: vegan,
        text: "Vegan",
        description: "Strictly avoid animal food",
        jump: 1,
      },
      {
        value: "lactoseIntolerance",
        icon: lactoseIntolerance,
        text: "Lactose intolerance",
        description: "Can't digest milk-based food",
        jump: 1,
      },
      {
        value: "gluenFree",
        icon: gluenFree,
        text: "Gluten Free",
        description: "Avoid foods that contain gluten",
        jump: 1,
      },
    ],
  },

  // {
  //   type: "select",
  //   question: "What is your type?",
  //   description:
  //     "Knowing your food preference will help us to build the best diet plan",
  //   id: "type",
  //   options: [
  //     {
  //       value: "vegetarian",
  //       icon: vegetarian,
  //       text: "Vegetarian",
  //       description: "Eat only vegetables",
  //     },
  //     {
  //       value: "nonVegetarian",
  //       icon: nonVegetarian,
  //       text: "Non Vegetarian",
  //       description: "Eat fish, meat or chicken",
  //     },
  //     {
  //       value: "noPreference",
  //       icon: peraNai,
  //       text: "No preference",
  //       description: "Okay with everything",
  //     },
  //   ],
  // },
];
