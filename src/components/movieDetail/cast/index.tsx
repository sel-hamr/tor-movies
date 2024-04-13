import { CastType } from "@/types/movie";
import Image from "next/image";
import React from "react";

function Cast({ cast }: { cast: CastType[] }) {
  return (
    <div className="flex flex-col h-full">
      <p className="text-2xl font-semibold mb-6 text-white">Cast :</p>
      <div className="flex flex-col gap-3">
        {cast.map((actor) => (
          <div key={actor.imdb_code} className="flex gap-4 items-center">
            <Image
              src={actor.url_small_image}
              alt={actor.name}
              width={45}
              height={45}
              className="rounded-full"
            />
            <p className="text-white font-semibold">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
