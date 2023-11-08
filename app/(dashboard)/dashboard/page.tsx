"use client";
import React from "react";
import Image from "next/image";
import ProfileBanner from "./_components/ProfileBanner/ProfileBanner";
import HealthInfo from "./_components/HealthInfo/HealthInfo";
import ActivePlans from "./_components/ActivePlans/ActivePlans";
import ProfileCompletion from "./_components/ProfileCompletion/ProfileCompletion";
import PremiumOfferCard from "./_components/PremiumOfferCard/PremiumOfferCard";
import { useGetUser } from "@/context/UserProvider";
import DashboardSkeleton from "./_components/DashboardSkeleton/DashboardSkeleton";
import { Button } from "@/components/ui/button";
import sadFace from "@/public/media/img/icons/emoji/sad_face.webp";

export default function DashboardPage() {
  const { fetchStatus } = useGetUser();
  if (fetchStatus === "success") {
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
  } else if (fetchStatus === "error") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-10 text-center text-red-600">
        <Image src={sadFace} alt={"error face"} className="h-40 w-40" />
        <h3 className="text-xl font-bold">Failed to load the user!</h3>
        <Button
          onClick={() => window.location.reload()}
          className="bg-green-500 hover:bg-green-600"
        >
          Try again
        </Button>
      </div>
    );
  }

  return <DashboardSkeleton />;
}
