import React from "react";

export interface StarIconProps {
  size?: number;
  SVGstrokeColor?: string;
  SVGstorkeWidth?: string | number;
  SVGclassName?: string;
  SVGstyle?: React.CSSProperties;
}

export function StarIcon({
  size = 25,
  SVGstrokeColor = "#FFD700",
  SVGstorkeWidth = 0,
  SVGclassName,
  SVGstyle,
}: StarIconProps) {
  return (
    <svg
      className={SVGclassName}
      style={SVGstyle}
      stroke={SVGstrokeColor}
      fill={SVGstrokeColor}
      strokeWidth={SVGstorkeWidth}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  );
}
