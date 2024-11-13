import { useParams } from "react-router-dom";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ReviewsContainer } from "../reviews/reviews.container.jsx";
import styles from "./reviews-page.module.css";
import { useState } from "react";
import { useAuth } from "../auth-context/use-auth.js";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    const [isFetchingReviews, setIsFetchingReviews] = useState(false);
    const [reviewId, setReviewId] = useState("-1");

    const { user } = useAuth();

    return (
        <div className={styles.review}>
            <div className={styles.section}>
                <h4 className={styles.title}>Reviews</h4>
                <ReviewsContainer
                    restaurantId={restaurantId}
                    setIsFetchingReviews={setIsFetchingReviews}
                    setReviewId={setReviewId}
                />
            </div>
            <div className={styles.section}>
                {
                    <ReviewForm
                        key={user.auth ? reviewId : "none_auth"}
                        nameReview={user.name}
                        restaurantId={restaurantId}
                        isFetchingReviews={isFetchingReviews}
                        reviewId={reviewId}
                        switchToAdd={() => {
                            setReviewId("-1");
                        }}
                    />
                }
            </div>
        </div>
    );
};
