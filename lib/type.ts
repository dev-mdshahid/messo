// Beauty dataset types
export type IngredientsType = {
  for: string;
  skin_concern?: string;
  hair_concern?: string;
  ingredients: {
    ingredient?: string;
    purpose?: string;
    description: string;
  }[];
};

export type ProductsType = {
  name: string;
  face_type?: string;
  face_concern?: string;
  body_type?: string;
  body_concern?: string;
  scalp_type?: string;
  hair_concern?: string;
  allergic: string;
  img: string;
};

export type SuggestionsType = {
  for: string;
  description: string;
  hair_concern?: string;
  face_concern?: string;
};

// diet collected data type
export type DietCollectedDataType = {
  goal: "loseWeight" | "gainWeight" | "maintainWeight";
  gainWeight?: string;
  loseWeight?: string;
  changeDuration?: string;
  secondaryGoals: string[];
  bodyType: "endomorph" | "mesomorph" | "ectomorph";
  activityLevel: "inactive" | "slightlyActive" | "veryActive";
  energyLevel: string;
  healthIssue: string[];
  stomachDiscomfort: boolean;
  mealFrequency: number;
  waterIntake: string;
  dietaryRestrictions: string[];
};

// beauty collected data type
export type BeautyCollectedDataType = {
  problemSource?: string;
  scalpType?: string;
  hairConcern?: string;
  skinPart?: string;
  bodyType?: string;
  bodyConcern?: string;
  faceType?: string;
  faceConcern?: string;
};

// ----------------- Exercise ----------------------

export type ExercisePlanType = {
  id: string;
  title: string;
  target: "abs" | "chest" | "arm" | "leg" | "shoulder-back";
  level: 1 | 2 | 3;
  duration: number;
  img: string;
  description: string;
  workouts: {
    id: string;
    rep?: number;
    howLong?: number;
  }[];
};

export type ExerciseType = {
  id: string;
  target: string;
  name: string;
  howTo: string[];
  focusArea: string[];
  img: string;
  video: string;
};

export type ExerciseCollectedDataType = {
  goal: "loseWeight" | "getToned" | "buildMuscle";
  focusArea: string[];
  motivation: string[];
  level: string;
  activityLevel: string;
};

// ----------------- Diet & nutrition ------------------

export type FoodCategoryType =
  | "whole_grain"
  | "fruit"
  | "lean_protein"
  | "liquid"
  | "vegetable"
  | "vegetarian_protein"
  | "fat";

export type FoodType = {
  _id: string;
  id: string;
  category: FoodCategoryType;
  name: string;
  img: string;
  description: string;
  calories: number;
  nutrition: {
    protein: number;
    fat: number;
    carbs: number;
  };
  type: "vegetarian" | "non_vegetarian";
};

export type MealType = {
  title: string;
  time: string;
  calories: number;
  foods: {
    [key: string]: {
      id: string;
      quantity: number;
    }[];
  };
};

export type DietPlanType = {
  id: string;
  name: string;
  createdOn: Date;
  client: string;
  idealCalories: number;
  targetedCalories: number;
  protein: number;
  carbohydrate: number;
  fat: number;
  water: number;
  salt: number;
  sugar: number;
  oil: number;
  breakfast: MealType;
  snack1: MealType;
  lunch: MealType;
  snack2: MealType;
  dinner: MealType;
};

export type MealTimeType =
  | "breakfast"
  | "snack1"
  | "lunch"
  | "snack2"
  | "dinner";

export type DietPlanStateType = {
  loading: boolean;
  error: boolean;
  data: DietPlanType;
};

export type DietNewFoodType = {
  id: string;
  mealTime: MealTimeType;
  category: FoodCategoryType;
};

export type DietPlanActionType = {
  type: string;
  payload: {
    plan: DietPlanType;
    newFood: DietNewFoodType;
  };
};

// tailwind color
export type ColorValueType =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ColorType =
  | "pink"
  | "purple"
  | "red"
  | "yellow"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "green"
  | "indigo"
  | "blue"
  | "lime"
  | "orange"
  | "rose"
  | "sky"
  | "violet";

export type ErrorType = {
  message: string;
};
