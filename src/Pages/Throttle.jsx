import { useCallback, useState } from "react";

export const Throttle = () => {
  const [click, setClicks] = useState(0);
  const [throttledClick, setThrottledClick] = useState(0);

  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  const handleThrottledClick = useCallback(
    throttle(() => {
      console.log("Inside");
      setThrottledClick((prev) => {
        console.log(prev);
        return prev + 1;
      });
    }, 1000),
    []
  );

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    handleThrottledClick();
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Normal Clicks : {click}</p>
      <p>Throttled Clicks : {throttledClick}</p>
    </div>
  );
};
