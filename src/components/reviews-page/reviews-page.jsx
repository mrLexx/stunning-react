import { useParams } from "react-router-dom";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ReviewsContainer } from "../reviews/reviews.container.jsx";
import styles from "./reviews-page.module.css";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    return (
        <>
            <div>
                <h4 className={styles.title}>Reviews</h4>
                <ReviewsContainer restaurantId={restaurantId} />
                <ReviewForm />
            </div>
        </>
    );
};
