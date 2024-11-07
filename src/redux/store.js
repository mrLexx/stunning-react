import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/index.js";
import { dishesSlice } from "./entities/dishes/index.js";
import { usersSlice } from "./entities/users/index.js";
import { reviewsSlice } from "./entities/reviews/index.js";
import { cartSlice } from "./ui/cart/index.js";
import { currentRestaurantSlice } from "./entities/current-restaurant/index.js";
import { requestsSlice } from "./ui/request/index.js";

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [currentRestaurantSlice.name]: currentRestaurantSlice.reducer,
        [currentRestaurantSlice.name]: currentRestaurantSlice.reducer,
        [requestsSlice.name]: requestsSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(),
});
