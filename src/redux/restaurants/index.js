import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { getRestaurantById } from "./get-restaurant-by-id.js";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({
        gettingListStatus: false,
        requestStatus: "idle",
        requestStatusOne: "idle",
    }),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsGettingListStatus: (state) => state.gettingListStatus,
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
        selectRestaurantsRequestOneStatus: (state) => state.requestStatusOne,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                state.requestStatus = "fulfilled";
                state.gettingListStatus = true;
                entityAdapter.setAll(state, payload);
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.requestStatus = "rejected";
            })

            .addCase(getRestaurantById.pending, (state) => {
                state.requestStatusOne = "pending";
            })
            .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
                state.requestStatusOne = "fulfilled";
                entityAdapter.setOne(state, payload);
            })
            .addCase(getRestaurantById.rejected, (state) => {
                state.requestStatusOne = "rejected";
            }),
});

export const {
    selectRestaurantsIds,
    selectRestaurantById,
    selectRestaurantsGettingListStatus,
    selectRestaurantsRequestStatus,
    selectRestaurantsRequestOneStatus,
} = restaurantsSlice.selectors;
