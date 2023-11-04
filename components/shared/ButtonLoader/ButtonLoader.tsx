import React from "react";

type ButtonLoader = {
  text?: string;
  className?: string;
};

export default function ButtonLoader({ text, className }: ButtonLoader) {
  return (
    <div className="flex items-center gap-2">
      <span className="loader"></span>
      <span className={className}>{text ?? "Submitting..."}</span>
    </div>
  );
}
