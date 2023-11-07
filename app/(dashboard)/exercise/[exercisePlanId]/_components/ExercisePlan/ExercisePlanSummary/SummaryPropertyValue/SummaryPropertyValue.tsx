import { ColorType } from "@/lib/type";
import React from "react";
import colors from "tailwindcss/colors";

export default function SummaryPropertyValue({
  icon,
  property,
  value,
  color,
}: {
  icon: React.ReactNode;
  property: string;
  value: string | number;
  color?: ColorType;
}) {
  return (
    <div
      style={
        color
          ? {
              backgroundColor: colors[color][50],
            }
          : {}
      }
      className="flex items-center gap-3 rounded-lg bg-messo-50 p-2"
    >
      <div
        style={
          color
            ? {
                backgroundColor: colors[color][100],
                color: colors[color][500],
              }
            : {}
        }
        className="rounded-lg bg-messo-100 p-3 text-3xl text-messo-500"
      >
        {icon}
      </div>
      <div>
        <h4
          style={
            color
              ? {
                  color: colors[color][900],
                }
              : {}
          }
          className="font-bold capitalize text-messo-900"
        >
          {value}
        </h4>
        <p className="text-sm capitalize text-gray-500">{property}</p>
      </div>
    </div>
  );
}
