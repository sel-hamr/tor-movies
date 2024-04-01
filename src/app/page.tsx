import Slider from "@/components/slider";
import { popularMovies } from "@/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider listMovies={popularMovies} />
    </main>
  );
}
