import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./index.js";
import { selectRestaurantById } from "../restaurants/index.js";

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
            const { menu } = selectRestaurantById(getState(), restaurantId);
            for (const id of menu) {
                if (!selectDishById(getState(), id)) {
                    return true;
                }
            }
            return false;
        },
    },
);
