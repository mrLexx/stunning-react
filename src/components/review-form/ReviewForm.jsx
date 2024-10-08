import { useReviewForms } from "./use-review-forms.js";
import { Count } from "../count/Count.jsx";
import { useId } from "react";
import { Button } from "../button/Button.jsx";
import styles from "./review-form.module.css"

export const ReviewForm = () => {

    const nameId = useId();
    const reviewId = useId();

    const { name, review, rating, setName, setReview, ratingIncrement, ratingDecrement, clearForm } = useReviewForms();

    return (
        <form>
            <h5 className={styles.label}>Add review</h5>
            <div>
                <label className={styles.label} htmlFor={nameId}>Name</label>
                <input
                    id={nameId}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"

                />
            </div>
            <div>
                <label className={styles.label} htmlFor={reviewId}>Review</label>
                <input
                    id={reviewId}
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                    type="text"

                />
            </div>
            <div>
                <label className={styles.label}>Rating</label>
                <Count
                    count={rating}
                    increment={ratingIncrement}
                    decrement={ratingDecrement}
                />
            </div>
            <div className={styles.action}>
                <Button
                    text={"Submit"}
                    size={"medium"}
                />
                <Button
                    text={"Clear"}
                    onClick={() => {
                        clearForm();
                    }}
                    size={"medium"}
                />
            </div>
        </form>
    );

}