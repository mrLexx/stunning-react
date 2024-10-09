import { Button } from "../button/Button.jsx";

export const Count = ({
                          count,
                          increment,
                          decrement,
                          limitReached = false,
                      }) => {

    return (
        <>
            <Button
                onClick={decrement}
                text={" - "}
                size={"small"}
            />{` ${count} `}
            <Button
                onClick={increment}
                text={" + "}
                disabled={limitReached}
                size={"small"}
            />
        </>
    );
};
