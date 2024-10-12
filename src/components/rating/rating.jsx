import { SvgStar } from "../../materials/svg.jsx";

export const Rating = ({ rating }) => {
    return [...Array(rating)].map((x, i) => <SvgStar key={i} />);
};
