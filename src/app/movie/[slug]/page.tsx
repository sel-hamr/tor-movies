import Cast from "@/components/movieDetail/cast";
import CoverBackground from "@/components/movieDetail/coverBackground";
import DetailMovie from "@/components/movieDetail/detailMovie";
import Gallery from "@/components/movieDetail/gallery";
import Info from "@/components/movieDetail/info";
import Intro from "@/components/movieDetail/intro";
import Storyline from "@/components/movieDetail/storyline";
import Loading from "@/components/ui/loading";
import StreamMovie from "@/components/ui/streamMovie";
import { getMovieDetail } from "@/lib/action";
import { MoreMoviesYtsType, MovieYtsType } from "@/types/movie";
import { Suspense } from "react";

async function page({ params }: { params: { slug: string } }) {
  const movieId = params.slug;
  const movie = await getMovieDetail<MovieYtsType & MoreMoviesYtsType>(movieId);
  if (!movie) return <div>error</div>;

  const {
    title,
    rating,
    title_long,
    description_full,
    large_cover_image,
    cast,
    mpa_rating,
    imdb_code,
  } = movie;
  return (
    <div className="flex min-h-screen flex-col items-center">
      <CoverBackground imdb_code={imdb_code} />

      <div className="w-full max-w-7xl mx-auto px-4  -mt-56  mb-10 relative z-10 flex flex-col divide-y gap-7">
        <Intro
          title_long={title_long}
          rating={rating}
          mpa_rating={mpa_rating}
        />
        <div className="w-full h-full pt-6">
          <div className="grid grid-cols-10 grid-rows-6 gap-7 ">
            <div className="col-span-2 row-span-6 ">
              <img
                src={large_cover_image}
                alt={title}
                className="object-contain w-full  rounded-md"
              />
            </div>
            <div className="col-span-6 row-span-4 col-start-3 divide-y gap-3 flex flex-col">
              <DetailMovie {...movie} />
              <div className="flex h-full pt-5 gap-6">
                <div className="flex-1">
                  <Info {...movie} />
                </div>
                <div className="flex-1">
                  <Cast cast={cast} />
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-4 col-start-9 ">
              <Gallery {...movie} />
            </div>
            <div className="col-span-8 row-span-2 col-start-3 row-start-5 text-white border-t border-solid border-white pt-6">
              <Storyline description={description_full} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto h-[750px]">
        <StreamMovie url={`movie/${imdb_code}`} />
      </div>
    </div>
  );
}

export default page;
