import React from "react";
import { Input } from "../ui/input";
import SpotlightButton from "../ui/button/spotlight";
import { searchMovie } from "@/lib/action";

function Filter() {
  return (
    <div className="flex flex-col gap-3 w-full bg-background-foreground py-9">
      <form className="flex gap-4 w-3/5 mx-auto max-w-4xl" action={searchMovie}>
        <div className="flex-1">
          <Input
            type="movie name"
            placeholder="Search Term"
            className="h-11"
            name="movie-name"
          />
        </div>
        <div className="w-48">
          <SpotlightButton title="search" />
        </div>
      </form>
    </div>
  );
}

export default Filter;
