import React from "react";
import { Skeleton } from "./ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

export default function ImagesSkeleton() {
  return (
    <div className="w-full h-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Size</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((image, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[150px]" />
                </TableCell>
                <TableCell className="flex gap-2 w-full justify-end">
                  <Skeleton className="h-4 w-[25px]" />
                  <Skeleton className="h-4 w-[25px]" />

                  <Skeleton className="h-4 w-[25px]" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
