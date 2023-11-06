import React from "react";
import { MdOutlineRecommend } from "react-icons/md";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";
import { BeautyCollectedDataType, ProductsType } from "@/lib/type";
import { BsCartCheck } from "react-icons/bs";
import { BiError } from "react-icons/bi";

type BeautyProductsProps = {
  products?: ProductsType[];
  data: BeautyCollectedDataType;
};

export default function BeautyProducts({
  products,
  data,
}: BeautyProductsProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-lg font-bold text-blue-900 sm:text-xl">
          <BsCartCheck className="text-2xl" /> Recommended products
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        {products?.length ? (
          <div className=" grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product, index) => {
              const { name, img } = product;
              return (
                <ProductPreviewCard
                  key={index}
                  name={name}
                  img={img}
                  index={index}
                  data={data}
                />
              );
            })}
          </div>
        ) : (
          <p className="m-5 flex items-center gap-1 rounded-xl bg-red-100 p-5 text-red-600">
            <BiError size={20} />
            Sorry! We cannot suggest any product! Consult with your
            dermatologist please!
          </p>
        )}
      </div>
    </div>
  );
}
