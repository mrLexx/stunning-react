import { useReviewForms } from "./use-review-forms.js";
import { Count } from "../count/count.jsx";
import { Button } from "../button/button.jsx";
import styles from "./review-form.module.css";
import { useAddReviewMutation, useEditReviewMutation } from "../../redux/services/api/api.js";
import { useId } from "react";
import { useAuth } from "../auth-context/use-auth.js";

export const ReviewForm = ({ restaurantId, reviewData, isFetchingReviews, handleCloseForm }) => {
    const { user } = useAuth();
    const htmlReviewId = useId();

    const [addReview, { isLoading: isAdding }] = useAddReviewMutation();
    const [editReview, { isLoading: isEditing }] = useEditReviewMutation();

    const { name, review, rating, setReview, ratingIncrement, ratingDecrement, clearForm } = useReviewForms({
        name: user.name,
        review: reviewData?.text ?? "",
        rating: reviewData?.rating ?? 1,
    });

    const handleSubmit = () => {
        if (!reviewData) {
            addReview({
                restaurantId,
                review: {
                    userId: user.id,
                    text: review,
                    rating,
                },
            });
            clearForm();
        } else {
            editReview({
                reviewId: reviewData.id,
                review: {
                    userId: user.id,
                    text: review,
                    rating,
                },
            });
        }
    };

    return (
        <form className={styles.reviewForm}>
            <div>
                <label className={styles.label}>Name</label>
                {name}
            </div>
            <div>
                <label className={styles.label} htmlFor={htmlReviewId}>
                    Review
                </label>
                <input
                    id={htmlReviewId}
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                    type="text"
                    disabled={isAdding || isEditing || isFetchingReviews}
                />
            </div>
            <div>
                <label className={styles.label}>Rating</label>
                <Count
                    count={rating}
                    increment={ratingIncrement}
                    decrement={ratingDecrement}
                    disabled={isAdding || isEditing || isFetchingReviews}
                />
            </div>
            <div className={styles.action}>
                <Button
                    onClick={handleSubmit}
                    disabled={isAdding || isEditing || isFetchingReviews}
                    text={!reviewData ? "Add" : "Update"}
                    size={"small"}
                />
                <Button
                    disabled={isAdding || isEditing || isFetchingReviews}
                    text={"Clear"}
                    onClick={() => {
                        clearForm();
                    }}
                    size={"small"}
                />
                {handleCloseForm && <Button onClick={handleCloseForm} text={"Close Form"} size={"small"} />}
            </div>
        </form>
    );
};
