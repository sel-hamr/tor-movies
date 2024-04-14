"use server";

import { redirect } from "next/navigation";
import { getQuery, getQueryString } from "./server-utils";
import { ParamsListMoviesType } from "@/types";
import { MoreMoviesYtsType, MovieYtsType } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = "https://yts.mx/api/v2/";
const optionsFetchFromTheMovieDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.THE_MOVIESDB_API_KEY}`,
  },
};

export const getListTopMoviesFromTheMovieDB = async <T>() => {
  const url = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;

  try {
    const response = await fetch(url, optionsFetchFromTheMovieDB);
    const data = await response.json();
    const listMovies = [];
    for (let i = 0; i < data.results.length; i++) {
      const movie = await getMovies<MovieYtsType>({
        page: 1,
        query_term: data.results[i].title,
      });
      if (movie?.[0]?.id) {
        listMovies.push({ ...data.results[i], id: movie?.[0].id });
      }
    }
    return { results: listMovies } as T;
  } catch (error) {
    console.error("error:" + error);
    return undefined;
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

export const getMovieDetail = async <T>(MovieId: string) => {
  if (!MovieId) {
    return undefined;
  }
  try {
    const response = await fetch(
      `${API_URL}movie_details.json?movie_id=${MovieId}&with_images=true&with_cast=true`
    );
    const data = await response.json();
    return data.data.movie as T;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getMovieImages = async (MovieId: string) => {
  if (!MovieId) {
    return undefined;
  }
  const url = `${BASE_URL}/movie/${MovieId}/images`;
  try {
    const response = await fetch(url, optionsFetchFromTheMovieDB);
    const data = await response.json();
    if (data.backdrops.length === 0) return undefined;
    return data.backdrops as { file_path: string }[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getMovieVideos = async (MovieId: string) => {
  if (!MovieId) {
    return undefined;
  }
  const url = `${BASE_URL}/movie/${MovieId}/videos`;
  try {
    const response = await fetch(url, optionsFetchFromTheMovieDB);
    const data = await response.json();
    if (data.results.length === 0) return undefined;
    return data.results as { key: string; site: string }[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getMovieRecommendations = async (MovieId: string) => {
  if (!MovieId) {
    return undefined;
  }
  const url = `${API_URL}/movie_suggestions.json?movie_id=${MovieId}`;
  try {
    const response = await fetch(url, optionsFetchFromTheMovieDB);
    const data = await response.json();
    return data?.data.movies as MovieYtsType[] | undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
