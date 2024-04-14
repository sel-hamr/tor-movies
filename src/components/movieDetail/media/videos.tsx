import { getMovieVideos } from "@/lib/action";
import React from "react";
import List from "./list";
import { CarouselItem } from "@/components/ui/carousel";
import YouTubeVideo from "@/components/ui/youTubeVideo";

async function Videos({ imdb_code }: { imdb_code: string }) {
  const videos = await getMovieVideos(imdb_code);
  if (!videos) return null;
  return (
    <List className="mt-6">
      {videos.map((video, key: number) => (
        <CarouselItem key={key}>
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <YouTubeVideo embed={video.key} className=" max-w-[720px] h-auto" />
          </div>
        </CarouselItem>
      ))}
    </List>
  );
}

export default Videos;
