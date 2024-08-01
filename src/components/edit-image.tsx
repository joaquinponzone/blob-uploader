"use client";

import { editImage, eraseImage } from "@/lib/actions";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { PencilIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ListBlobResultBlob } from "@vercel/blob";

export default function EditImage({ image }: { image: ListBlobResultBlob }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(image.pathname);

  const handleEdit = async () => {
    setLoading(true);
    await editImage({
      image,
      fileName,
    });
    toast({
      title: "Image erased",
      description: "The image has been erased successfully. 🗑️",
    });
    setLoading(false);
    setOpen(false);
  };

  const handleChangeFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger disabled={loading}>
        <PencilIcon
          size={16}
          className="text-neutral-700 hover:text-blue-500"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            <Input
              type="text"
              name="fileName"
              placeholder="File name"
              onChange={handleChangeFileName}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button type="button" disabled={loading} onClick={handleEdit}>
            {loading ? "Editing..." : "Edit"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" disabled={loading}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
