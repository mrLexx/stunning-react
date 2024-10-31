import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./index.js";

export const getRestaurantById = createAsyncThunk(
    "restaurants/getRestaurantById",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
        const result = await response.json();
        if (!result) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            return !selectRestaurantById(getState(), restaurantId);
        },
    },
);
