import { Clapperboard } from "lucide-react";
import Rating from "../ui/rating";
import { Button } from "../ui/button";
import { decimalToBase5 } from "@/lib/utils";
import {
  AnimateItem,
  Detail,
  DetailAction,
  DetailDescription,
  DetailHeader,
  DetailTitle,
} from "./detail";

interface Props {
  title: string;
  overview: string;
  vote_average: number;
}

function SliderDetail({ overview, title, vote_average }: Props) {
  let rating = Math.round(vote_average);
  rating = decimalToBase5(rating);
  return (
    <Detail>
      <AnimateItem keyAnimate={vote_average} delay={0}>
        <DetailHeader>
          <Rating value={rating} totalStars={5} size={30} />
          <p className="text-white text-sm mt-2">{vote_average} / 10</p>
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
          <Button>
            <Clapperboard className="size-4 me-3" />
            Watch Now
          </Button>
        </DetailAction>
      </AnimateItem>
    </Detail>
  );
}

export default SliderDetail;
