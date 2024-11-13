import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    keepUnusedDataFor: 15,
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({ query: () => "/restaurants" }),
        getRestaurantById: builder.query({
            query: (restaurantId) => `/restaurant/${restaurantId}`,
        }),
        getDishesByRestaurantId: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
        }),
        getDishById: builder.query({
            query: (dishId) => `/dish/${dishId}`,
        }),
        getUsers: builder.query({
            query: () => `/users`,
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: (id) => [{ type: "Reviews", id }],
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: ({ restaurantId }) => [{ type: "Reviews", id: restaurantId }],
        }),
        editReview: builder.mutation({
            query: ({ reviewId, review }) => ({
                url: `/review/${reviewId}`,
                method: "PATCH",
                body: review,
            }),
            invalidatesTags: ({ restaurantId }) => [{ type: "Reviews", id: restaurantId }],
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
    useGetDishesByRestaurantIdQuery,
    useGetDishByIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useAddReviewMutation,
    useEditReviewMutation,
} = apiSlice;
