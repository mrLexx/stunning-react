import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./index.js";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
        const url = `http://localhost:3001/api/users`;
        const response = await fetch(url);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data");
            return;
        }
        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectUsersIds(getState()).length === 0;
        },
    },
);
