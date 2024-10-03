import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar style={{ backgroundColor: "#0d6efd" }}/>
            {children}
        </>
    );
};
