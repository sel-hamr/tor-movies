"use server";

import { redirect } from "next/navigation";
import { getQuery, getQueryString } from "./server-utils";
import { ParamsListMoviesType } from "@/types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = "https://yts.mx/api/v2/";

export const getListTopMoviesFromTheMovieDB = async <T>() => {
  const url = `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.THE_MOVIESDB_API_KEY}`,
    },
  };
  try {
    const response = await fetch(url, options);
    return (await response.json()) as T;
  } catch (error) {
    console.error("error:" + error);
  }
};

export const searchMovie = async (formData: FormData) => {
  const searchKey = formData.get("movie-name");
  redirect(`/?name=${searchKey}`);
};

export const getMovies = async <T>(params: ParamsListMoviesType) => {
  const nameMovies = getQuery("name");
  const newParams = {
    ...params,
    sort_by: params.sort_by || "like_count",
  };
  if (nameMovies) {
    newParams.query_term = nameMovies;
  }
  try {
    const UrlParams = getQueryString(newParams);
    const response = await fetch(`${API_URL}list_movies.json?${UrlParams}`);
    const data = await response.json();
    return data.data.movies as T[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
