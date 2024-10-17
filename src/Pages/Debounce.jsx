import { useState, useCallback } from "react";

export const Debounce = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  const debounce = (func, wait = 500) => {
    let timeout;
    return function (...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        return func(...args);
      }, wait);
    };
  };

  const handleDebounce = useCallback(
    debounce((value) => setDebouncedText(value), 600),
    []
  );

  const handleInputChange = (e) => {
    setText(e.target.value);
    handleDebounce(e.target.value);
  };

  return (
    <>
      <div>Debounce</div>
      <input value={text} onChange={handleInputChange} />
      <p>Debounced Text: {debouncedText}</p>
    </>
  );
};
