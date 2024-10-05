import { ReviewForm } from "../review-form/ReviewForm.jsx";
import { Menu } from "../menu/Menu.jsx";
import { Reviews } from "../reviews/Reviews.jsx";

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        name !== "" && (
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
                                    <Menu menu={menu}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-text">
                                    <h4>Reviews</h4>
                                    <Reviews reviews={reviews}/>
                                    <ReviewForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};
