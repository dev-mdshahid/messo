import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function PlanCardSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={
        "cursor-pointer rounded-lg border bg-white py-4 transition hover:shadow-lg " +
        className
      }
    >
      <div className="flex w-full items-center justify-between">
        <div className="w-full px-5">
          <Skeleton className="mb-2 h-4 w-1/2 rounded bg-messo-100"></Skeleton>
          <Skeleton className="h-3 w-2/3 bg-messo-100 px-5"></Skeleton>
        </div>
        <Skeleton className="mr-5 h-12 w-16 rounded-full bg-messo-100" />
      </div>

      <div className="px-5">
        <div className="my-5 grid grid-cols-2">
          <div className="border-r text-center">
            <Skeleton className="mx-auto mb-2 h-8 w-8 rounded bg-messo-100"></Skeleton>
            <Skeleton className="mx-auto h-2 w-12 bg-messo-100 "></Skeleton>
          </div>
          <div className="border-l text-center">
            <Skeleton className="mx-auto mb-2 h-8 w-8 rounded bg-messo-100"></Skeleton>
            <Skeleton className="mx-auto h-2 w-12 bg-messo-100 "></Skeleton>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-8 rounded-full bg-messo-100 "></Skeleton>
        </div>
      </div>
    </div>
  );
}
