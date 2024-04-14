import { getMovieImages } from "@/lib/action";
import React from "react";
import List from "./list";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { generateImagePath } from "@/lib/utils";
import { IMAGE_BLUR } from "@/constants/imageBlur";

async function Images({ imdb_code }: { imdb_code: string }) {
  const images = await getMovieImages(imdb_code);
  if (!images) return null;
  return (
    <List className="mt-6">
      {images.map((image, key: number) => (
        <CarouselItem key={key}>
          <div className="relative w-full h-[500px] ">
            <Image
              src={generateImagePath({ src: image.file_path })}
              alt={image.file_path}
              fill
              className="object-cover  rounded-md"
            />
          </div>
        </CarouselItem>
      ))}
    </List>
  );
}

export default Images;
