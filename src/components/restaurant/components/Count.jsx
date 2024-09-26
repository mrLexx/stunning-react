import { useEffect, useState } from "react";

export const Count = ({ currentNav, max = 5, remember = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!remember) {
      setCount(0);
    }
  }, [currentNav, remember]);

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
      </button>{" "}
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
