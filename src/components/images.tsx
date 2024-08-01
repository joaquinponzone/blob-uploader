import EraseImage from "./erase-image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import EditImage from "./edit-image";
import { allImages } from "@/lib/actions";

export async function Images() {
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
