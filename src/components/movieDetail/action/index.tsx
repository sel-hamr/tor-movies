import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Youtube, Film, ListCollapse } from "lucide-react";
import Link from "next/link";
import { IMDB_SRC, VID_SRC, YOUTUBE_SRC } from "@/constants";

function Action({
  large_cover_image,
  title,
  urlStream,
  yt_trailer_code,
  imdb_code,
}: {
  large_cover_image: string;
  title: string;
  urlStream: string;
  yt_trailer_code: string;
  imdb_code: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[340px]">
        <Image
          src={large_cover_image}
          alt={title}
          className="object-contain w-full  rounded-md"
          fill
        />
      </div>
      <Link href={`${YOUTUBE_SRC}${yt_trailer_code}`} target="_blank">
        <Button className="bg-background-foreground w-full">
          <Youtube className="h-5 w-5 mr-3" />
          <span className="w-28 text-left">Watch Trailer</span>
        </Button>
      </Link>
      <Link href={`${VID_SRC}${urlStream}`} target="_blank">
        <Button className="bg-background-foreground w-full">
          <Film className="h-5 w-5 mr-3" />
          <span className="w-28 text-left">Watch now</span>
        </Button>
      </Link>
      <Link href={`${IMDB_SRC}${imdb_code}`} target="_blank">
        <Button className="bg-background-foreground w-full">
          <ListCollapse className="h-5 w-5 mr-3" />
          <span className="w-28 text-left">more detail</span>
        </Button>
      </Link>
    </div>
  );
}

export default Action;
