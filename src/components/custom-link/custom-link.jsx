import { Link, useMatch, useResolvedPath } from "react-router-dom";
import classNames from "classnames";

export const CustomLink = ({ children, to, toForMatch, activeClass, nonActiveClass, className, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    const resolvedOther = useResolvedPath(toForMatch ?? to);
    const matchOther = useMatch({ path: resolvedOther.pathname, end: true });

    return (
        <Link
            className={classNames(className, {
                [`${activeClass ?? ""}`]: match || (toForMatch !== undefined && matchOther),
                [`${nonActiveClass ?? ""}`]: !(match || (toForMatch !== undefined && matchOther)),
            })}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};
