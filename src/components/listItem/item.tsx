import { MovieYtsType } from "@/types/movie";
import React from "react";
import CardMovie, { CardImage, CardIntro } from "../ui/card/CardMovie";
import { generateImagePath } from "@/lib/utils";
import { Star } from "lucide-react";

function Item(props: MovieYtsType) {
  const { small_cover_image, title, large_cover_image, runtime, year } = props;
  return (
    <CardMovie>
      <CardImage
        src={large_cover_image}
        alt={title}
        fill
        placeholder="blur"
        blurDataURL={small_cover_image}
      />
      <CardIntro className="flex flex-col justify-center gap-1">
        <h1 className="text-base font-semibold text-white line-clamp-1">
          {title}
        </h1>
        <div className="flex items-center justify-between text-white">
          <div className="text-xs font-semibold">
            {year}
            <span className="ms-1 text-white/40"> | {runtime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-yellow-400">
              <Star size={16} className=" fill-current" />
              <span className="text-sm font-semibold">8.5</span>
            </div>
          </div>
        </div>
      </CardIntro>
    </CardMovie>
  );
}

export default Item;
