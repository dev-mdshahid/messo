import React from "react";
import { MdOutlineRecommend } from "react-icons/md";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";
import { BeautyCollectedDataType, ProductsType } from "@/lib/type";

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
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-2xl font-semibold text-blue-900">
          <MdOutlineRecommend className="text-3xl" /> Recommended products
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        {products?.length ? (
          <div className="grid p-2">
            {products?.map((product, index) => {
              const { name, img } = product;
              return (
                <ProductPreviewCard
                  key={index}
                  name={name}
                  img={img}
                  index={index}
                  choicelist={data}
                />
              );
            })}
          </div>
        ) : (
          <p className="p-5 text-red-500">
            Sorry! We cannot suggest any product! Consult with your
            dermatologist please!
          </p>
        )}
      </div>
    </div>
  );
}
