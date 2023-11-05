import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { TbArrowRight } from "react-icons/tb";

export default function Header() {
  return (
    <main className={"flex h-full flex-col items-center space-y-5 text-center"}>
      <div>
        <h1 className="text-2xl font-semibold capitalize leading-relaxed text-gray-700 sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-relaxed lg:leading-relaxed xl:text-5xl xl:leading-[65px]">
          With <span className="inline-block text-messo-700">MessO</span>,{" "}
          <br />
          Transform your life <br />
          From <span className="inline-block text-red-500">Messy</span> To{" "}
          <span className="inline-block whitespace-nowrap text-green-500">
            Organized!
          </span>
        </h1>
        <p className="mx-auto mb-3 mt-5 inline-block w-full max-w-[90%] text-center text-sm leading-7 text-gray-500 md:max-w-[70%] lg:text-base lg:leading-7 xl:max-w-[60%]">
          Ready to turn your life from a hot mess to a sizzling success?{" "}
          <span className="hidden md:inline">
            With MessO, you&apos;ll tackle the chaos in your diet, exercise, and
            even add a touch of beauty – all in one fabulous app!
          </span>{" "}
          Let&apos;s bring some order to the chaos, one laugh at a time!
        </p>
      </div>
      <div>
        <Button className="space-x-2">
          <Link href={"/dashboard"}>Start for free now</Link>
          <TbArrowRight size={20} />
        </Button>
      </div>
    </main>
  );
}
