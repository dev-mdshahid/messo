import React from "react";
import PlanCardSkeleton from "./PlanCard/PlanCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ActivePlansSkeleton() {
  return (
    <div className="mt-12 whitespace-nowrap">
      <Skeleton className="mb-5 h-5 w-1/3 bg-messo-100 "></Skeleton>

      <div className="grid grid-cols-1 gap-5 transition md:grid-cols-2 2xl:grid-cols-3 ">
        {/* Single plan UI */}
        <PlanCardSkeleton />
        <PlanCardSkeleton />
        <PlanCardSkeleton />
      </div>
    </div>
  );
}
