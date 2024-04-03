import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface CardMovieProps {
  children: React.ReactNode;
  className?: string;
}

function CardMovie(props: CardMovieProps) {
  const { children, className } = props;
  return (
    <div className={cn("h-[465px] w-[280px] cursor-pointer", className)}>
      {children}
    </div>
  );
}

export const CardImage = (props: ImageProps) => {
  return (
    <div className="h-[400px] w-full relative rounded-lg overflow-hidden">
      <Image {...props} />
    </div>
  );
};

export const CardIntro = (props: CardMovieProps) => {
  const { children, className } = props;
  return <div className={cn("my-1 h-[65px]", className)}>{children}</div>;
};

export default CardMovie;
