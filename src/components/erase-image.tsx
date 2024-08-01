"use client";

import { eraseImage } from "@/lib/actions";
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
import { Trash2Icon, X } from "lucide-react";

export default function EraseImage({ image }: { image: { url: string } }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleErase = async () => {
    setLoading(true);
    await eraseImage(image);
    toast({
      title: "Image erased",
      description: "The image has been erased successfully. 🗑️",
    });
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger
        disabled={loading}
        className="absolute top-0 right-0 bg-transparent text-white border-none text-xs p-1 rounded-full z-10 cursor-pointer hover:bg-neutral-500/50 hover:text-red-200 animate-in animate-out duration-500"
      >
        <X size={24} />
        {/* <Trash2Icon size={20} /> */}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="destructive"
            disabled={loading}
            onClick={handleErase}
          >
            {loading ? "Erasing..." : "Erase"}
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
