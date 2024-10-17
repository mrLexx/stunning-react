import { Layout } from "./components/layout/layout.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/error-page/error-page.jsx";
import { HomePage } from "./components/home-page/home-page.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";
import { MenuPage } from "./components/menu-page/menu-page.jsx";
import { ReviewsPage } from "./components/reviews-page/reviews-page.jsx";
import { DishPage } from "./components/dish-page/dish-page.jsx";
import { RestaurantsTabsContainer } from "./components/restaurants-tabs/restaurants-tabs.container.jsx";

// import { router } from "./components/router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        handle: { crumb: () => <Link to="/">Home page</Link> },
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "dish/:dishId",
                element: <DishPage />,
                handle: {
                    crumb: () => (
                        <>
                            {">"}
                            <Link to="restaurants">Restaurants</Link>
                        </>
                    ),
                },
            },
            {
                path: "restaurants",
                element: <RestaurantsTabsContainer />,
                handle: {
                    crumb: () => (
                        <>
                            {">"}
                            <Link to="restaurants">Restaurants</Link>
                        </>
                    ),
                },
                children: [
                    {
                        path: ":restaurantId",
                        element: <RestaurantPage />,
                        handle: {
                            crumb: () => (
                                <>
                                    {">"}
                                    <span>Restaurant</span>
                                </>
                            ),
                        },
                        children: [
                            {
                                index: true,
                                element: <MenuPage />,
                            },
                            {
                                path: "menu",
                                element: <MenuPage />,
                            },
                            {
                                path: "reviews",
                                element: <ReviewsPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

export const App = () => {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <RouterProvider router={router} />
                </ThemeContextProvider>
            </AuthContextProvider>
        </Provider>
    );
};
