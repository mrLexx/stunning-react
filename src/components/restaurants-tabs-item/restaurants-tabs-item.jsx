import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";
import { NavLink } from "react-router-dom";
import styles from "./restaurants-tabs-item.module.css";
import classNames from "classnames";

export const RestaurantsTabsItem = ({ id, name }) => {
    return (
        <NavLink
            to={id}
            className={({ isActive }) => {
                return classNames(styles.section, {
                    [styles.sectionActive]: isActive,
                    [styles.sectionNonActive]: !isActive,
                });
            }}
        >
            {name}
        </NavLink>
    );
};
