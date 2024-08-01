import { list } from "@vercel/blob";
import Image from "next/image";
import EraseImage from "./erase-image";

export async function Images() {
  async function allImages() {
    const blobs = await list();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return blobs;
  }
  const images = await allImages();

  return (
    <section className="flex gap-4 w-full flex-wrap">
      {images.blobs.map((image) => {
        return (
          <div key={image.pathname} className="relative inline-block">
            <EraseImage image={image} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt="image stored in the cloud"
              className="rounded-xl h-[100px] w-[100px]"
            />
            <p className="text-neutral-500 truncate w-[100px]">
              {image.pathname}
            </p>
          </div>
        );
      })}
    </section>
  );
}
