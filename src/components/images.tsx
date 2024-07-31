import { list } from "@vercel/blob";
import Image from "next/image";
import EraseImage from "./erase-image";

export async function Images() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const images = await allImages();

  return (
    <section className="flex gap-4 w-full flex-wrap">
      {images.blobs.map((image) => {
        return (
          <div key={image.pathname} className="relative inline-block">
            <EraseImage image={image} />
            <Image priority src={image.url} alt="Image" width={100} height={100} />
          </div>
        );
      })}
    </section>
  );
}
