import { useReviewForms } from "./use-review-forms.js";
import { Count } from "../count/count.jsx";
import { Button } from "../button/button.jsx";
import styles from "./review-form.module.css";
import { ToggleAuthButton } from "../toggle-auth-button/toggle-auth-button.jsx";
import {
    useAddReviewMutation,
    useEditReviewMutation,
    useGetReviewsByRestaurantIdQuery,
} from "../../redux/services/api/api.js";
import { useId } from "react";
import { useAuth } from "../auth-context/use-auth.js";
import { useName } from "./use-name.js";

export const ReviewForm = ({ restaurantId, reviewId, isFetchingReviews, switchToAdd }) => {
    const { user } = useAuth();
    const htmlReviewId = useId();

    const [addReview, { isLoading: isAdding }] = useAddReviewMutation();
    const [editReview, { isLoading: isEditing }] = useEditReviewMutation();

    const initialReviewState = {
        name: user.name,
        review: "",
        rating: 1,
    };
    const initialReviewFunc = (data) => {
        const { name, review, rating } = data ?? {};
        return {
            name: name,
            review: review,
            rating: rating >= 1 && rating <= 5 ? rating : 1,
        };
    };

    const { reviewData } = useGetReviewsByRestaurantIdQuery(restaurantId, {
        selectFromResult: ({ data }) => ({
            reviewData: data?.find((review) => review.id === reviewId),
        }),
    });

    initialReviewState["name"] = useName(reviewData?.userId ?? user.id);
    initialReviewState["review"] = reviewData?.text ?? "";
    initialReviewState["rating"] = reviewData?.rating ?? 0;

    const { name, review, rating, setReview, ratingIncrement, ratingDecrement, clearForm } = useReviewForms(
        initialReviewState,
        initialReviewFunc,
    );

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
                    userId: reviewData.userId,
                    text: review,
                    rating,
                },
            });
            switchToAdd();
            clearForm();
        }
    };

    if (!user?.auth) {
        return (
            <>
                <h4 className={styles.title}>Add review</h4>
                <ToggleAuthButton className={styles.toggleButton} />
            </>
        );
    }

    return (
        <form>
            <h4 className={styles.title}>{!reviewData ? "Add review" : "Edit review"}</h4>
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
                {reviewData && <Button onClick={switchToAdd} text={"Switch to Add"} size={"small"} />}
            </div>
        </form>
    );
};
