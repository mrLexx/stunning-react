import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectReviews: (state) => state.entities,
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviewsByRestaurantId.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
                state.requestStatus = "fulfilled";
                entityAdapter.setAll(state, payload);
            })
            .addCase(getReviewsByRestaurantId.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const { selectReviews, selectReviewById, selectReviewsRequestStatus } = reviewsSlice.selectors;
