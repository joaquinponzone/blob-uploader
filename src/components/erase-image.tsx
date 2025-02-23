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
  const [open, setOpen] = useState(false);

  const handleErase = async () => {
    setLoading(true);
    await eraseImage(image);
    toast({
      title: "Image erased",
      description: "The image has been erased successfully. 🗑️",
    });
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger disabled={loading}>
        <Trash2Icon size={16} className="text-neutral-700 hover:text-red-500" />
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
