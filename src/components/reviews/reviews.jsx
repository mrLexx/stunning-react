import styles from "./reviews.module.css";
import { ReviewContainer } from "../review/review.container.jsx";

export const Reviews = ({ reviews }) => {
    if (!reviews.length) {
        return null;
    }
    return (
        <ul className={styles.reviews}>
            {reviews.map((id) => (
                <li key={id}>
                    <ReviewContainer id={id} />
                </li>
            ))}
        </ul>
    );
};
