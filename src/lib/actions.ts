"use server";

import { del, list, ListBlobResultBlob, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { delay } from "./utils";

export async function allImages() {
  "use server";
  const blobs = await list();
  await delay(2000);
  return blobs;
}

export async function uploadImage(formData: FormData) {
  const imageFile = formData.get("image") as File;
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  revalidatePath("/");
  return blob;
}

export async function editImage({
  image,
  fileName,
}: {
  image: ListBlobResultBlob;
  fileName: string;
}) {
  if (fileName !== null) {
    await put(image.pathname, fileName, {
      access: "public",
    });
  }
  revalidatePath("/");
}

export async function eraseImage(image: { url: string }) {
  await del(image.url);
  revalidatePath("/");
}

export async function callThirdPartyAPI({
  status = "start",
}: {
  status: string;
}) {
  await fetch("https://example.com", {
    method: "POST",
    body: JSON.stringify({ status }),
    headers: {
      "content-type": "application/json",
    },
  });
}
