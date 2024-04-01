import { StarIcon } from "@/assets/icons/star-icon";
import React from "react";

interface Props {
  size?: number;
  SVGstrokeColor?: string;
  SVGstorkeWidth?: string | number;
  SVGclassName?: string;
  SVGstyle?: React.CSSProperties;
  totalStars?: number;
  value?: number;
}

function Rating({ value = 0, totalStars = 5, ...props }: Props) {
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const fill = index < value ? "#FFD700" : "#808080";
    return <StarIcon key={index} {...props} SVGstrokeColor={fill} />;
  });
  return <div className=" flex gap-1 items-center relative">{stars}</div>;
}

export default Rating;
