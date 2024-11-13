import styles from "./restaurant.module.css";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../custom-link/custom-link.jsx";

export const Restaurant = ({ name }) => {
    return (
        <>
            <div className={styles.title}>
                <h2>{name}</h2>
                <div className={styles.block}>
                    <CustomLink
                        to={"menu"}
                        toForMatch={"."}
                        activeClass={styles.sectionActive}
                        nonActiveClass={styles.sectionNonActive}
                        className={styles.section}
                    >
                        Menu
                    </CustomLink>
                    <CustomLink
                        to={"reviews"}
                        activeClass={styles.sectionActive}
                        nonActiveClass={styles.sectionNonActive}
                        className={styles.section}
                    >
                        Reviews
                    </CustomLink>
                </div>
            </div>
            <Outlet />
        </>
    );
};
