import { AuthContext } from ".";
import { useState } from "react";

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ auth: false });

    const toggleLogin = () => {
        if (!user.auth) {
            setUser({ auth: true, name: 'Super Puper' });
        } else {
            setUser({ auth: false });
        }
    }

    return (<AuthContext.Provider value={{ user, toggleLogin }}>
        {children}
    </AuthContext.Provider>)
}