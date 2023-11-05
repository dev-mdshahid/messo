import React from "react";
import colors from "tailwindcss/colors";
import { DefaultColors } from "tailwindcss/types/generated/colors";

type InfoCardProps = {
  data: string;
  icon: React.ReactNode;
  title: string;
  className?: string;
  bgColor?: string;
  iconColor?: string;
};

export default function InfoCard({
  data,
  icon,
  title,
  className,
  bgColor,
  iconColor,
}: InfoCardProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={
        "flex items-center rounded-xl bg-messo-100 p-3 shadow-lg transition hover:shadow-xl sm:shadow-lg " +
        className
      }
    >
      <div className="mr-4 rounded-xl bg-white p-2 sm:p-3">
        <span
          style={{
            color: iconColor,
          }}
          className="text-3xl text-messo-500 sm:text-4xl"
        >
          {icon}
        </span>
      </div>
      <div>
        <h4 className="text-base font-bold capitalize text-blue-900 sm:text-lg">
          {data}
        </h4>
        <p className="text-xs capitalize text-gray-500 sm:text-sm">{title}</p>
      </div>
    </div>
  );
}
