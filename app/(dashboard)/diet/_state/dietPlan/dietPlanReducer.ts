import { DietPlanActionType, DietPlanStateType } from "@/lib/type";
import { dietPlanActionTypes } from "./dietPlanActionTypes";

export const dietPlanReducer = (
  state: DietPlanStateType,
  action: DietPlanActionType,
) => {
  switch (action.type) {
    case dietPlanActionTypes.FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case dietPlanActionTypes.FETCH_SUCCESS:
      console.log(action);
      return {
        ...state,
        data: action.payload.plan,
        loading: false,
        error: false,
      };
    case dietPlanActionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case dietPlanActionTypes.ADD_NEW_FOOD:
      if (action.payload.newFood) {
        const { mealTime, category, id } = action.payload.newFood;
        return {
          ...state,
          data: {
            ...state.data,
            [mealTime]: {
              ...state.data[mealTime],
              foods: {
                ...state.data[mealTime].foods,
                [category]: [
                  ...state.data[mealTime].foods[category],
                  { id: id, quantity: 150 },
                ],
              },
            },
          },
        };
      }

    default:
      return state;
  }
};
