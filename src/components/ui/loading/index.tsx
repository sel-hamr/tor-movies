import { Spinner } from "@/assets/icons/spinner-icon";
import { cn } from "@/lib/utils";
import React from "react";

function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-dvw h-dvh flex items-center justify-center", className)}
    >
      <Spinner />
    </div>
  );
}

export default Loading;
