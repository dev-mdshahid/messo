import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import colors from "tailwindcss/colors";
// Importing icons
import { FaMale, FaTachometerAlt, FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
import { BiDumbbell } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

export default function HealthInfo() {
  const weight = 64;
  const height = 163;
  const age = 24;
  const bodyStatus = "underweight";
  const bmi = 25;
  const gender = "male";
  return (
    <div className="mt-7 whitespace-nowrap">
      <h2 className="flex items-center justify-between pb-2 text-xl font-bold text-blue-900">
        <span>Health information</span>
        <AiFillEdit />
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
        <InfoCard
          title="Your current weight"
          data={weight + " kg"}
          icon={<FaWeight />}
          iconColor={colors.blue[500]}
          bgColor={colors.blue[100]}
        />

        <InfoCard
          title="Your current height"
          data={height + " cm"}
          icon={<GiBodyHeight />}
          iconColor={colors.red[500]}
          bgColor={colors.red[100]}
        />

        <InfoCard
          title="Your current age"
          data={age + " years old"}
          icon={<TbCalendarTime />}
          iconColor={colors.green[500]}
          bgColor={colors.green[100]}
        />

        <InfoCard
          title="Your current BMI"
          data={`${bmi} (${bodyStatus})`}
          icon={<FaTachometerAlt />}
          iconColor={colors.lime[500]}
          bgColor={colors.lime[100]}
        />

        <InfoCard
          title="Your current goal"
          data={
            bodyStatus === "underweight"
              ? "Gain Weight"
              : bodyStatus === "normal"
              ? "Maintain Weight"
              : "Lose weight"
          }
          icon={<BiDumbbell />}
          iconColor={colors.fuchsia[500]}
          bgColor={colors.fuchsia[100]}
        />

        <InfoCard
          title="Your gender"
          data={gender}
          icon={<FaMale className="text-4xl text-orange-500" />}
          iconColor={colors.orange[500]}
          bgColor={colors.orange[100]}
        />
      </div>
    </div>
  );
}
