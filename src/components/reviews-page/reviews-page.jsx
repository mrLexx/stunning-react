import { useParams } from "react-router-dom";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ReviewsContainer } from "../reviews/reviews.container.jsx";
import styles from "./reviews-page.module.css";
import { useState } from "react";
import { useAuth } from "../auth-context/use-auth.js";
import { ToggleAuthButton } from "../toggle-auth-button/toggle-auth-button.jsx";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    const [isFetchingReviews, setIsFetchingReviews] = useState(false);

    const { user } = useAuth();

    return (
        <div className={styles.review}>
            <div className={styles.section}>
                <h4 className={styles.title}>Reviews</h4>
                <ReviewsContainer restaurantId={restaurantId} setIsFetchingReviews={setIsFetchingReviews} />
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>Add review</h4>
                {!user?.auth ? (
                    <ToggleAuthButton className={styles.toggleButton} />
                ) : (
                    <ReviewForm
                        key={"new_" + user.id}
                        nameReview={user.name}
                        restaurantId={restaurantId}
                        isFetchingReviews={isFetchingReviews}
                    />
                )}
            </div>
        </div>
    );
};
