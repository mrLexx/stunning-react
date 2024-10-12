import { useContext } from "react";
import { AuthContext } from "./index.js";

export const useAuth = () => useContext(AuthContext);
