import { FoodType } from "@/lib/type";
import { useEffect, useState } from "react";

type SingleFoodResponseType = {
  ok: boolean;
  food: FoodType;
  message: string;
};

export const useGetSingleFood = (id: string) => {
  const [data, setData] = useState<SingleFoodResponseType>();
  const [status, setStatus] = useState<"loading" | "success" | "error">();

  useEffect(() => {
    const getSingleFood = async () => {
      setStatus("loading");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/getSingleFood?id=${id}`,
      );
      const data = await res.json();

      if (data.ok) {
        setData(data);
        setStatus("success");
      } else {
        setStatus("error");
      }
    };
    if (id) {
      getSingleFood();
    }
  }, [id]);

  return { data, status };
};
