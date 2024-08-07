import { Clapperboard } from "lucide-react";
import Rating from "../ui/rating";
import { Button } from "../ui/button";
import { convertRatingToBase5 } from "@/lib/utils";
import {
  AnimateItem,
  Detail,
  DetailAction,
  DetailDescription,
  DetailHeader,
  DetailTitle,
} from "./detail";
import Link from "next/link";

interface Props {
  title: string;
  overview: string;
  vote_average: number;
  id: number;
}

function SliderDetail({ overview, title, vote_average, id }: Props) {
  console.log(
    "SliderDetail -> vote_average",
    vote_average,
    convertRatingToBase5(vote_average)
  );
  return (
    <Detail>
      <AnimateItem keyAnimate={vote_average} delay={0}>
        <DetailHeader>
          <Rating
            value={convertRatingToBase5(vote_average)}
            totalStars={5}
            size={30}
          />
          <p className="text-white text-sm mt-2">
            {vote_average.toFixed(2)} / 10
          </p>
        </DetailHeader>
      </AnimateItem>

      <AnimateItem keyAnimate={title} delay={0.2}>
        <DetailTitle>{title}</DetailTitle>
      </AnimateItem>
      <AnimateItem keyAnimate={overview} delay={0.5}>
        <DetailDescription>{overview}</DetailDescription>
      </AnimateItem>

      <AnimateItem keyAnimate={vote_average} delay={0.7}>
        <DetailAction>
          <Link href={`/movie/${id}`}>
            <Button>
              <Clapperboard className="size-4 me-3" />
              Watch Now
            </Button>
          </Link>
        </DetailAction>
      </AnimateItem>
    </Detail>
  );
}

export default SliderDetail;
