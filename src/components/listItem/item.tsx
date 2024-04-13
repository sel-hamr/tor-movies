import { MovieYtsType } from "@/types/movie";
import React from "react";
import CardMovie, {
  CardDetail,
  CardImage,
  CardIntro,
} from "../ui/card/CardMovie";
import { Star } from "lucide-react";
import Cart3D, { ItemCard3D } from "../card3D";
import { Button } from "../ui/button";
import Link from "next/link";

function Item(props: MovieYtsType) {
  const {
    small_cover_image,
    title,
    large_cover_image,
    runtime,
    year,
    language,
    summary,
    id,
  } = props;
  return (
    <Link href={`/movie/${id}`}>
      <CardMovie>
        <Cart3D>
          <CardImage
            src={large_cover_image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={small_cover_image}
          />
          <ItemCard3D>
            <CardDetail className="flex flex-col gap-4">
              <>
                <div
                  className="bg-yellow-400  py-[2px] px-2 text-background-foreground font-bold rounded self-end first-letter:uppercase"
                  style={{ transform: "translateZ(90px)" }}
                  id="language"
                >
                  {language}
                </div>

                <h1 className="text-xl font-semibold text-white line-clamp-1 text-center">
                  {title}
                </h1>
                <p
                  className=" text-white line-clamp-6 font-semibold  text-center"
                  style={{ transform: "translateZ(75px)" }}
                >
                  {summary}
                </p>
                <Button
                  className="mt-auto mb-3"
                  style={{ transform: "translateZ(100px)" }}
                >
                  <span>Watch Now</span>
                </Button>
              </>
            </CardDetail>
          </ItemCard3D>
        </Cart3D>

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

export default Item;
