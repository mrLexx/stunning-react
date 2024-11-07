import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id.js";
import { getDishById } from "./get-dish-by-id.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishes: (state) => state.entities,
        selectDishById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) =>
        builder
            .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});

export const { selectDishes, selectDishById, selectDishesRequestStatus } = dishesSlice.selectors;
