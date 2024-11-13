import { Reviews } from "./reviews.jsx";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/services/api/api.js";
import { useEffect } from "react";

export const ReviewsContainer = ({ restaurantId, setIsFetchingReviews, setReviewId }) => {
    const {
        isFetching: isFetchingReviews,
        data: reviews,
        isError: isErrorReviews,
    } = useGetReviewsByRestaurantIdQuery(restaurantId);

    const { isFetching: isFetchingUsers, isError: isErrorUsers } = useGetUsersQuery();

    useEffect(() => {
        setIsFetchingReviews(isFetchingReviews);
    }, [isFetchingReviews, setIsFetchingReviews]);

    if (isFetchingReviews || isFetchingUsers) {
        return <Loading position={"left"} />;
    }
    if (isErrorReviews || isErrorUsers) {
        return <Error position={"left"} />;
    }

    return <Reviews reviews={reviews} setReviewId={setReviewId} />;
};
