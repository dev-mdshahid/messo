import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import InfoCardSkeleton from "./InfoCard/InfoCardSkeleton";

export default function HealthInfoSkeleton() {
  return (
    <div className="mt-7 whitespace-nowrap">
      <Skeleton className=" mb-5 h-5 w-1/3 bg-messo-100 "></Skeleton>

      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        <InfoCardSkeleton />
        <InfoCardSkeleton />
        <InfoCardSkeleton />
        <InfoCardSkeleton />
        <InfoCardSkeleton />
        <InfoCardSkeleton />
      </div>
    </div>
  );
}
