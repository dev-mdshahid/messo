import React from "react";
import ProfileBannerSkeleton from "../ProfileBanner/ProfileBannerSkeleton";
import HealthInfoSkeleton from "../HealthInfo/HealthInfoSkeleton";
import ActivePlansSkeleton from "../ActivePlans/ActivePlansSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <main className="grid grid-cols-3 gap-6 2xl:grid-cols-4">
      <section className="col-span-3 w-full rounded-xl bg-white p-4 sm:p-6">
        <ProfileBannerSkeleton />
        <HealthInfoSkeleton />
        <ActivePlansSkeleton />
      </section>
      <section className="hidden h-full w-full gap-5 rounded-xl bg-white p-5 2xl:grid">
        <Skeleton className="h-full w-full bg-messo-100" />
        <Skeleton className="h-full w-full bg-messo-100" />
        <Skeleton className="h-full w-full bg-messo-100" />
      </section>
    </main>
  );
}
