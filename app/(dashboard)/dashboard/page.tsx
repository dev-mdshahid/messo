"use client";
import React from "react";
import ProfileBanner from "./_components/ProfileBanner/ProfileBanner";
import HealthInfo from "./_components/HealthInfo/HealthInfo";
import ActivePlans from "./_components/ActivePlans/ActivePlans";
import ProfileCompletion from "./_components/ProfileCompletion/ProfileCompletion";
import PremiumOfferCard from "./_components/PremiumOfferCard/PremiumOfferCard";
import { useGetUser } from "@/context/UserProvider";
import DashboardSkeleton from "./_components/DashboardSkeleton/DashboardSkeleton";

export default function DashboardPage() {
  const { email } = useGetUser();
  if (email) {
    return (
      <main className="grid  grid-cols-3 gap-6 2xl:grid-cols-[1fr_1fr_1fr_auto]">
        <section className="col-span-3 rounded-xl bg-white p-4 sm:p-6">
          <ProfileBanner />
          <HealthInfo />
          <ActivePlans />
        </section>
        <section className=" hidden flex-col gap-6 2xl:flex">
          <ProfileCompletion />
          <PremiumOfferCard />
        </section>
      </main>
    );
  }

  return <DashboardSkeleton />;
}
