import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div style={{ position: "absolute", top: 50, left: 50 }}>
        <Link to={"/"}> Back </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>Simple Todo</label>
        <input
          style={{ padding: "0.5rem" }}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleAdd} disabled={inputValue === ""}>
          Add
        </button>
        <ul
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
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
