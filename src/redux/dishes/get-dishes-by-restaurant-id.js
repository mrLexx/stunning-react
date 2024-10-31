import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesForRestaurant, selectDishesIds } from "./index.js";

export const getDishesByRestaurantId = createAsyncThunk(
    "dishes/getDishesByRestaurantId",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            return selectDishesIds(getState()).length === 0 || selectDishesForRestaurant(getState()) !== restaurantId;
        },
    },
);
