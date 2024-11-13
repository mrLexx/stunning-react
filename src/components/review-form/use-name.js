import { useGetUsersQuery } from "../../redux/services/api/api.js";

export const useName = (userId) => {
    const { user } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            user: data?.find((user) => user.id === userId),
        }),
    });
    const { name } = user ?? {};
    return name;
};
