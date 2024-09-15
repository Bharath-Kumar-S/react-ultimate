import { useState, useEffect } from "react";

export const ComponentDidUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count updated to ${count}`);
  }, [count]); // Only run when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
