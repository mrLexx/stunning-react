import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id.js";
import { getDishById } from "./get-dish-by-id.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectDishes: (state) => state.entities,
        selectDishById: (state, id) => state.entities[id],
        selectDishesRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getDishesByRestaurantId.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
                state.requestStatus = "fulfilled";
                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishesByRestaurantId.rejected, (state) => {
                state.requestStatus = "rejected";
            })

            .addCase(getDishById.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                state.requestStatus = "fulfilled";
                entityAdapter.setOne(state, payload);
            })
            .addCase(getDishById.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const { selectDishes, selectDishById, selectDishesRequestStatus } = dishesSlice.selectors;
