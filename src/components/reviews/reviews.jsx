import { Review } from "../review/review.jsx";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
    if (!reviews.length) {
        return null;
    }
    return (
        <ul className={styles.reviews}>
            {reviews.map((id) => (
                <li key={id}>
                    <Review id={id} />
                </li>
            ))}
        </ul>
    );
};
