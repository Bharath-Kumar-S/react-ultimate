import { useCallback, useState } from "react";

export const Debounce = () => {
  const [text, setText] = useState("");
  const [debouncedtext, setDebouncedtext] = useState("");

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceHandle = useCallback(
    debounce((value) => {
      setDebouncedtext(value);
    }, 1000),
    []
  );

  const handleChange = (e) => {
    setText(e.target.value);
    debounceHandle(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={text} />
      <p>Debounced Value : {debouncedtext}</p>
    </>
  );
};
