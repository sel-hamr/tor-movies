import { MoreMoviesYtsType, MovieYtsType } from "@/types/movie";
import moment from "moment";
import React from "react";

function Info({
  genres,
  language,
  runtime,
  date_uploaded,
  mpa_rating,
  title,
}: MovieYtsType & MoreMoviesYtsType) {
  return (
    <div className="flex flex-col h-full">
      <p className="text-2xl font-semibold mb-6 text-white">Details :</p>
      <div className="flex flex-col gap-3 justify-between h-full">
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold">name :</p>
          <p className="text-textColor-secondary">{title}</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold">MPA rating :</p>
          <p className="text-textColor-secondary">{mpa_rating}</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold">Release Date :</p>
          <p className="text-textColor-secondary">
            {moment(date_uploaded).format("MMM Do YY")}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold">Runtime :</p>
          <p className="text-textColor-secondary">{runtime} min</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold">Language :</p>
          <p className="text-textColor-secondary">{language}</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white font-semibold w-[90px]">Genres :</p>
          <p className="text-textColor-secondary">{genres.join(" , ")}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
