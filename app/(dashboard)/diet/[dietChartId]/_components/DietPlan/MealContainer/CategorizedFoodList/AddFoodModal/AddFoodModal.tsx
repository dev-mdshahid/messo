import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import FoodPreviewCard from "../../FoodPreviewCard/FoodPreviewCard";
import { toast } from "@/components/ui/use-toast";
import FoodPreviewCardSkeleton from "../../FoodPreviewCard/FoodPreviewCardSkeleton";
import { MdOutlineNoFood } from "react-icons/md";

type AddFoodModalProps = {
  category:
    | "carbohydrate"
    | "protein"
    | "veg_protein"
    | "fat"
    | "vegetables"
    | "fruits"
    | "liquid";
};

export default function AddFoodModal({ category }: AddFoodModalProps) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState<boolean>();

  const foodCategoryMap = {
    carbohydrate: "whole-grain",
    protein: "lean-protein",
    veg_protein: "veg_protein",
    fat: "fat",
    vegetables: "vegetables",
    fruits: "fruit",
    liquid: "liquid",
  };
  const [selectedCategory, setSelectedCategory] = useState(
    foodCategoryMap[category],
  );

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/getAllFood?category=${selectedCategory}`;
        const stream = await fetch(url);
        const res = await stream.json();

        if (res.ok) {
          setFoods(res.foods);
        } else {
          toast({
            variant: "destructive",
            description: res.message,
          });
        }
        setLoading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Couldn't connect the server!",
        });
        setLoading(false);
      }
    };

    fetchFoods();
  }, [selectedCategory]);

  console.log(selectedCategory);
  return (
    <section>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="whole-grain">Carbohydrate</SelectItem>
              <SelectItem value="lean-protein">Protein</SelectItem>
              <SelectItem value="veg_protein">Veg protein</SelectItem>
              <SelectItem value="fat">Fat</SelectItem>
              <SelectItem value="vegetable">Vegetable</SelectItem>
              <SelectItem value="fruit">Fruit</SelectItem>
              <SelectItem value="liquid">Liquid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Search bar */}
        <Input type="text" placeholder="Search food ..." />
      </div>

      {/* displaying fetch result */}
      {loading ? (
        <div className="mx-auto w-fit pt-5">
          <span className="loader-messo"></span>
        </div>
      ) : foods.length ? (
        <div className="mt-5 grid gap-3">
          {foods.map((food, index) => (
            <FoodPreviewCard key={index} addable index={index} food={food} />
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center py-10 text-center text-lg font-semibold text-messo-900/60">
          <MdOutlineNoFood className={"mb-2 text-3xl"} />
          <p>Sorry! No food found!</p>
        </div>
      )}
    </section>
  );
}
