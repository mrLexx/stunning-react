import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews/index.js";
import { Review } from "./review.jsx";

export const ReviewContainer = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    if (!review) {
        return null;
    }
    const { user, text, rating } = review;
    return <Review user={user} text={text} rating={rating} />;
};
