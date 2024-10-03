import { Dish } from "../dish/Dish";
import { Review } from "../review/Review";
import { Fragment, useState } from "react";
import { ReviewForm } from "../review-form/ReviewForm.jsx";

export const Restaurant = ({ name, menu, reviews }) => {
    const [moreDishes, setMoreDishes] = useState(false);

    return (
        <>
            {name !== "" && (
                <>
                    <div className={`card`}>
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className="card-title">{name}</h2>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card-text">

                                        <h4>Menu</h4>
                                        <button
                                            className={"btn btn-outline-primary btn-sm mb-2"}
                                            onClick={() => setMoreDishes(!moreDishes)}
                                        >{moreDishes ? `Remove extra dishes` : `Add more dishes for progreess bar`}
                                        </button>

                                        {menu.length > 0 && (

                                            <ul>
                                                {moreDishes ? [...Array(10)].map((x, i) => {
                                                    return <Fragment key={i}>
                                                        {menu.map((dish) => (
                                                            <li key={dish.id}>
                                                                <Dish
                                                                    name={dish.name}
                                                                    ingredients={dish.ingredients}
                                                                    price={dish.price}
                                                                />
                                                            </li>
                                                        ))}
                                                    </Fragment>
                                                }) : menu.map((dish) => (
                                                    <li key={dish.id}>
                                                        <Dish
                                                            name={dish.name}
                                                            ingredients={dish.ingredients}
                                                            price={dish.price}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-text">
                                        <h4>Reviews</h4>
                                        {reviews.length > 0 && (
                                            <ul>
                                                {reviews.map((review) => (
                                                    <li key={review.id}>
                                                        <Review
                                                            user={review.user}
                                                            text={review.text}
                                                            rating={review.rating}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <ReviewForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
