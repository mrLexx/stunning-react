import { Rating } from "../rating/Rating";
export const Review = ({ user, text, rating }) => {
  return (
    <>
      <i>{user}</i> (
      <Rating rating={rating} />)
      <br />
      {text}
    </>
  );
};
