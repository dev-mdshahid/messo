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

// Exercise

export type ExercisePlanType = {
  id: string;
  title: string;
  target: "abs" | "chest" | "arm" | "leg" | "shoulder-back";
  level: 1 | 2 | 3;
  duration: number;
  img: string;
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
