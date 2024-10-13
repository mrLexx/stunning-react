import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants/index.js";
import { dishesSlice } from "./dishes/index.js";
import { usersSlice } from "./users/index.js";
import { reviewsSlice } from "./reviews/index.js";
import { cartSlice } from "./ui/cart/index.js";

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
});
