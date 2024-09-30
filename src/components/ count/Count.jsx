import { useState } from "react";

export const Count = ({ max = 5 }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="d-grid gap-2 d-md-block">
            <button
                type="button"
                style={{
                    "--bs-btn-padding-y": ".25rem",
                    "--bs-btn-padding-x": ".5rem",
                    "--bs-btn-font-size": "1rem",
                }}
                className="btn btn-light btn-sm"
                onClick={() => {
                    setCount(count > 0 ? count - 1 : 0);
                }}
            >
                {" "}
                -{" "}
            </button>
            {" "}
            {count}{" "}
            <button
                type="button"
                style={{
                    "--bs-btn-padding-y": ".25rem",
                    "--bs-btn-padding-x": ".5rem",
                    "--bs-btn-font-size": "1rem",
                }}
                className={`btn btn-light btn-sm`}
                onClick={() => {
                    setCount(count < max ? count + 1 : count);
                }}
                disabled={!(count < max)}
            >
                {" "}
                +{" "}
            </button>
        </div>
    );
};
