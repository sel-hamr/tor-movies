import { headers } from "next/headers";

export const getQueryString = (params: any) => {
  const query = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    query.append(key, params[key]);
  });
  return query.toString();
};

export const getQuery = (name: string) => {
  const query = new URLSearchParams(headers()?.get("x-query") || "");
  return query.get(name);
};
