import { useState, useMemo } from "react";

// A slow function simulating an expensive computation
const slowFunction = (num) => {
  alert("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {
    // nothing here
  } // Simulating delay
  return num * 2;
};

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  // Memoize the result of the slow function, so it's only recalculated when 'number' changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <h1>Number: {number}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <h2>Double of the Number: {doubleNumber}</h2>

      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
