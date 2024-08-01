import { list } from "@vercel/blob";
import Image from "next/image";
import EraseImage from "./erase-image";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DownloadIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import EditImage from "./edit-image";

export async function Images() {
  async function allImages() {
    const blobs = await list();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return blobs;
  }
  const images = await allImages();

  return (
    <section className="grid gap-4 w-full flex-wrap">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Size</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.blobs.map((image) => {
            return (
              <TableRow key={image.pathname}>
                <TableCell className="font-medium">
                  {(image.size / 1024 / 1024).toFixed(2)} MB
                </TableCell>
                <TableCell>
                  <Link
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {image.pathname}
                  </Link>
                </TableCell>
                <TableCell className="flex gap-4 w-full justify-end">
                  <Link
                    href={image.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <DownloadIcon size={16} />
                  </Link>

                  <EditImage image={image} />
                  <EraseImage image={image} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
