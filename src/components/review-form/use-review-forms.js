import { useReducer } from "react";
import { useCount } from "../count/use-count.js";

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
                rating: Number(payload),
            };
        case FORM_ACTION_CLEAR:
            return DEFAULT_FORM_VALUE;

    }
    throw Error('Unknown action: ' + action.type);
}

export const useReviewForms = () => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const {
        increment,
        decrement,
        resetTo,
    } = useCount(5);


    const { name, review, rating } = state;

    const setName = (value) => {
        clearForm();
        dispatch({ type: FORM_ACTION_SET_NAME, payload: value });
    }
    const setReview = (value) => {
        dispatch({ type: FORM_ACTION_SET_REVIEW, payload: value });
    }

    const ratingIncrement = () => {
        dispatch({ type: FORM_ACTION_SET_RATING, payload: increment() });
    }
    const ratingDecrement = () => {
        dispatch({ type: FORM_ACTION_SET_RATING, payload: decrement() });
    }

    const clearForm = () => {
        resetTo(0);
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