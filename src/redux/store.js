import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/index.js";
import { dishesSlice } from "./entities/dishes/index.js";
import { usersSlice } from "./entities/users/index.js";
import { reviewsSlice } from "./entities/reviews/index.js";
import { cartSlice } from "./ui/cart/index.js";
import { requestsSlice } from "./ui/request/index.js";
import { apiSlice } from "./services/api/api.js";

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestsSlice.name]: requestsSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
