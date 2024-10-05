import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
    name: '',
    review: '',
    rating: 0,
}

const FORM_ACTION_SET_NAME = 'setName';
const FORM_ACTION_SET_REVIEW = 'setReview';
const FORM_ACTION_SET_RATING = 'setRating';
const FORM_ACTION_CLEAR = 'setClear';

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case FORM_ACTION_SET_NAME:
            return {
                ...DEFAULT_FORM_VALUE,
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
                rating: Number(payload),
            };
        case FORM_ACTION_CLEAR:
            return DEFAULT_FORM_VALUE;

    }
    throw Error('Unknown action: ' + action.type);
}

const MAX_RATING = 5;

export const useReviewForms = () => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const { name, review, rating } = state;

    const setName = (value) => {
        dispatch({ type: FORM_ACTION_SET_NAME, payload: value });
    }
    const setReview = (value) => {
        dispatch({ type: FORM_ACTION_SET_REVIEW, payload: value });
    }

    const ratingIncrement = () => {
        const payload = (rating < MAX_RATING || MAX_RATING === -1) ? rating + 1 : rating;
        dispatch({ type: FORM_ACTION_SET_RATING, payload: payload });
    }
    const ratingDecrement = () => {
        const payload = rating > 0 ? rating - 1 : 0;
        dispatch({ type: FORM_ACTION_SET_RATING, payload: payload });
    }

    const clearForm = () => {
        dispatch({ type: FORM_ACTION_CLEAR });
    }

    return {
        name,
        review,
        rating,
        setName,
        setReview,

        ratingIncrement,
        ratingDecrement,

        clearForm
    };


}