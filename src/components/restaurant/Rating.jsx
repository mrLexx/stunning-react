import { Fragment } from "react";
import { SvgStar } from "../../materials/Svg";

export const Rating = ({ rating }) => {
  return [...Array(rating)].map((x, i) => <SvgStar key={i} />);
};
