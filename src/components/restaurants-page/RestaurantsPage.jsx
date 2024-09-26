import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Nav } from "../nav/Nav";
import { Restaurant } from "../restaurant/Restaurant";

export const RestaurantsPage = () => {
  const [currentRestorantId, setCurrentRestorantId] = useState(
    restaurants[0].id
  );

  const activeRestorant = restaurants.find(
    ({ id }) => id === currentRestorantId
  );

  return (
    <>
      <ul className="nav nav-underline nav-fill pb-5 pt-2">
        {restaurants.map((place) => (
          <li className="nav-item" key={place.id}>
            <Nav
              name={place.name}
              isActive={currentRestorantId === place.id}
              setActive={() => {
                setCurrentRestorantId(place.id);
              }}
            />
          </li>
        ))}
      </ul>

      {activeRestorant && (
        <Restaurant
          key={activeRestorant.id}
          name={activeRestorant.name}
          menu={activeRestorant.menu}
          reviews={activeRestorant.reviews}
        />
      )}
    </>
  );
};
