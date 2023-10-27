import React from "react";
import SignupForm from "./_components/SignupForm/SignupForm";
import SignupSideBanner from "./_components/SignupSideBanner/SignupSideBanner";

export default function SignupPage() {
  return (
    <div className="grid h-full max-w-[1000px] grid-cols-[auto_1fr] rounded-xl bg-white p-2.5 shadow-xl ">
      {/* ---------------------------Left side ---------------------*/}
      <SignupSideBanner />

      {/* ----------------------------Right column---------------------- */}
      <SignupForm />
    </div>
  );
}
