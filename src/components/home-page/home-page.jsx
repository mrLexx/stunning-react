import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <h1>Welcome to Super Restaurant Aggregator!</h1>
            See <Link to={`restaurants`}>Restaurants</Link> list!
        </>
    );
};
