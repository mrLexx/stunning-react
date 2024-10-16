import { useMatches } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

export const Breadcrumbs = () => {
    let matches = useMatches();
    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    return (
        <div className={styles.block}>
            {crumbs.map((crumb, index) => (
                <div className={styles.breadcrumbs} key={index}>
                    {crumb}
                </div>
            ))}
        </div>
    );
};
