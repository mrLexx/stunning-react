import { Rating } from "../rating/rating.jsx";
import styles from "./review.module.css";
import classNames from "classnames";
import { UserContainer } from "../user/user.container.jsx";

export const Review = ({ userId, text, rating }) => {
    return (
        <div className={styles.review}>
            <div>
                <span className={styles.user}>
                    <UserContainer id={userId} />
                </span>
                <span
                    className={classNames(
                        styles.rating,
                        { [styles.bad]: rating < 3 },
                        { [styles.notBad]: rating === 3 },
                        { [styles.excellent]: rating > 3 },
                    )}
                >
                    <Rating rating={rating} />
                </span>
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};
