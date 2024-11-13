import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
    name: "",
    review: "",
    rating: 1,
};

const FORM_ACTION_SET_NAME = "setName";
const FORM_ACTION_SET_REVIEW = "setReview";
const FORM_ACTION_SET_RATING = "setRating";
const FORM_ACTION_CLEAR = "setClear";

const MAX_RATING = 5;
const MIN_RATING = 1;

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case FORM_ACTION_SET_NAME:
            return {
                ...state,
                name: payload,
            };
        case FORM_ACTION_SET_REVIEW:
            return {
                ...state,
                review: payload,
            };
        case FORM_ACTION_SET_RATING:
            return {
                ...state,
                rating: Number(payload >= MIN_RATING && payload <= MAX_RATING ? payload : MIN_RATING),
            };
        case FORM_ACTION_CLEAR:
            return {
                ...state,
                review: "",
                rating: MIN_RATING,
            };
        // return DEFAULT_FORM_VALUE;
    }
    throw Error("Unknown action: " + action.type);
};

export const useReviewForms = (default_value, initFunc) => {
    const [state, dispatch] = useReducer(reducer, default_value ?? DEFAULT_FORM_VALUE, initFunc);

    const { name, review, rating } = state;

    const setName = (value) => {
        dispatch({ type: FORM_ACTION_SET_NAME, payload: value });
    };
    const setReview = (value) => {
        dispatch({ type: FORM_ACTION_SET_REVIEW, payload: value });
    };

    const setRating = (value) => {
        dispatch({ type: FORM_ACTION_SET_RATING, payload: value });
    };

    const ratingIncrement = () => {
        const payload = rating < MAX_RATING || MAX_RATING === -1 ? rating + 1 : rating;
        dispatch({ type: FORM_ACTION_SET_RATING, payload: payload });
    };
    const ratingDecrement = () => {
        const payload = rating > MIN_RATING ? rating - 1 : MIN_RATING;
        dispatch({ type: FORM_ACTION_SET_RATING, payload: payload });
    };

    const clearForm = () => {
        dispatch({ type: FORM_ACTION_CLEAR });
    };

    return {
        name,
        review,
        rating,
        setName,
        setReview,
        setRating,

        ratingIncrement,
        ratingDecrement,

        clearForm,
    };
};
