import { useContext } from "react";
import { ThemeContext } from "./index.js";

export const useTheme = () => useContext(ThemeContext);
