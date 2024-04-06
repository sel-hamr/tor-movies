import Filter from "@/components/Filter";
import LoadMode from "@/components/movies/loadMore";
import SliderMovies from "@/components/movies/sliderMovies";
import { getMovies } from "@/lib/action";
import { getQuery } from "@/lib/server-utils";
import { MovieYtsType } from "@/types/movie";

export default async function Home() {
  const data: MovieYtsType[] = await getMovies({ page: 1 });

  if (!Array.isArray(data)) return <div>error</div>;
  const keyName = getQuery("name");
  return (
    <main className="flex min-h-screen flex-col items-center" key={keyName}>
      <SliderMovies />
      <Filter />
      <LoadMode initListMovies={data} />
    </main>
  );
}
