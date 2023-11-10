import React from "react";
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
import { BsTextParagraph } from "react-icons/bs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ExerciseDetailCard from "../ExerciseDetailCard/ExerciseDetailCard";

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
  const { target, name, img } = exercise;
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg border border-messo-100 bg-white p-2 transition hover:shadow-lg">
          <div className="flex items-center gap-4">
            <h1 className="pl-2 text-2xl font-bold text-messo-900/60">
              {index + 1}
            </h1>

            <Image
              src={`/media/img/exercises/${img}`}
              alt={name}
              width={70}
              height={70}
              className="h-16 w-16 rounded-lg"
            />
            <div className="grid gap-1">
              <h2 className="text-left font-bold capitalize text-messo-900/80 sm:font-bold">
                {name}
              </h2>
              <div className="flex items-center gap-5 text-sm capitalize text-gray-500 sm:font-semibold">
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
          <div className="flex items-center gap-3">
            <HoverCard>
              <HoverCardTrigger>
                <div className="mr-2 hidden rounded-xl px-2  py-2 text-messo-900 transition hover:scale-105 sm:block">
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
      <DialogContent className="no-scrollbar max-h-[100dvh] overflow-y-auto sm:max-h-[600px]">
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
        <ExerciseDetailCard exercise={exercise} />
      </DialogContent>
    </Dialog>
  );
}
