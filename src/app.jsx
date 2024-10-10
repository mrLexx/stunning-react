import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context-provider.jsx";

export const App = () => {

    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Layout>
                    <RestaurantsPage/>
                </Layout>
            </ThemeContextProvider>
        </AuthContextProvider>
    );
};
