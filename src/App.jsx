import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";
import { Todo } from "./Pages/Todo";
import { Counter } from "./Pages/Counter";
import { ContactForm } from "./Pages/ContactForm";
import { Layout } from "./components/Layout";

const App = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>} path="/react-ultimate" />
        <Route
          element={
            <Layout>
              <Todo />
            </Layout>
          }
          path="/react-ultimate/todo"
        />
        <Route
          element={
            <Layout>
              <Counter />
            </Layout>
          }
          path="/react-ultimate/counter"
        />
        <Route
          element={
            <Layout>
              <ContactForm />
            </Layout>
          }
          path="/react-ultimate/contact"
        />
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
      <button
        onClick={toggleDarkMode}
        className={
          darkMode ? "toggle-button light-button" : "toggle-button dark-button"
        }
      >
        {darkMode ? <FaSun /> : <FaMoon />} {/* Change icon based on theme */}
      </button>
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