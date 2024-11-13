import { Rating } from "../rating/rating.jsx";
import styles from "./review.module.css";
import classNames from "classnames";
import { UserContainer } from "../user/user.container.jsx";
import { Button } from "../button/button.jsx";
import { useAuth } from "../auth-context/use-auth.js";

export const Review = ({ id, userId, text, rating, setReviewId }) => {
    const { user } = useAuth();
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
            {user.auth && <Button text={"Edit"} size={"small"} onClick={() => setReviewId(id)} />}
        </div>
    );
};
