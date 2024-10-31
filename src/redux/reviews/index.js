import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState({
        requestStatus: "idle",
        reviewsForRestaurant: -1,
    }),
    selectors: {
        selectReviews: (state) => state.entities,
        selectReviewsIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsRequestStatus: (state) => state.requestStatus,
        selectReviewsForRestaurant: (state) => state.reviewsForRestaurant,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviewsByRestaurantId.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload, meta }) => {
                state.requestStatus = "fulfilled";
                state.reviewsForRestaurant = meta.arg;
                entityAdapter.setAll(state, payload);
            })
            .addCase(getReviewsByRestaurantId.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const {
    selectReviews,
    selectReviewsIds,
    selectReviewById,
    selectReviewsRequestStatus,
    selectReviewsForRestaurant,
} = reviewsSlice.selectors;
