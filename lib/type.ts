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
