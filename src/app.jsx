import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export const App = () => {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Layout>
                        <RestaurantsPage />
                    </Layout>
                </ThemeContextProvider>
            </AuthContextProvider>
        </Provider>
    );
};
