import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getColorList } from "@/helpers/getColorList";
import { ExerciseType } from "@/lib/type";
import Image from "next/image";
import React from "react";

type ExerciseDetailModalProps = {
  exercise: ExerciseType;
};

export default function ExerciseDetailModal({
  exercise,
}: ExerciseDetailModalProps) {
  const { target, name, howTo, focusArea, img, video } = exercise;

  const bgColorList = getColorList(100);
  const dotColorList = getColorList(700);
  const textColorList = getColorList(800);

  return (
    <section className="space-y-5">
      {/* Images and videos */}
      <Tabs defaultValue="image">
        <TabsList className="grid w-full grid-cols-2 bg-messo-50 ">
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="image" className="mt-4">
          <Image
            src={`/media/img/exercises/${img}`}
            alt={name + " image"}
            height={600}
            width={600}
            className="w-full rounded-xl border border-messo-50"
          />
        </TabsContent>
        <TabsContent value="video" className="mt-4">
          <iframe
            src={video}
            className="h-[250px] w-full rounded-lg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </TabsContent>
      </Tabs>

      {/* How to section */}
      <h3 className="mb-2 text-lg font-bold text-messo-900">
        Target: <span className=" capitalize">({target})</span>
      </h3>
      <div className="text-gray-60 rounded-xl bg-messo-50 p-5 ">
        <h3 className="mb-2 text-lg font-bold text-messo-900">How To?</h3>
        <ol className="space-y-2 text-sm text-gray-600">
          {howTo.map((step, index) => (
            <li key={step} className="ml-3">
              {index + 1}. {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Focus area */}
      <div>
        <h3 className="mb-3 text-lg font-bold text-messo-900">Focus Area</h3>
        <div className="flex flex-wrap gap-3">
          {focusArea.map((areaName, index) => (
            <div
              style={{
                backgroundColor: bgColorList[index % 15],
                color: textColorList[index % 15],
              }}
              key={index}
              className="flex items-center gap-2 rounded-xl bg-messo-50 px-3 py-1 text-sm capitalize"
            >
              <div
                style={{
                  backgroundColor: dotColorList[index % 15],
                }}
                className="h-2 w-2 rounded-full bg-messo-700"
              ></div>{" "}
              {areaName}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
