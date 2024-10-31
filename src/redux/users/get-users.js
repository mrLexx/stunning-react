import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserRequestStatus, selectUsersIds } from "./index.js";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    // eslint-disable-next-line no-unused-vars
    async (_, { dispatch, getState, rejectWithValue }) => {
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
            return selectUsersIds(getState()).length === 0 && selectUserRequestStatus(getState()) === "idle";
        },
    },
);
