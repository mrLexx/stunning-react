export const Layout = ({ children }) => {
    return (
        <>
            <div className={"container text-center pb-3 pt-3"}><h1>Restaurants</h1></div>
            <div className={"container"}>{children}</div>
        </>
    );
};
