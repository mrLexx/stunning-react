import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviews: (state) => state.entities,
        selectReviewById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) =>
        builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});

export const { selectReviews, selectReviewById } = reviewsSlice.selectors;
