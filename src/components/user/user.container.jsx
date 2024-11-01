import { selectUserById } from "../../redux/users/index.js";
import { User } from "./user.jsx";
import { useSelector } from "react-redux";

export const UserContainer = ({ id }) => {
    const user = useSelector((state) => selectUserById(state, id));

    if (!user) {
        return null;
    }
    const { name } = user;
    return <User name={name} />;
};
