import Card from "@/components/ui/card";
import useSlider from "../store";
import { motion } from "framer-motion";

interface ListItemsProps {
  listMovies: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export function SliderItems({ listMovies }: ListItemsProps) {
  const { index, handleClick } = useSlider((state) => state);
  return (
    <div className="w-full ">
      <div className="w-full h-[380px]  flex  items-center overflow-x-hidden ">
        <motion.div
          animate={{ x: -(index * 270) }}
          transition={{ duration: 0.5 }}
          className=" flex  items-center w-full"
        >
          {listMovies?.map((movie, key) => (
            <Card
              key={key}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              original_language={movie.original_language}
              release_date={movie.release_date}
              isActive={index === key}
              handleClick={() => {
                handleClick(key);
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
