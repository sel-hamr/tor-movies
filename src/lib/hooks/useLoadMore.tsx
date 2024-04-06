import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
interface LoadMoreProps<TypeList> {
  initList: TypeList[];
  fetch: (page: number) => Promise<TypeList[]>;
}

function useLoadMore<T>({ initList, fetch }: LoadMoreProps<T>) {
  const { ref, inView } = useInView();
  const [list, setListMovies] = useState(initList);
  const [isFinished, setIsFinished] = useState(false);
  const page = useRef(2);

  useEffect(() => {
    if (inView) {
      const fetchData = async () => {
        const data = await fetch(page.current);
        if (Array.isArray(data)) {
          if (data.length !== 0) {
          }
          setListMovies([...list, ...data]);
        } else setIsFinished(true);
        ++page.current;
      };
      fetchData();
    }
  }, [inView]);

  return { ref, list, isFinished };
}

export default useLoadMore;
