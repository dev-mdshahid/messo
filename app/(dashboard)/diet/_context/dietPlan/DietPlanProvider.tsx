"use client";
import React, {
  ReactNode,
  ReducerAction,
  createContext,
  useContext,
  useReducer,
} from "react";
import { dietPlanReducer } from "../../_state/dietPlan/dietPlanReducer";
import { DietPlanActionType, DietPlanStateType } from "@/lib/type";
import { dietPlanInitialValue } from "./dietPlanInitialValue";

type DietPlanUseReducerType = {
  dietPlanReducer: (
    state: DietPlanStateType,
    action: DietPlanActionType,
  ) => DietPlanStateType;
  dietPlanInitialValue: DietPlanStateType;
};

export type DietplanContextType = {
  dietPlanState: DietPlanStateType;
  dietPlanDispatch: (action: DietPlanActionType) => void;
};

const DIETPLAN_CONTEXT = createContext<DietplanContextType | null>(null);

export default function DietPlanProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(dietPlanReducer, dietPlanInitialValue);

  const value = {
    dietPlanState: state,
    dietPlanDispatch: dispatch,
  };

  return (
    <DIETPLAN_CONTEXT.Provider value={value}>
      {children}
    </DIETPLAN_CONTEXT.Provider>
  );
}

export const useDietPlan = () => {
  const context = useContext(DIETPLAN_CONTEXT);
  return context;
};
