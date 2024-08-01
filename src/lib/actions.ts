"use server";

import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadImage(formData: FormData) {
  const imageFile = formData.get("image") as File;
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  revalidatePath("/");
  return blob;
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
