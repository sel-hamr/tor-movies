import { MovieYtsType } from "@/types/movie";
import { ParamsListMoviesType } from "./types";

const API_URL = "https://yts.mx/api/v2/";

const getQueryString = (params: any) => {
  const query = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    query.append(key, params[key]);
  });
  return query.toString();
};

export const getMovies = async <T>(params: ParamsListMoviesType) => {
  const newParams = { ...params, sort_by: params.sort_by || "peers" };
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

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${API_URL}list_movies.json?sort_by=rating`);
    const data = await response.json();
    return data.data.movies;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
