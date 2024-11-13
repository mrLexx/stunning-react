import styles from "./reviews.module.css";
import { Review } from "../review/review.jsx";

export const Reviews = ({ reviews, setReviewId }) => {
    return (
        <ul className={styles.reviews}>
            {reviews.map(({ id, userId, text, rating }) => (
                <li key={id}>
                    <Review id={id} userId={userId} text={text} rating={rating} setReviewId={setReviewId} />
                </li>
            ))}
        </ul>
    );
};
