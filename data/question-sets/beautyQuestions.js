import loseWeight from "@/public/media/img/icons/weight_lose.png";
import gainWeight from "@/public/media/img/icons/weight_gain.png";
import maintainWeight from "@/public/media/img/icons/weight_maintain.png";

export const beautyQuestions = [
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
];
