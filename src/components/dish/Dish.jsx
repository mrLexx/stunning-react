import { Count } from "../ count/Count";
export const Dish = ({ name, ingredients, price }) => {
  return (
    <>
      {name} ({ingredients.join(", ")}) - ${price}
      <Count />
    </>
  );
};
