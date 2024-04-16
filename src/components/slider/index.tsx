"use client";
import React from "react";
import SliderBackground from "./slider-background";

import SliderDetail from "./slider-Detail";
import { SliderItems } from "./list";

import useSlider from "./store";

import ActionSlider from "./action";
import { MovieTheMoviesDb } from "@/types/movie";

interface Props {
  listMovies: MovieTheMoviesDb[];
}

function Slider({ listMovies }: Props) {
  const index = useSlider((state) => state.index);

  const movieActive = listMovies[index];

  return (
    <div className="w-full h-[700px] overflow-hidden">
      <SliderBackground
        src={movieActive?.backdrop_path}
        alt={movieActive?.title}
      />
      <div className="absolute top-0 left-0 w-full h-[700px] md:ps-11 ps-2 gap-x-14 z-20 flex items-center justify-center flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <SliderDetail {...movieActive} />
        </div>
        <div className="md:w-1/2 w-full rounded-lg">
          <SliderItems listMovies={listMovies} />
          <ActionSlider />
        </div>
      </div>
    </div>
  );
}

export default Slider;
