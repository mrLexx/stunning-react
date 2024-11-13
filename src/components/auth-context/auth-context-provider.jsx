import { AuthContext } from ".";
import { useState } from "react";
import { useGetUsersQuery } from "../../redux/services/api/api.js";

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({ auth: false });
    const { data: users } = useGetUsersQuery(undefined);

    const randomUser = (users) => {
        const tmp = users
            ? users[Math.floor(Math.random() * users.length)]
            : { id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54", name: "Sam" };
        return { id: tmp.id, name: tmp.name };
    };

    const toggleLogin = () => {
        setUser((prev) => {
            return prev.auth ? { auth: false } : { auth: true, ...randomUser(users) };
        });
    };

    return <AuthContext.Provider value={{ user, toggleLogin }}>{children}</AuthContext.Provider>;
};
