import { useEffect } from "react";
import { Dish } from "../dish/Dish";
import { Review } from "../review/Review";

export const Restaurant = ({ name, menu, reviews }) => {

useEffect(()=>{
  console.log('useEffect');
  return () => {
    console.log('cleanup');
  } 
},[]);

  return (
    <>
      {name !== "" && (
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
                      {menu.map((dish) => (
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
