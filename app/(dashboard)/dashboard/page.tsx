"use client";
import React from "react";
import ProfileBanner from "./_components/ProfileBanner/ProfileBanner";
import HealthInfo from "./_components/HealthInfo/HealthInfo";
import ActivePlans from "./_components/ActivePlans/ActivePlans";
import ProfileCompletion from "./_components/ProfileCompletion/ProfileCompletion";
import PremiumOfferCard from "./_components/PremiumOfferCard/PremiumOfferCard";

export default function DashboardPage() {
  return (
    <main className="grid grid-cols-4 gap-6">
      <section className="col-span-3 rounded-xl bg-white p-6">
        <ProfileBanner />
        <HealthInfo />
        <ActivePlans />
      </section>
      <section className="flex flex-col gap-6">
        <ProfileCompletion />
        <PremiumOfferCard />
      </section>
    </main>
  );
}
