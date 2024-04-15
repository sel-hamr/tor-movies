"use client";
import { Spinner } from "@/assets/icons/spinner-icon";
import ListItems from "@/components/listItem";
import Error404 from "@/components/ui/error404";
import { getMovies } from "@/lib/action";
import useLoadMore from "@/lib/hooks/useLoadMore";
import { MovieYtsType } from "@/types/movie";

interface LoadModeProps {
  initListMovies: MovieYtsType[];
}
function LoadMode({ initListMovies }: LoadModeProps) {
  const { list, ref, isFinished, page } = useLoadMore<MovieYtsType>({
    initList: initListMovies,
    fetch: async (page: number) => {
      return getMovies<MovieYtsType>({ page });
    },
  });
  if (!Array.isArray(list) || list.length === 0) return <Error404 />;
  return (
    <>
      <ListItems listMovies={list} page={page} />
      {!isFinished && (
        <div className="w-8 h-8" ref={ref}>
          <Spinner />
        </div>
      )}
    </>
  );
}

export default LoadMode;
