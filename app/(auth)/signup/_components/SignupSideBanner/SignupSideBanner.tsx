import React from "react";
import SignupTestimonials from "./SignupTestimonials/SignupTestimonials";
import { siteName } from "@/data/siteData";

export default function SignupSideBanner() {
  return (
    <div className="hidden w-[300px] flex-col justify-between rounded-xl bg-messo-600 p-10 md:flex">
      <div>
        {/* Company name */}
        <p className="font-semibold uppercase tracking-wider text-white">
          {siteName}
        </p>

        {/* Main text */}
        <div className="mt-16">
          <h1 className="text-4xl font-semibold leading-tight text-white">
            Start your <br /> journey with us
          </h1>
          <p className="pt-5 text-sm text-messo-200">
            Discover the worlds best support on your healthcare and find the
            best diet and exercise plans.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <SignupTestimonials />
    </div>
  );
}
