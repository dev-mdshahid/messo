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
        "flex items-center rounded-xl bg-messo-100 p-3 shadow-lg transition hover:shadow-xl " +
        className
      }
    >
      <div className="mr-4 rounded-xl bg-white p-3">
        <span
          style={{
            color: iconColor,
          }}
          className="text-4xl text-messo-500"
        >
          {icon}
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold capitalize text-blue-900">{data}</h4>
        <p className="text-sm capitalize text-gray-500">{title}</p>
      </div>
    </div>
  );
}
