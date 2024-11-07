import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants/index.js";
import { selectReviewById } from "./index.js";

export const getReviewsByRestaurantId = createAsyncThunk(
    "reviews/getReviews",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            const { reviews } = selectRestaurantById(getState(), restaurantId);
            for (const id of reviews) {
                if (!selectReviewById(getState(), id)) {
                    return true;
                }
            }
            return false;
        },
    },
);
