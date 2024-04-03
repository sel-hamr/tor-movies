"use client";
import { Spinner } from "@/assets/icons/spinner-icon";
import ListItems from "@/components/listItem";
import useLoadMore from "@/lib/hooks/useLoadMore";
import { MovieYtsType } from "@/types/movie";
import { getMovies } from "@/api/yts";
interface LoadModeProps {
  initListMovies: MovieYtsType[];
}
function LoadMode({ initListMovies }: LoadModeProps) {
  const { list, ref } = useLoadMore<MovieYtsType>({
    initList: initListMovies,
    fetch: async (page: number) => {
      return getMovies<MovieYtsType>({ page });
    },
  });
  return (
    <>
      <ListItems listMovies={list} />
      <div className="w-8 h-8" ref={ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMode;
