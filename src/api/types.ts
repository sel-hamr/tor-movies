export interface ParamsListMoviesType {
  limit?: number;
  page?: number;
  quality?: string;
  minimum_rating?: number;
  query_term?: string;
  genre?: string;
  sort_by?: string;
  order_by?: string;
  with_rt_ratings?: boolean;
}
