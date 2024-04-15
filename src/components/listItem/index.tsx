import { MovieYtsType } from "@/types/movie";
import React from "react";
import Item from "./item";

interface ListItemsProps {
  listMovies: MovieYtsType[];
  page: number;
}

function ListItems({ listMovies, page }: ListItemsProps) {
  return (
    <div className="flex gap-7 mx-auto flex-wrap max-w-screen-2xl px-5 my-9 items-center justify-center">
      {listMovies.map((item: MovieYtsType) => {
        return <Item {...item} key={item.id} />;
      })}
    </div>
  );
}

export default ListItems;

39;
