import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./index.js";

export const getDishById = createAsyncThunk(
    "dishes/getDishById",
    async (dishId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();

        if (!result) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (dishId, { getState }) => {
            return !selectDishById(getState(), dishId);
        },
    },
);
