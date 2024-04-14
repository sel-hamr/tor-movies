import { MovieYtsType } from "@/types/movie";
import React from "react";
import CardMovie, {
  CardDetail,
  CardImage,
  CardIntro,
} from "@/components/ui/card/CardMovie";
import { Star } from "lucide-react";
import Cart3D, { ItemCard3D } from "@/components/card3D";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function Card(props: MovieYtsType) {
  const {
    small_cover_image,
    title,
    large_cover_image,
    medium_cover_image,
    runtime,
    year,
    language,
    summary,
    id,
  } = props;
  return (
    <Link href={`/movie/${id}`}>
      <CardMovie>
        <div className="relative">
          <CardImage
            src={large_cover_image || medium_cover_image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={small_cover_image}
          />
        </div>

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
    </Link>
  );
}

export default Card;
