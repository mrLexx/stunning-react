import { ReviewForm } from "../review-form/ReviewForm.jsx";
import { Menu } from "../menu/Menu.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import styles from "./restaurant.module.css"

export const Restaurant = ({ name, menu, reviews }) => {
    if (!name) {
        return null;
    }

    return (
        <>
            <div className={styles.restaurant}>
                <div className={styles.title}><h2>{name}</h2></div>
                <div></div>
                <div className={styles.menu}>
                    <h4 className={styles.subTitle}>Menu</h4>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                    <Menu menu={menu}/>
                </div>
                <div>
                    <h4 className={styles.subTitle}>Reviews</h4>
                    <Reviews reviews={reviews}/>
                    <ReviewForm/>
                </div>
            </div>
        </>
    );
};
