import { useDispatch, useSelector } from "react-redux";
import { selectUserById, selectUserRequestStatus } from "../../redux/users/index.js";
import { User } from "./user.jsx";
import { useEffect } from "react";
import { getUsers } from "../../redux/users/get-users.js";
import { Error } from "../error/error.jsx";

export const UserContainer = ({ id }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => selectUserById(state, id));
    const requestStatus = useSelector(selectUserRequestStatus);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (requestStatus === "pending") {
        return "...";
    }
    if (requestStatus === "rejected") {
        return <Error position={"left"} />;
    }

    if (!user) {
        return null;
    }
    const { name } = user;
    return <User name={name} />;
};
