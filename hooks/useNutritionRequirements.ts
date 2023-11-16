import { useGetUser } from "@/context/UserProvider";
import { DietCollectedDataType } from "@/lib/type";

export const useNutritionRequirements = (data: DietCollectedDataType) => {
  const {
    user: { height, weight, age },
  } = useGetUser();
  const { bodyType, activityLevel } = data;

  //   Calculating the BMR
  let BMR;
  if (bodyType === "ectomorph") {
    BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  //   Calculating TDEE
  let TDEE;
  if (activityLevel === "inactive") {
    TDEE = BMR * 1.2;
  } else if (activityLevel === "slightlyActive") {
    TDEE = BMR * 1.375;
  } else {
    TDEE = BMR * 1.55;
  }

  let targetCalories;
  if (data.gainWeight && data.changeDuration) {
    const totalSurplus = 7700 * parseInt(data.gainWeight);
    const dailySurplus = totalSurplus / (30 * parseInt(data.changeDuration));
    targetCalories = TDEE + dailySurplus;
  } else if (data.loseWeight && data.changeDuration) {
    const totalDeficit = 7700 * parseInt(data.loseWeight);
    const dailyDeficit = totalDeficit / (30 * parseInt(data.changeDuration));
    targetCalories = TDEE - dailyDeficit;
  } else {
    targetCalories = TDEE;
  }

  //   protein and fat intake
  let carbohydrate, protein, fat;
  if (bodyType === "ectomorph") {
    carbohydrate = 0.45 * targetCalories;
    protein = 0.4 * targetCalories;
    fat = 0.2 * targetCalories;
  } else if (bodyType === "endomorph") {
    carbohydrate = 0.2 * targetCalories;
    protein = 0.4 * targetCalories;
    fat = 0.4 * targetCalories;
  } else {
    carbohydrate = 0.4 * targetCalories;
    protein = 0.3 * targetCalories;
    fat = 0.3 * targetCalories;
  }

  return {
    idealCalories: parseFloat(TDEE.toFixed(1)),
    targetCalories: parseFloat(targetCalories.toFixed(1)),
    carbohydrate: parseFloat(carbohydrate.toFixed(1)),
    protein: parseFloat(protein.toFixed(1)),
    fat: parseFloat(fat.toFixed(1)),
  };
};
