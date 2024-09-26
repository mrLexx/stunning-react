import { Rating } from "./Rating";
export const Review = ({user, text, rating}) => {
  return (
    <li>
      <i>{user}</i> (
      <Rating rating={rating} />)
      <br />
      {text}
    </li>
  );
};
