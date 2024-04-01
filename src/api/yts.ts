import { ParamsListMoviesType } from "./types";

const API_URL = "https://yts.mx/api/v2/";

const getQueryString = (params: any) => {
  const query = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    query.append(key, params[key]);
  });
  return query.toString();
};

export const getMovies = async (params: ParamsListMoviesType) => {
  try {
    const UrlParams = getQueryString(params);
    const response = await fetch(`${API_URL}list_movies.json${UrlParams}`);
    const data = await response.json();
    return data.data.movies;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
