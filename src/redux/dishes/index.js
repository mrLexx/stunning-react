import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
};
export const dishesSlice = createSlice({
    name: "dishes",
    initialState: initialState,
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDisheById: (state, id) => state.entities[id],
    },
});

export const { selectDishesIds, selectDisheById } = dishesSlice.selectors;
