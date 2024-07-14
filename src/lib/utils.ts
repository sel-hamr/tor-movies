import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GenerateImagePathParams {
  src: string;
  baseURL?: string;
  searchParams?: string | string[][] | Record<string, string> | URLSearchParams;
  isYts?: boolean;
}
export function generateImagePath(params: GenerateImagePathParams) {
  const { src, searchParams, isYts } = params;
  const query = new URLSearchParams(searchParams);

  const api_url = isYts
    ? "https://img.yts.mx/assets/images/movies"
    : "https://image.tmdb.org/t/p/original";

  let url = `${api_url}${src}`;

  if (query.toString()) url += `?${query.toString()}`;

  return url;
}

export function convertRatingToBase5(ratingOutOf10: number): number {
  if (ratingOutOf10 < 0 || ratingOutOf10 > 10) {
    throw new Error("Rating must be between 0 and 10.");
  }

  return ratingOutOf10 / 2;
}
