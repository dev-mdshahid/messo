import React from "react";
import { MdOutlineRecommend } from "react-icons/md";
import ProductPreviewCard from "./ProductPreviewCard/ProductPreviewCard";

type BeautyProductsProps = {
  products: {
    [key: string]: any;
  }[];
};

export default function BeautyProducts({ products }: BeautyProductsProps) {
  return (
    <div className="mb-5">
      <div className="overflow-hidden rounded-lg border border-blue-100 bg-white">
        <h2 className="flex items-center gap-2 p-5 pb-3 text-2xl font-semibold text-blue-900">
          <MdOutlineRecommend className="text-3xl" /> Recommended products
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <div className="grid p-2">
          {products.map((product, index) => {
            const { name, img } = product;
            return (
              <ProductPreviewCard
                key={index}
                name={name}
                img={img}
                index={index}
                choicelist={{
                  scalpType: "oily",
                  hairConcern: "hairfall",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
