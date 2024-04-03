import { getMovies } from "@/api/yts";
import Filter from "@/components/Filter";
import LoadMode from "@/components/movies/loadMore";
import Slider from "@/components/slider";
import { popularMovies } from "@/data";
import { MovieYtsType } from "@/types/movie";

export default async function Home() {
  const data: MovieYtsType[] = await getMovies({ page: 1 });

  if (!Array.isArray(data)) return <div>error</div>;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Slider listMovies={popularMovies} />
      <Filter />
      <LoadMode initListMovies={data} />
    </main>
  );
}
