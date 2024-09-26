import { Count } from "./components/Count";
import { Rating } from "./components/Rating";
import { Review } from "./components/Review";

export const Restaurant = ({ id, name, menu, reviews, currentNav }) => {
  return (
    <>
      {name !== "" && (
        <div className={`card ${id === currentNav ? "" : "d-none"}`}>
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
                          {dish.name} ({dish.ingredients.join(", ")}) - $
                          {dish.price}
                          <Count currentNav={currentNav} remember={true} />
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
                        <Review key={review.id} user={review.user} text={review.text} rating={review.rating}/>
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
