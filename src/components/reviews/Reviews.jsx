import { Review } from "../review/Review.jsx";
import styles from "./reviews.module.css"
import classNames from "classnames";

export const Reviews = ({reviews}) => {
    return reviews.length > 0 && (
            <ul className={classNames(styles.reviews)}>
                {reviews.map((review) => (
                    <li key={review.id} >
                        <Review
                            user={review.user}
                            text={review.text}
                            rating={review.rating}
                        />
                    </li>
                ))}
            </ul>
        )
};