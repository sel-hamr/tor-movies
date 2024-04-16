import { MoreMoviesYtsType, MovieYtsType } from "@/types/movie";
import { Eye } from "lucide-react";
import React from "react";

function DetailMovie({
  title_english,
  rating,
  description_intro,
  like_count,
  year,
  mpa_rating,
  language,
  genres,
}: MovieYtsType & MoreMoviesYtsType) {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex gap-8">
          <p className="text-2xl text-white font-semibold">{title_english}</p>
          <p className="border border-solid border-white px-3 py-[2px] text-white rounded-md">
            IMDb {rating}
          </p>
        </div>
        <p className="text-white font-normal text-lg line-clamp-1	mt-3">
          {description_intro}
        </p>
      </div>
      <div className="md:flex hidden pt-3 divide-x gap-3">
        <div className="flex ">
          <Eye size={24} className="text-white " />
          <p className=" ml-2 text-white">{like_count}</p>
        </div>
        <p className="pl-5 text-white">{year}</p>
        <p className="pl-5 text-white">{mpa_rating}</p>
        <p className="pl-5 text-white">{genres.join(" , ")}</p>
        <p className="pl-5 text-white">{language}</p>
      </div>
    </>
  );
}

export default DetailMovie;
