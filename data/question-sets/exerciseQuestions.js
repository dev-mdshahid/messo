import loseWeight from "@/public/media/img/icons/exercise/lose_weight.png";
import getToned from "@/public/media/img/icons/exercise/get_toned.png";
import buildMuscle from "@/public/media/img/icons/exercise/build_muscle.png";

import arm from "@/public/media/img/icons/exercise/arm.png";
import chest from "@/public/media/img/icons/exercise/chest.png";
import abs from "@/public/media/img/icons/exercise/abs.png";
import legs from "@/public/media/img/icons/exercise/legs.png";
import back from "@/public/media/img/icons/exercise/back.png";
import shoulders from "@/public/media/img/icons/exercise/shoulders.png";

import feelConfident from "@/public/media/img/icons/exercise/confident.png";
import releaseStress from "@/public/media/img/icons/exercise/release_stress.png";
import improveHealth from "@/public/media/img/icons/exercise/improve_health.png";
import boostEnergy from "@/public/media/img/icons/exercise/boost_energy.png";
import lookAesthetic from "@/public/media/img/icons/exercise/look_aesthetic.png";

import oneFinger from "@/public/media/img/icons/exercise/one_finger.png";
import twoFingers from "@/public/media/img/icons/exercise/two_fingers.png";
import thumbsUp from "@/public/media/img/icons/exercise/thumbs_up.png";

import inactive from "@/public/media/img/icons/inactive_diet.png";
import slightlyActive from "@/public/media/img/icons/slightly_active_diet.png";
import veryActive from "@/public/media/img/icons/very_active_diet.png";

export const exerciseQuestions = [
  {
    type: "select-single-card-default",
    question: "What is your primary goal?",
    description:
      "Your primary goal is the biggest factor in determining the best set of exercises.",
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
        value: "getToned",
        icon: getToned,
        text: "Get toned",
        description: "Build aesthetic body shape",
        jump: 1,
      },
      {
        value: "buildMuscle",
        icon: buildMuscle,
        text: "Build muscle",
        description: "Be muscular to look manly",
        jump: 1,
      },
    ],
  },
  {
    type: "select-multi-card-default",
    question: "Please choose your focus area",
    description: "What are the areas that you want to work on the most?",
    id: "focusArea",
    options: [
      {
        value: "arm",
        icon: arm,
        text: "Arm",
        description: "Bigger biceps and triceps",
        jump: 1,
      },
      {
        value: "chest",
        icon: chest,
        text: "Chest",
        description: "Bigger & wider chest",
        jump: 1,
      },
      {
        value: "abs",
        icon: abs,
        text: "Abs",
        description: "Aesthetic 6-pack abs",
        jump: 1,
      },
      {
        value: "legs",
        icon: legs,
        text: "Legs",
        description: "Stronger Legs",
        jump: 1,
      },
      {
        value: "back",
        icon: back,
        text: "Back",
        description: "V-shape back",
        jump: 1,
      },
      {
        value: "shoulders",
        icon: shoulders,
        text: "Shoulders",
        description: "To make you look wider",
        jump: 1,
      },
    ],
  },
  {
    type: "select-multi-list-mini",
    question: "What motivates you the most?",
    description: "This is what you really want to achieve from deep inside.",
    id: "motivation",
    options: [
      {
        value: "feelConfident",
        icon: feelConfident,
        text: "Feel confident",
        jump: 1,
      },
      {
        value: "releaseStress",
        icon: releaseStress,
        text: "Release stress",
        jump: 1,
      },
      {
        value: "improveHealth",
        icon: improveHealth,
        text: "Improve health",
        jump: 1,
      },
      {
        value: "boostEnergy",
        icon: boostEnergy,
        text: "Boost energy",
        jump: 1,
      },
      {
        value: "lookAesthetic",
        icon: lookAesthetic,
        text: "Look aesthetic",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-mini",
    question: "How many push can you do at one time?",
    description: "This helps us to adjust the right level of exercise for you.",
    id: "level",
    options: [
      {
        value: "beginner",
        icon: oneFinger,
        text: "3 - 5 push-ups",
        description: "3 - 5 push-ups",
        jump: 1,
      },
      {
        value: "intermediate",
        icon: twoFingers,
        text: "5 - 10 push-ups",
        description: "5 - 10 push-ups",
        jump: 1,
      },
      {
        value: "advanced",
        icon: thumbsUp,
        text: "At least 10",
        description: "At least 10",
        jump: 1,
      },
    ],
  },
  {
    type: "select-single-list-default",
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
];
