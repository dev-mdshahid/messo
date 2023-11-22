import { DietPlanType } from "@/lib/type";
import { useEffect, useState } from "react";

type SingleDietPlanType = {
  ok: boolean;
  plan: DietPlanType;
  message: string;
};

export const useGetSingleDietPlan = (id: string) => {
  const [data, setData] = useState<SingleDietPlanType>();
  const [status, setStatus] = useState<"loading" | "success" | "error">();

  useEffect(() => {
    const getDietPlan = async () => {
      setStatus("loading");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/getDietPlan?id=${id}`,
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
      getDietPlan();
    }
  }, [id]);

  return { data, status };
};
