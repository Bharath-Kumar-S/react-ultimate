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
import { ContactForm } from "./Pages/ContactForm";

const Welcome = () => {
  return <h1>Welcome to react Ultimate!!!</h1>;
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Todo />} path="/todo" />
        <Route element={<Counter />} path="/counter" />
        <Route element={<ContactForm />} path="/contact" />
      </Routes>
      {location.pathname === "/" && (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Link to="/todo">To-do</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/contact">Contact form</Link>
        </div>
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
