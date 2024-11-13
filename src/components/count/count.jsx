import { Button } from "../button/button.jsx";

export const Count = ({ count, increment, decrement, disabled, limitReached = false }) => {
    return (
        <>
            <Button disabled={disabled} onClick={decrement} text={" - "} size={"small"} />
            &nbsp;{count}&nbsp;
            <Button onClick={increment} text={" + "} disabled={limitReached || disabled} size={"small"} />
        </>
    );
};
