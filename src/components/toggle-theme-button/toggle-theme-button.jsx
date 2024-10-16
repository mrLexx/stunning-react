import { Button } from "../button/button.jsx";
import { useTheme } from "../theme-context/use-theme.js";

export const ToggleThemeButton = (props) => {
    const { toggleTheme } = useTheme();
    return <Button {...props} text={"Toggle theme"} onClick={toggleTheme} />;
};
