import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
interface LoadMoreProps<TypeList> {
  initList: TypeList[];
  fetch: (page: number) => Promise<TypeList[]>;
}

function useLoadMore<T>({ initList, fetch }: LoadMoreProps<T>) {
  const { ref, inView } = useInView();
  const [list, setListMovies] = useState(initList);
  const [page, setPage] = useState(2);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (inView) {
      const fetchData = async () => {
        const data = await fetch(page);
        if (Array.isArray(data) && data.length !== 0) {
          if (data.length !== 0) {
          }
          setListMovies([...list, ...data]);
        } else setIsFinished(true);
        setPage((prev) => prev + 1);
      };
      fetchData();
    }
  }, [inView]);

  return { ref, list, isFinished, page };
}

export default useLoadMore;
