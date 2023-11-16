import { Skeleton } from "@/components/ui/skeleton";
import { ColorType } from "@/lib/type";
import colors from "tailwindcss/colors";

type FoodPreviewCardSkeletonProps = {
  color?: ColorType;
};

export default function FoodPreviewCardSkeleton({
  color,
}: FoodPreviewCardSkeletonProps) {
  return (
    <div className="no-scrollbar grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 overflow-x-auto rounded-xl bg-white p-3 text-left hover:shadow-lg">
      <Skeleton className="h-12 w-12 rounded-full bg-messo-100" />
      <div className="w-full max-w-[500px]">
        <Skeleton className="h-5 rounded-xl bg-messo-100" />

        <h3 className="mt-2 flex items-center gap-2 text-xs text-gray-600">
          <Skeleton className="flex items-center gap-1 rounded-xl bg-messo-100  px-2 py-1">
            <Skeleton className="block h-3 w-3 rounded-full"></Skeleton>
            <Skeleton className="h-2 w-6 rounded-xl" />
          </Skeleton>
          <Skeleton className="flex items-center gap-1 rounded-xl bg-messo-100  px-2 py-1">
            <Skeleton className="block h-3 w-3 rounded-full"></Skeleton>
            <Skeleton className="h-2 w-6 rounded-xl" />
          </Skeleton>
        </h3>
      </div>
      <div className="ml-auto hidden items-center gap-3 sm:flex">
        <div className="mr-2 hidden rounded-xl px-2  py-2 transition hover:scale-105 sm:block">
          <Skeleton className="h-10 w-10 rounded-xl bg-messo-100" />
        </div>
      </div>
    </div>
  );
}
