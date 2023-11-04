import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProfileBannerSkeleton() {
  return (
    <div className="col-span-3">
      <Skeleton className="h-[200px] w-full rounded-xl bg-messo-100 "></Skeleton>

      <div className="relative h-28">
        <Skeleton className="absolute bottom-6 left-4 flex h-32 w-32 items-center justify-center rounded-full border-2 border-white bg-messo-100  text-white"></Skeleton>

        <div className="absolute left-40 top-4 w-full">
          {/* Name */}
          <Skeleton className="h-5 w-3/5 bg-messo-100" />

          {/* Email */}
          <Skeleton className="mt-3 h-5 w-2/5 bg-messo-100"></Skeleton>
        </div>
      </div>
    </div>
  );
}
