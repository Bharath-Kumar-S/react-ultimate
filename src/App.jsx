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
        <Route element={<Welcome />} path="/react-ultimate" />
        <Route element={<Todo />} path="/react-ultimate/todo" />
        <Route element={<Counter />} path="/react-ultimate/counter" />
        <Route element={<ContactForm />} path="/react-ultimate/contact" />
      </Routes>
      {location.pathname === "/react-ultimate/" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            textAlign: "left",
          }}
        >
          <Link to="/react-ultimate/todo">To-do</Link>
          <Link to="/react-ultimate/counter">Counter</Link>
          <Link to="/react-ultimate/contact">Contact form</Link>
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
