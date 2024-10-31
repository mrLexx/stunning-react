import { Review } from "./review.jsx";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews/index.js";

export const ReviewContainer = ({ id }) => {
    const { rating, text, userId } = useSelector((state) => selectReviewById(state, id));

    return <Review userId={userId} text={text} rating={rating} />;
};
