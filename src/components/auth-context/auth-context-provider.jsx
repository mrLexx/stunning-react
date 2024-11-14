import { AuthContext } from ".";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ auth: false });
    const toggleLogin = () => {
        setUser((prev) => {
            return prev.auth
                ? { auth: false }
                : { auth: true, id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54", name: "Sam" };
        });
    };

    return <AuthContext.Provider value={{ user, toggleLogin }}>{children}</AuthContext.Provider>;
};
