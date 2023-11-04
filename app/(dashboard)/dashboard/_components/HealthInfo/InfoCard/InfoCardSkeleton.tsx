import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function InfoCardSkeleton() {
  return (
    <div
      className={
        "white flex items-center rounded-xl p-3 shadow shadow-messo-100 transition hover:shadow-xl hover:shadow-messo-100 "
      }
    >
      <Skeleton className="mr-4 h-16 w-16 rounded-xl bg-messo-100 p-3"></Skeleton>
      <div className="w-full">
        <Skeleton className="mb-2 h-6 w-1/3 bg-messo-100 "></Skeleton>
        <Skeleton className="h-5 w-2/3 bg-messo-100"></Skeleton>
      </div>
    </div>
  );
}
