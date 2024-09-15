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
import { FlightBooker } from "./Pages/FlightBooker";
import { GenerateTable } from "./Pages/GenerateTable";
import { ControlledForm } from "./Pages/ControlledForm";
import { UsePathParams } from "./Pages/useParams";
import { UseSearchParams } from "./Pages/UseSearchParams";
import { UseLocation } from "./Pages/UseLocation";
import { ComponentDidUpdate } from "./Pages/ComponentDidUpdate";
import { UseComponentDidMount } from "./Pages/ComponentDidMount";
import { ComponentDidUnMount } from "./Pages/ComponentDidUnMount";
import { UnControlledForm } from "./Pages/UnControlledForms";

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
        <Route
          element={
            <Layout>
              <FlightBooker />
            </Layout>
          }
          path="/react-ultimate/flight-booker"
        />
        <Route
          element={
            <Layout>
              <GenerateTable />
            </Layout>
          }
          path="/react-ultimate/generate-table"
        />
        <Route
          element={
            <Layout>
              <UnControlledForm />
            </Layout>
          }
          path="/react-ultimate/uncontrolled-form"
        />
        <Route
          element={
            <Layout>
              <ControlledForm />
            </Layout>
          }
          path="/react-ultimate/controlled-form"
        />
        <Route
          element={
            <Layout>
              <UsePathParams />
            </Layout>
          }
          path="/react-ultimate/path-params/:id"
        />
        <Route
          element={
            <Layout>
              <UseSearchParams />
            </Layout>
          }
          path="/react-ultimate/search-params"
        />
        <Route
          element={
            <Layout>
              <UseLocation />
            </Layout>
          }
          path="/react-ultimate/use-location"
        />
        <Route
          element={
            <Layout>
              <UseComponentDidMount />
            </Layout>
          }
          path="/react-ultimate/component-did-mount"
        />
        <Route
          element={
            <Layout>
              <ComponentDidUpdate />
            </Layout>
          }
          path="/react-ultimate/component-did-update"
        />
        <Route
          element={
            <Layout>
              <ComponentDidUnMount />
            </Layout>
          }
          path="/react-ultimate/component-will-unmount"
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
          <Link to="/react-ultimate/flight-booker">Flight Booker</Link>
          <Link to="/react-ultimate/generate-table">Generate Table</Link>
          <Link to="/react-ultimate/uncontrolled-form">Uncontrolled Form</Link>
          <Link to="/react-ultimate/controlled-form">Controlled Form</Link>
          <Link to="/react-ultimate/path-params/ssid_1234">Path Params</Link>
          <Link to="/react-ultimate/search-params?age=30&name=bharath">
            Search Params
          </Link>
          <Link to="/react-ultimate/use-location">Use Location</Link>
          <Link to="/react-ultimate/component-did-mount">
            Component did Mount
          </Link>
          <Link to="/react-ultimate/component-did-update">
            Component did Update
          </Link>
          <Link to="/react-ultimate/component-will-unmount">
            Component will Unmount
          </Link>
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
