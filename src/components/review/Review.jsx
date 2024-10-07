import { Rating } from "../rating/Rating";
import styles from "./review.module.css"
import classNames from "classnames";


export const Review = ({ user, text, rating }) => {
    return (
        <div className={classNames(styles.review)}>
            <div><span className={classNames(styles.user)}>{user}</span>
                <span
                className={classNames(
                    styles.rating,
                    { [styles.bad]: rating < 3 },
                    { [styles.notBad]: rating ===3 },
                    { [styles.excellent]: rating >3 },
                )}
            ><Rating rating={rating}/></span></div>
            <div className={classNames(styles.text)}>{text}</div>
        </div>
    );
};
