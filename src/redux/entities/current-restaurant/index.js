import { createSlice } from "@reduxjs/toolkit";

export const currentRestaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        currentName: "",
    },
    reducers: {
        setCurrentName: (state, { payload }) => {
            state.currentName = payload;
        },
    },
    selectors: {
        getCurrentRestaurant: (state) => state.currentName,
    },
});

export const { setCurrentName } = currentRestaurantSlice.actions;
export const { getCurrentRestaurant } = currentRestaurantSlice.selectors;
