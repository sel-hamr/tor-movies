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

export function decimalToBase5(number: number) {
  if (number === 0) {
    return 0;
  }

  let result: string = "";
  while (number > 0) {
    let remainder: number = number % 5;
    result = remainder + result;
    number = Math.floor(number / 5);
  }
  return parseInt(result);
}
