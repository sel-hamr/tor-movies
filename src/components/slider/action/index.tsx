import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import useSlider from "../store";

function ActionSlider() {
  const { handleNext, handlePrev, index } = useSlider((state) => state);
  const canGoNext = index < 19;
  const canGoPrev = index > 0;
  return (
    <div className="w-full h-11 mt-3 ps-2 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={!canGoPrev}
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={!canGoNext}
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="h-[1px] w bg-white flex-1"></div>
      <p className="text-white pe-3 font-semibold">{`${index + 1} / ${20}`}</p>
    </div>
  );
}

export default ActionSlider;
