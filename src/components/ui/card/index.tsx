import { generateImagePath } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { Star } from "lucide-react";

interface CardProps {
  title: string;
  poster_path: string;
  original_language: string;
  release_date: string;
  isActive?: boolean;
  vote_average: number;
  handleClick?: () => void;
}

function Card({
  title,
  poster_path,
  original_language,
  release_date,
  isActive,
  vote_average,
  handleClick,
}: CardProps) {
  const rating = vote_average.toFixed(2);
  return (
    <motion.div
      className="w-[230px] shrink-0 h-[330px] bg-black rounded-lg shadow-lg relative mx-5 cursor-pointer"
      onClick={handleClick}
      style={{ scale: isActive ? "1.1" : "1" }}
    >
      <motion.div
        className="absolute w-full h-full top-0 left-0 "
        style={{ opacity: isActive ? "1" : "0.7" }}
      >
        <Image
          src={generateImagePath({ src: poster_path })}
          fill
          className="object-cover rounded-lg "
          alt={title}
        />
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-t from-[#24262866] to-[#24262814]"></div>
      </motion.div>
      <div className="z-10 absolute bottom-2 mx-4 mb-3">
        <div className="text-white font-extralight text-xs">
          {moment(release_date).format("ll")}
        </div>
        <div className="text-white text-lg font-bold">{title}</div>
        <div className="flex items-center gap-2 mt-[2px] ">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-white text-xs">{rating}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
