import { useCount } from "./use-count.js";

export const Count = ({
                          count,
                          increment,
                          decrement,
                          limitReached=false,
                      }) => {

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
                onClick={decrement}
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
                onClick={increment}
                disabled={limitReached}
            >
                {" "}
                +{" "}
            </button>
        </div>
    );
};
