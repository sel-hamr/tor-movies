import React from "react";
import { Input } from "../ui/input";
import { searchMovie } from "@/lib/action";
import SubmitButton from "../ui/button/Submit";
import { getQuery } from "@/lib/server-utils";

function Filter() {
  const nameMovies = getQuery("name");
  return (
    <div className="flex flex-col gap-3 w-full bg-background-foreground py-9">
      <form
        className="flex gap-4 md:w-3/5 w-[90%] mx-auto max-w-4xl flex-col md:flex-row"
        action={searchMovie}
      >
        <div className="md:flex-1 h-12">
          <div className="cardWrapper">
            <div className=" absolute inset-[2px] bg-accent">
              <Input
                type="movie name"
                placeholder="Search Term"
                className="h-11"
                name="movie-name"
                defaultValue={nameMovies as string}
              />
            </div>
          </div>
        </div>
        <div className="w-48 h-11 md:h-auto mx-auto md:mx-0">
          <SubmitButton title="search" />
        </div>
      </form>
    </div>
  );
}

export default Filter;
