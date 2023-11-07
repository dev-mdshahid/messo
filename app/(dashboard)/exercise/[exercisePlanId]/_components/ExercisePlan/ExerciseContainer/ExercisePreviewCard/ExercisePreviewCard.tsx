import React from "react";
import { RiMessage3Fill } from "react-icons/ri";
import Image from "next/image";
import { ExerciseType } from "@/lib/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExerciseDetailModal from "../ExerciseDetailModal/ExerciseDetailModal";
import { BiCommentDetail, BiDetail } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type ExercisePreviewCardProps = {
  howLong?: number;
  rep?: number;
  exercise: ExerciseType;
  index: number;
};

export default function ExercisePreviewCard({
  howLong,
  rep,
  exercise,
  index,
}: ExercisePreviewCardProps) {
  const { target, name } = exercise;
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-messo-100 bg-white p-2 transition hover:shadow-lg">
          <div className="flex items-center gap-4">
            <h1 className="pl-2 text-2xl font-bold text-messo-900/60">
              {index + 1}
            </h1>

            <Image
              src={`https://res.cloudinary.com/dfo9gj4ce/image/upload/v1699319206/MessO/gcoxwm9qg1etxugt0ycs.gif`}
              alt={name}
              width={70}
              height={70}
              className="h-16 w-16 rounded-lg"
            />
            <div className="grid gap-1">
              <h2 className=" font-bold capitalize text-messo-900/80">
                {name}
              </h2>
              <div className="flex items-center gap-5 text-sm font-semibold capitalize text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-messo-900"></div>{" "}
                  {target}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-messo-700"></div>{" "}
                  {rep ? ` X ${rep}` : `${howLong}s`}
                </div>
              </div>
            </div>
          </div>
          <div className="child:whitespace-nowrap flex items-center gap-3">
            <HoverCard>
              <HoverCardTrigger>
                <div className="mr-2 flex items-center gap-2 rounded-xl  px-2 py-2 text-messo-900 transition hover:scale-105">
                  <BsTextParagraph size={30} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit py-2">
                <div className="text-sm font-medium text-messo-900">
                  See full workout
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="no-scrollbar max-h-[600px] overflow-y-auto">
        {/* Dialog header */}
        <DialogHeader>
          <DialogTitle className="font-bold capitalize text-messo-900">
            {name} ({rep ? ` X ${rep}` : `${howLong}s`})
          </DialogTitle>
          <DialogDescription>
            Here are the details about this workout
          </DialogDescription>
        </DialogHeader>

        {/* Dialog content */}
        <ExerciseDetailModal exercise={exercise} />
      </DialogContent>
    </Dialog>
  );
}
