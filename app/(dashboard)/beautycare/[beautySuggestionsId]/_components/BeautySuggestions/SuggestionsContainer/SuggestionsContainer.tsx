import { SuggestionsType } from "@/lib/type";
import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";

type SuggestionsContainerProps = {
  suggestion?: SuggestionsType;
};

export default function SuggestionsContainer({
  suggestion,
}: SuggestionsContainerProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-2xl font-semibold text-blue-900">
          <MdTipsAndUpdates className="text-3xl" /> Suggestions from{" "}
          <span className="">MessO</span>
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <p className="p-5">
          {suggestion ? (
            suggestion?.description
          ) : (
            <span className="text-red-500">
              Sorry! This trait is considered as sensitive. Please talk to your
              dermatologist for proper guideline.
            </span>
          )}
        </p>
      </div>
    </div>
  );
}