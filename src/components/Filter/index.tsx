import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SelectFilter from "./select";
import { LIST_GENDER, LIST_YEAR, ORDER_BY } from "@/constants/filter";

function Filter() {
  return (
    <div className="flex flex-col gap-3 w-full bg-background-foreground py-9">
      <div className="grid grid-cols-12 grid-rows-2 gap-4 w-3/5 mx-auto max-w-4xl">
        <div className="col-span-9">
          <Input type="movie name" placeholder="Email" className="h-11" />
        </div>
        <div className="col-span-3 col-start-1 row-start-2">
          <SelectFilter items={LIST_GENDER} placeholder="Gender" />
        </div>
        <div className="col-span-3 col-start-4 row-start-2">
          <SelectFilter items={LIST_YEAR} placeholder="Year" />
        </div>
        <div className="col-span-3 col-start-7 row-start-2">
          <SelectFilter items={ORDER_BY} placeholder="Order By" />
        </div>
        <div className="col-span-3 col-start-10 row-start-1">
          <Button type="submit" className="h-11">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
