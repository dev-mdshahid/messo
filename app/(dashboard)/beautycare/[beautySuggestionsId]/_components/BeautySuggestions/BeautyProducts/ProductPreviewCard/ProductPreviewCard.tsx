import React from "react";
import { BiSearchAlt } from "react-icons/bi";

type ProductPreviewCardProps = {
  name: string;
  img: string;
  index: number;
  choicelist: {
    [key: string]: any;
  };
};

export default function ProductPreviewCard({
  name,
  img,
  index,
  choicelist,
}: ProductPreviewCardProps) {
  const {
    type,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  } = choicelist;
  return (
    <div className=" m-3 flex cursor-pointer items-center justify-between gap-4 rounded-lg border bg-white p-2 transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        <h1 className="pl-1 text-2xl text-blue-900 opacity-70">{index + 1}</h1>
        <img
          src={img}
          alt={name}
          className="h-[80px] w-[80px] rounded-lg shadow"
        />
        <div className="col-span-3 text-gray-600">
          <h3 className="text-lg font-semibold text-blue-900">{name} </h3>
          <div className="mb-2 mt-1.5 flex gap-4 text-sm">
            <p className="">
              <span className="font-semibold">Type:</span> {type}
            </p>
            {scalpType ? (
              <p className="">
                <span className="font-semibold">Scalp type:</span> {scalpType}
              </p>
            ) : (
              ""
            )}
            {hairConcern ? (
              <p className="">
                <span className="font-semibold">Hair concern:</span>{" "}
                {hairConcern}
              </p>
            ) : (
              ""
            )}
            {/* {skinPart ? (
          <p className="">
            <span className="font-semibold">Skin part:</span> {skinPart}
          </p>
        ) : (
          ''
        )} */}
            {faceType ? (
              <p className="">
                <span className="font-semibold">Face type:</span> {faceType}
              </p>
            ) : (
              ""
            )}
            {faceConcern ? (
              <p className="">
                <span className="font-semibold">Face concern:</span>{" "}
                {faceConcern}
              </p>
            ) : (
              ""
            )}
            {bodyType ? (
              <p className="">
                <span className="font-semibold">Body type:</span> {bodyType}
              </p>
            ) : (
              ""
            )}
            {bodyConcern ? (
              <p className="">
                <span className="font-semibold">Body concern:</span>{" "}
                {bodyConcern}
              </p>
            ) : (
              ""
            )}
          </div>
          {/* <p className="font-bold text-blue-900">Details: </p> */}
        </div>
      </div>
      <div className="child:whitespace-nowrap flex items-center gap-3">
        <a
          href={`https://www.google.com/search?q=${name.split(" ").join("+")}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg bg-blue-100 px-2 py-1 text-blue-500 transition hover:scale-105"
        >
          <BiSearchAlt />
          <span className="text-sm font-semibold">Search this product</span>
        </a>
      </div>
    </div>
  );
}
