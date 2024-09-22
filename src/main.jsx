import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {restaurants} from "./materials/materials/mock.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div>{restaurants.map((place) => (
            <div key={place.id}>
                <h2>{place.name}</h2>

                <h3>Menu</h3>
                {place.menu.length > 0 &&
                    <ul>
                        {place.menu.map((dish) => (
                            <li key={dish.id}>
                                {dish.name} ({dish.ingredients.join(', ')}) - ${dish.price}
                            </li>
                        ))}
                    </ul>
                }

                <h3>Reviews</h3>
                {place.reviews.length > 0 &&
                    <ul>
                        {place.reviews.map((review) => (
                            <li key={review.id}>
                                <i>{review.user} ({review.rating}):</i><br/>{review.text}
                            </li>
                        ))}
                    </ul>
                }

            </div>
        ))}
        </div>
    </StrictMode>,
)