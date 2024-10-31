import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users.js";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: "users",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectUsersIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
        selectUserRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.requestStatus = "fulfilled";
                console.log("fulfilled");
                entityAdapter.setAll(state, payload);
            })
            .addCase(getUsers.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const { selectUsersIds, selectUserById, selectUserRequestStatus } = usersSlice.selectors;
