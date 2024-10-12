import { AuthContext } from ".";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ auth: false });

    const toggleLogin = () => {
        setUser((prev) => {
            return prev.auth ? { auth: false } : { auth: true, name: 'Super Puper' };
        });
    }

    return (<AuthContext.Provider value={{ user, toggleLogin }}>
        {children}
    </AuthContext.Provider>)
}