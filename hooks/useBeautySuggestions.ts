import { ingredients, products, suggestions } from "@/data/beautyData";

type UseBeautySuggestionsProps = Record<string, string>;

export const useBeautySuggestions = (data: UseBeautySuggestionsProps) => {
  // Destrucuring the properties
  const {
    problemSource,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  } = data;

  let selectedProducts;
  if (problemSource?.toLowerCase() === "hair") {
    selectedProducts = products?.filter(
      (product) =>
        product?.scalp_type?.toLowerCase().trim().replace(/\s/g, "") ===
          scalpType?.toLowerCase().trim().replace(/\s/g, "") &&
        product?.hair_concern?.toLowerCase().trim().replace(/\s/g, "") ===
          hairConcern?.toLowerCase().trim().replace(/\s/g, ""),
    );
  } else if (problemSource?.toLowerCase() === "skin") {
    if (skinPart?.toLowerCase() === "face") {
      selectedProducts = products?.filter(
        (product) =>
          product?.face_type?.toLowerCase().trim().replace(/\s/g, "") ===
            faceType?.toLowerCase().trim().replace(/\s/g, "") &&
          product?.face_concern?.toLowerCase().trim().replace(/\s/g, "") ===
            faceConcern?.toLowerCase().trim().replace(/\s/g, ""),
      );
    } else if (skinPart?.toLowerCase() === "body") {
      selectedProducts = products?.filter(
        (product) =>
          product?.body_type?.toLowerCase().trim().replace(/\s/g, "") ===
            bodyType?.toLowerCase().trim().replace(/\s/g, "") &&
          product?.body_concern?.toLowerCase().trim().replace(/\s/g, "") ===
            bodyConcern?.toLowerCase().trim().replace(/\s/g, ""),
      );
    }
  }

  let selectedIngredients;
  if (faceConcern || bodyConcern) {
    selectedIngredients = ingredients?.find(
      (ingredient) =>
        ingredient?.skin_concern?.toLowerCase().trim().replace(/\s/g, "") ===
          faceConcern?.toLowerCase().trim().replace(/\s/g, "") ||
        ingredient?.skin_concern?.toLowerCase().trim().replace(/\s/g, "") ===
          bodyConcern?.toLowerCase().trim().replace(/\s/g, ""),
    );
  } else if (hairConcern) {
    selectedIngredients = ingredients?.find(
      (ingredient) =>
        ingredient?.hair_concern?.toLowerCase().trim().replace(/\s/g, "") ===
        hairConcern?.toLowerCase().trim().replace(/\s/g, ""),
    );
  }

  let selectedSuggestions;
  if (faceConcern) {
    selectedSuggestions = suggestions?.find(
      (suggestion) =>
        suggestion?.face_concern?.toLowerCase().trim().replace(/\s/g, "") ===
        faceConcern?.toLowerCase().trim().replace(/\s/g, ""),
    );
  } else if (hairConcern) {
    selectedSuggestions = suggestions?.find(
      (suggestion) =>
        suggestion?.hair_concern?.toLowerCase().trim().replace(/\s/g, "") ===
        hairConcern?.toLowerCase().trim().replace(/\s/g, ""),
    );
  }

  return { selectedIngredients, selectedProducts, selectedSuggestions };
};
