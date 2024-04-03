import { MovieYtsType } from "@/types/movie";
import React from "react";
import Item from "./item";

interface ListItemsProps {
  listMovies: MovieYtsType[];
}

function ListItems({ listMovies }: ListItemsProps) {
  return (
    <div className="flex gap-5 mx-auto flex-wrap max-w-6xl px-5 my-9 items-center justify-center">
      {listMovies.map((item: MovieYtsType) => {
        return <Item {...item} key={item.id} />;
      })}
    </div>
  );
}

export default ListItems;
