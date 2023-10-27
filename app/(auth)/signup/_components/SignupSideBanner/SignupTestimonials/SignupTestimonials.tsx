"use client";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import React, { useState } from "react";

const SignupTestimonials = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="flex flex-col gap-6 rounded-xl bg-messo-700 p-6">
        <p className="text-xs leading-relaxed text-messo-200">
          {testimonials[index].description}
        </p>
        <div className="flex items-center">
          <Image
            src={testimonials[index].img}
            width={40}
            height={40}
            className="mr-3 rounded-full"
            alt="User dp"
          />

          <div>
            <h4 className="text-sm font-semibold text-messo-200">
              {testimonials[index].name}
            </h4>
            <small className="text-xs text-messo-300 ">Satisfied Client</small>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <div
          className={
            "mr-4 h-1.5 w-1.5 cursor-pointer rounded-full bg-white " +
            (index === 0 ? "" : "opacity-30")
          }
          onClick={() => setIndex(0)}
        ></div>
        <div
          className={
            "mr-4 h-1.5 w-1.5 cursor-pointer rounded-full bg-white " +
            (index === 1 ? "" : "opacity-30")
          }
          onClick={() => setIndex(1)}
        ></div>
        <div
          className={
            "mr-4 h-1.5 w-1.5 cursor-pointer rounded-full bg-white " +
            (index === 2 ? "" : "opacity-30")
          }
          onClick={() => setIndex(2)}
        ></div>
      </div>
    </div>
  );
};

export default SignupTestimonials;
