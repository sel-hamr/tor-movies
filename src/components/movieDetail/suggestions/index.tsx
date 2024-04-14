import { getMovieRecommendations } from "@/lib/action";
import React from "react";
import Card from "./card";

async function Suggestions({ imdb_code }: { imdb_code: string }) {
  const movies = await getMovieRecommendations(imdb_code);
  if (!movies) return null;
  return (
    <div>
      <div className="border-y border-white border-solid py-4 flex justify-between items-center">
        <p className="text-white text-xl font-semibold">Suggestions</p>
      </div>
      <div className="flex gap-6 items-center justify-center flex-wrap mt-6">
        {movies.map((movie, key: number) => (
          <Card key={key} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
