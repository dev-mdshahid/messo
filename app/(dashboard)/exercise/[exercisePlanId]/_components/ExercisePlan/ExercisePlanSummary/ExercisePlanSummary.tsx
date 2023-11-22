import { ColorType, ExercisePlanType } from "@/lib/type";
import React, { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import SummaryPropertyValue from "./SummaryPropertyValue/SummaryPropertyValue";
import { Button } from "@/components/ui/button";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { toast } from "@/components/ui/use-toast";

type ExercisePlanSummaryProps = {
  planData: ExercisePlanType;
  saved?: boolean;
};

export default function ExercisePlanSummary({
  planData,
  saved,
}: ExercisePlanSummaryProps) {
  const [status, setStatus] = useState<"saving" | "saved" | null>(
    saved ? "saved" : null,
  );

  // save diet plan
  const handleSave = async () => {
    // setStatus("saving");
    // const url = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/saveDietPlan`;
    // try {
    //   const res = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(planData),
    //   });
    //   const data = await res.json();
    //   if (data.ok) {
    //     setStatus("saved");
    //     toast({
    //       description: data.message,
    //     });
    //   } else {
    //     setStatus(null);
    //     toast({
    //       description: data.message,
    //       variant: "destructive",
    //     });
    //   }
    // } catch (error) {
    //   toast({
    //     description: "Couldn't connect the database!",
    //     variant: "destructive",
    //   });
    // }
  };

  const { target, level, duration, img, workouts } = planData;
  return (
    <div className="h-fit min-w-[280px] max-w-[500px] rounded-xl border border-messo-100 bg-white">
      <h3 className="px-6 py-4 text-center text-lg font-bold text-messo-900">
        Plan Summary
      </h3>

      <div className="h-px w-full bg-messo-900 opacity-20"></div>

      <div className="space-y-3 p-5">
        <SummaryPropertyValue
          key={1}
          property="target"
          value={target}
          icon={<TbTargetArrow />}
        />
        <SummaryPropertyValue
          key={2}
          property="level"
          value={
            level === 1 ? "beginner" : level === 2 ? "intermediate" : "advanced"
          }
          icon={<VscGraph />}
          color={level === 1 ? "green" : level === 2 ? "orange" : "red"}
        />
        <SummaryPropertyValue
          key={3}
          property="Total exercises"
          value={workouts.length}
          icon={<GiBiceps />}
          color="sky"
        />
        <SummaryPropertyValue
          key={4}
          property="Duration"
          value={duration + " minutes"}
          icon={<BsClockHistory />}
          color="purple"
        />
      </div>
      <div className="p-5 pt-0">
        <Button
          disabled={status === "saving" || status === "saved"}
          className=" w-full"
          onClick={handleSave}
        >
          {status === "saving" ? (
            <ButtonLoader text="Saving plan..." />
          ) : status === "saved" ? (
            "Saved"
          ) : (
            "Save this plan"
          )}
        </Button>
      </div>
    </div>
  );
}
