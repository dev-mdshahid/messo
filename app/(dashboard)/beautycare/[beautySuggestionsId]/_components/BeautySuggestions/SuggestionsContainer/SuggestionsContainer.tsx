import { SuggestionsType } from "@/lib/type";
import React from "react";
import { BiError } from "react-icons/bi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

type SuggestionsContainerProps = {
  suggestion?: SuggestionsType;
};

export default function SuggestionsContainer({
  suggestion,
}: SuggestionsContainerProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-lg font-bold text-blue-900 sm:text-xl">
          <HiOutlineClipboardCheck className="text-2xl" /> Suggestions from
          MessO
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <p className="m-5 rounded-xl bg-messo-50 p-5 text-sm leading-relaxed text-messo-900">
          {suggestion ? (
            suggestion?.description
          ) : (
            <p className="m-5 flex items-center gap-1 rounded-xl bg-red-100 p-5 text-red-600">
              <BiError size={20} />
              Sorry! This trait is considered as sensitive. Please talk to your
              dermatologist for proper guideline.
            </p>
          )}
        </p>
      </div>
    </div>
  );
}
