import { VID_SRC } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

function StreamMovie({ url, className }: { url: string; className?: string }) {
  return (
    <iframe
      src={`${VID_SRC}${url}`}
      className={cn("w-full h-full", className)}
      loading="lazy"
    />
  );
}

export default StreamMovie;
