import { ReviewForm } from "../review-form/review-form.jsx";
import { Menu } from "../menu/menu.jsx";
import { Reviews } from "../reviews/reviews.jsx";
import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants/index.js";

export const Restaurant = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;

    return (
        <>
            <div className={styles.restaurant}>
                <div className={styles.title}>
                    <h2>{name}</h2>
                </div>
                <div></div>
                <div className={styles.menu}>
                    <h4 className={styles.subTitle}>Menu</h4>
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                    <Menu menu={menu} />
                </div>
                <div>
                    <h4 className={styles.subTitle}>Reviews</h4>
                    <Reviews reviews={reviews} />
                    <ReviewForm />
                </div>
            </div>
        </>
    );
};
