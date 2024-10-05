import { Review } from "../review/Review.jsx";

export const Reviews = ({reviews}) => {
    return reviews.length > 0 && (
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <Review
                            user={review.user}
                            text={review.text}
                            rating={review.rating}
                        />
                    </li>
                ))}
            </ul>
        )
};