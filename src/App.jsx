import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Todo } from "./Pages/Todo";
import { Counter } from "./Pages/Counter";

const Welcome = () => {
  return <>Welcome to react Ultimate!!!</>;
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Todo />} path="/todo" />
        <Route element={<Counter />} path="/counter" />
      </Routes>
      {location.pathname === "/" && (
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/todo">To-do</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
