import { Dish } from "../dish/Dish";
import { Review } from "../review/Review";
import { Fragment, useEffect, useState } from "react";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        <>
            {name !== "" && (
                <>
                    <ProgressBar style={{ backgroundColor: "#0d6efd" }}/>

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
                                        {menu.length > 0 && (
                                            <ul>
                                                {[...Array(10)].map((x, i) => {
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
                                                })}
                                                {/*{menu.map((dish) => (
                                                <li key={dish.id}>
                                                    <Dish
                                                        name={dish.name}
                                                        ingredients={dish.ingredients}
                                                        price={dish.price}
                                                    />
                                                </li>
                                            ))}*/}
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
