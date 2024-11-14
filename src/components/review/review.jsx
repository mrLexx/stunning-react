import { Rating } from "../rating/rating.jsx";
import styles from "./review.module.css";
import classNames from "classnames";
import { UserContainer } from "../user/user.container.jsx";
import { Button } from "../button/button.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { ReviewForm } from "../review-form/review-form.jsx";
import { useState } from "react";

export const Review = ({ id, userId, text, rating }) => {
    const { user } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const closeForm = () => {
        setEditMode(false);
    };
    return (
        <>
            <div className={styles.review}>
                {!editMode || !user.auth ? (
                    <>
                        <div>
                            <span className={styles.user}>
                                <UserContainer id={userId} />
                            </span>
                            <span
                                className={classNames(
                                    styles.rating,
                                    { [styles.bad]: rating < 3 },
                                    { [styles.notBad]: rating === 3 },
                                    { [styles.excellent]: rating > 3 },
                                )}
                            >
                                <Rating rating={rating} />
                            </span>
                        </div>
                        <div className={styles.text}>{text}</div>
                        {user.auth && user.id === userId && (
                            <>
                                <Button
                                    text={"Edit"}
                                    size={"small"}
                                    onClick={() => {
                                        setEditMode(true);
                                    }}
                                />
                            </>
                        )}
                    </>
                ) : (
                    user.auth && (
                        <ReviewForm
                            key={user.auth ? id + user.id : "none_auth"}
                            nameReview={user.name}
                            reviewData={{
                                id: id,
                                userId: userId,
                                text: text,
                                rating: rating,
                            }}
                            handleCloseForm={closeForm}
                        />
                    )
                )}
            </div>
        </>
    );
};
