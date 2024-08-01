import ImageSkeleton from "@/components/image-skeleton";
import { Images } from "@/components/images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Uploader from "@/components/uploader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-4 pt-20 md:p-12 lg:p-24">
      <Card className="border-0 md:border w-full md:w-[75%] max-w-2xl md:shadow-neutral-400 md:shadow-2xl">
        <CardHeader>
          <CardTitle>Upload your images</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <Uploader />
        </CardContent>
        <CardContent>
          <Suspense
            fallback={
              <div className="grid grid-cols-5">
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
              </div>
            }
          >
            <Images />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}
