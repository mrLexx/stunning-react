import { useReviewForms } from "./use-review-forms.js";
import { Count } from "../count/Count.jsx";
import { useId } from "react";

export const ReviewForm = () => {

    const nameId = useId();
    const reviewId = useId();

    const { name, review, rating, setName, setReview, ratingIncrement, ratingDecrement, clearForm } = useReviewForms();

    return (
        <form>
            <h5>Add review</h5>
            <div className="mb-3">
                <label htmlFor={nameId} className="form-label">Name</label>
                <input
                    id={nameId}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor={reviewId} className="form-label">Review</label>
                <input
                    id={reviewId}
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Rating</label>
                <Count
                    count={rating}
                    increment={ratingIncrement}
                    decrement={ratingDecrement}
                />
            </div>
            <button type="button" className="btn btn-primary me-4">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={() => {
                clearForm();
            }}>Clear</button>
        </form>
    );

}