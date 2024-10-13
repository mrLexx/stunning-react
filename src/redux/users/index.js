import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
};
export const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    selectors: {
        selectUsersIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
    },
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
