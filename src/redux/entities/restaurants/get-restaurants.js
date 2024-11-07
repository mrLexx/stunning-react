import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsGettingListStatus } from "./index.js";

export const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",
    async (_, { rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/restaurants");
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (_, { getState }) => {
            return !selectRestaurantsGettingListStatus(getState());
        },
    },
);
