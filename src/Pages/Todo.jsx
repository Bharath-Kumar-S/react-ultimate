import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue !== "" && todos.indexOf(inputValue) === -1) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "30rem",
        }}
      >
        <h3 style={{ textAlign: "left" }}>Simple Todo</h3>
        <input
          className="input"
          style={{ padding: "0.5rem" }}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          maxLength={56}
        />
        <button onClick={handleAdd} disabled={inputValue === ""}>
          Add
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexDirection: "column",
            listStyle: "none",
          }}
        >
          {todos.map((todo, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                width: "90%",
                border: "1px solid grey",
                borderRadius: "0.5rem",
                padding: "1rem",
              }}
            >
              <div>{todo}</div>

              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
