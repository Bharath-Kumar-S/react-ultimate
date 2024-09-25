import { useState, useCallback } from "react";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Memoize the increment function so it's only recreated when 'count' changes
  const increment = useCallback(() => {
    alert(
      `Memoize the increment function so it's only recreated when 'count' changes`
    );
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
