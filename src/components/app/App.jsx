import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Layout } from "../layout/Layout";
import { Nav } from "../nav/Nav";
import { Restaurant } from "../restaurant/Restaurants";

export const App = () => {
  const [currentNav, setCurrentNav] = useState(restaurants[0].id);

  return (
    <Layout>
      <ul className="nav nav-underline nav-fill pb-5 pt-2">
        {restaurants.map((place) => (
          <Nav
            key={place.id}
            id={place.id}
            name={place.name}
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
          />
        ))}
      </ul>

      {restaurants.map((place) => (
        <Restaurant
          key={place.id}
          id={place.id}
          name={place.name}
          menu={place.menu}
          reviews={place.reviews}
          currentNav={currentNav}
        />
      ))}
    </Layout>
  );
};
