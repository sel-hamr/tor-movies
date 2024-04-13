import Slider from "@/components/slider";
import { getListTopMoviesFromTheMovieDB, getMovies } from "@/lib/action";
import { MovieTheMoviesDb, MovieYtsType } from "@/types/movie";
import React, { Suspense } from "react";

async function SliderMovies() {
  const data = await getListTopMoviesFromTheMovieDB<{
    results: MovieTheMoviesDb[];
  }>();

  const dd = await getMovies<MovieYtsType>({ page: 1, sort_by: "seeds" });

  if (!data?.results) return <div>error</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slider listMovies={data.results} />
    </Suspense>
  );
}

export default SliderMovies;
