import React from "react";

export default function useSlider({ length }: { length: number }) {
  const [index, setIndex] = React.useState<number>(0);
  const handleClick = (index: number) => {
    setIndex(index);
  };

  const handleNext = () => {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return { index, setIndex, handleNext, handlePrev, handleClick };
}
