import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { getRestaurantById } from "./get-restaurant-by-id.js";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({
        gettingListStatus: false,
    }),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsGettingListStatus: (state) => state.gettingListStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                state.gettingListStatus = true;
                entityAdapter.setAll(state, payload);
            })

            .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurantsGettingListStatus } =
    restaurantsSlice.selectors;
