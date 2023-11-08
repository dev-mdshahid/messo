import React from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import ExercisePlanCard from "./ExercisePlanCard/ExercisePlanCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaNotesMedical } from "react-icons/fa6";
import { RiDeleteBin3Line } from "react-icons/ri";
import { exercisePlans } from "@/data/exercisePlans";
import { ColorType, ExercisePlanType } from "@/lib/type";
import colors from "tailwindcss/colors";

type ExercisePlanListContainerProps = {
  planList: ExercisePlanType[];
  title: string;
  creatable?: boolean;
  color?: ColorType;
};

export default function ExercisePlanListContainer({
  planList,
  title,
  creatable,
  color,
}: ExercisePlanListContainerProps) {
  return (
    <section className="mb-5">
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        {/* Title bar */}
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 p-5 pb-3 text-base font-bold text-blue-900 sm:text-xl">
            <BsJournalBookmarkFill className="text-2xl" /> {title}
          </h2>
          {creatable ? (
            <Button className="mr-3">
              <Link
                className="flex items-center gap-2"
                href={"exercise/create-exercise-plan"}
              >
                <FaNotesMedical size={20} />
                <span className="hidden sm:inline-block">Create</span>
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="h-px w-full bg-messo-900 opacity-20"></div>
        <div
          style={
            color
              ? {
                  backgroundColor: colors[color][50],
                }
              : {}
          }
          className="m-3 grid grid-cols-1 flex-wrap gap-3 rounded-xl bg-messo-50 p-0 text-sm leading-relaxed text-messo-900 sm:m-5 sm:flex sm:gap-5 sm:p-5"
        >
          {planList.length ? (
            planList.map((plan) => (
              <ExercisePlanCard key={plan.id} plan={plan} />
            ))
          ) : (
            <p className="m-5 mx-auto flex flex-col items-center gap-3 rounded-xl p-5 text-center text-base font-semibold text-blue-800/50 sm:text-xl">
              <RiDeleteBin3Line size={50} />
              No exercise plan has been found!
            </p>
          )}
          {/* <ExercisePlanCard
            img={
              "https://th.bing.com/th/id/OIP.6VzeoDgen7uVdrXopcpZrQHaEo?pid=ImgDet&rs=1"
            }
          /> */}
        </div>
      </div>
    </section>
  );
}
