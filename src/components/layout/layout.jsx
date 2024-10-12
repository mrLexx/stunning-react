import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar viewMode={"accent"} size={"small"} />
            {children}
        </>
    );
};
