import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar style={{ backgroundColor: "#0d6efd" }}/>
            <div className={"container text-center pb-3 pt-3"}><h1>Restaurants</h1></div>
            <div className={"container"}>{children}</div>
        </>
    );
};
