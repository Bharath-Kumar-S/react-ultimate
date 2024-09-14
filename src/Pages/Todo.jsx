import { useState } from "react";
import { Back } from "../components/Back";

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
      <Back />
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
          style={{ padding: "0.5rem" }}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
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
                width: "90%",
                border: "1px solid white",
                borderRadius: "0.5rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {todo}
              </div>

              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
