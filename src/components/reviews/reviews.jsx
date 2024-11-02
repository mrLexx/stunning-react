import styles from "./reviews.module.css";
import { ReviewContainer } from "../review/review.container.jsx";

export const Reviews = ({ reviews }) => {
    return (
        <ul className={styles.reviews}>
            {Object.keys(reviews).map((id) => (
                <li key={reviews[id].id}>
                    <ReviewContainer id={reviews[id].id} />
                </li>
            ))}
        </ul>
    );
};
