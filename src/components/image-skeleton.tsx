import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function ImageSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[100px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-4 w-[90px]" />
      </div>
    </div>
  );
}
