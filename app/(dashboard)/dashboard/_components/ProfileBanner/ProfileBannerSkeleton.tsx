import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProfileBannerSkeleton() {
  return (
    <div className="col-span-3">
      <Skeleton className="h-[100px] w-full rounded-xl bg-messo-100 sm:h-[200px] "></Skeleton>

      <div className="relative h-20 sm:h-28">
        <Skeleton className="absolute bottom-4 left-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-messo-100 text-white sm:h-32  sm:w-32"></Skeleton>

        <div className="absolute left-32 top-4 w-full sm:left-40">
          {/* Name */}
          <Skeleton className="h-5 w-2/5 bg-messo-100 sm:w-3/5" />

          {/* Email */}
          <Skeleton className="mt-3 h-5 w-1/5 bg-messo-100 sm:w-2/5"></Skeleton>
        </div>
      </div>
    </div>
  );
}
