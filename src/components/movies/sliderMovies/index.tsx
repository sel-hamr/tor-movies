import Slider from "@/components/slider";
import { getListTopMoviesFromTheMovieDB } from "@/lib/action";
import { MovieTheMoviesDb, MovieYtsType } from "@/types/movie";
import React, { Suspense } from "react";

async function SliderMovies() {
  const data = await getListTopMoviesFromTheMovieDB<{
    results: MovieTheMoviesDb[];
  }>();

  if (!data?.results) return <div>error</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slider listMovies={data.results} />
    </Suspense>
  );
}

export default SliderMovies;
