import { Rating } from "../rating/rating.jsx";
import styles from "./review.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews/index.js";

export const Review = ({ id }) => {
    const { user, text, rating } = useSelector((state) => selectReviewById(state, id));

    return (
        <div className={styles.review}>
            <div>
                <span className={styles.user}>{user}</span>
                <span className={classNames(styles.rating, { [styles.bad]: rating < 3 }, { [styles.notBad]: rating === 3 }, { [styles.excellent]: rating > 3 })}>
                    <Rating rating={rating} />
                </span>
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};
