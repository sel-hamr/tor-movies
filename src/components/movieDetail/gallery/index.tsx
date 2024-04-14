import React from "react";

import Image from "next/image";
import YouTubeVideo from "@/components/ui/youTubeVideo";

interface GalleryProps {
  yt_trailer_code: string;
  medium_screenshot_image3: string;
  medium_screenshot_image2: string;
  medium_screenshot_image1: string;
  title_english: string;
}

function Gallery({
  yt_trailer_code,
  medium_screenshot_image3,
  medium_screenshot_image2,
  medium_screenshot_image1,
  title_english,
}: GalleryProps) {
  return (
    <>
      <p className="text-white text-2xl mb-4">Gallery</p>
      <div className="grid-cols-2 grid-rows-11 grid h-[370px] gap-1">
        <div className="col-span-2 row-span-4 ">
          <YouTubeVideo embed={yt_trailer_code} />
        </div>
        <div className="relative col-span-1 row-span-3">
          <Image
            src={medium_screenshot_image3}
            alt={title_english}
            fill
            className="object-cover "
          />
        </div>
        <div className="relative col-span-1 row-span-3">
          <Image
            src={medium_screenshot_image2}
            alt={title_english}
            fill
            className="object-cover "
          />
        </div>
        <div className="relative col-span-2 row-span-4">
          <Image
            src={medium_screenshot_image1}
            alt={title_english}
            fill
            className="object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
