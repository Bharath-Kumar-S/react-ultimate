import { useState } from "react";

export const Counter = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button onClick={() => setClicks(clicks + 1)}>clicks : {clicks}</button>
        <button onClick={() => setClicks(0)}>reset</button>
      </div>
    </>
  );
};
