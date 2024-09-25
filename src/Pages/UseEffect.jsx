import { useState, useEffect } from "react";
export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState();

  useEffect(() => {
    alert("useEffect Called", "Only invoked when state of sync is changed");
  }, [sync]);

  return (
    <div>
      useEffect Example
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <div>Sync : {sync}</div>
      <button onClick={() => setSync(Date.now())}>Sync</button>
      <br />
      {
        "useEffect is only run when the dependency array changes that is sync here"
      }
    </div>
  );
};
