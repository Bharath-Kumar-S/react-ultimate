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
import { Debounce } from "./Pages/Debounce";
import { Throttle } from "./Pages/Throttle";
import { UseCallBack } from "./Pages/UseCallBack";
import { UseEffect } from "./Pages/UseEffect";
import { UseMemo } from "./Pages/UseMemo";

const routeConfig = [
  { path: "/react-ultimate/todo", component: <Todo /> },
  { path: "/react-ultimate/counter", component: <Counter /> },
  { path: "/react-ultimate/contact", component: <ContactForm /> },
  { path: "/react-ultimate/flight-booker", component: <FlightBooker /> },
  { path: "/react-ultimate/generate-table", component: <GenerateTable /> },
  {
    path: "/react-ultimate/uncontrolled-form",
    component: <UnControlledForm />,
  },
  { path: "/react-ultimate/controlled-form", component: <ControlledForm /> },
  { path: "/react-ultimate/path-params/:id", component: <UsePathParams /> },
  { path: "/react-ultimate/search-params", component: <UseSearchParams /> },
  { path: "/react-ultimate/use-location", component: <UseLocation /> },
  {
    path: "/react-ultimate/component-did-mount",
    component: <UseComponentDidMount />,
  },
  {
    path: "/react-ultimate/component-did-update",
    component: <ComponentDidUpdate />,
  },
  {
    path: "/react-ultimate/component-will-unmount",
    component: <ComponentDidUnMount />,
  },
  { path: "/react-ultimate/debounce", component: <Debounce /> },
  { path: "/react-ultimate/throttle", component: <Throttle /> },
  { path: "/react-ultimate/usecallback", component: <UseCallBack /> },
  { path: "/react-ultimate/useeffect", component: <UseEffect /> },
  { path: "/react-ultimate/usememo", component: <UseMemo /> },
];

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
        {/* Home route */}
        <Route element={<Layout />} path="/react-ultimate" />
        {/* Dynamic routes from config */}
        {routeConfig.map(({ path, component }, index) => (
          <Route
            key={index}
            path={path}
            element={<Layout>{component}</Layout>}
          />
        ))}
      </Routes>

      {/* Links for navigation */}
      {location.pathname === "/react-ultimate/" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            textAlign: "left",
            width: "fit-content",
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
          <Link to="/react-ultimate/debounce">Debounce</Link>
          <Link to="/react-ultimate/throttle">Throttle</Link>
          <Link to="/react-ultimate/usecallback">useCallback</Link>
          <Link to="/react-ultimate/useeffect">useEffect</Link>
          <Link to="/react-ultimate/usememo">useMemo</Link>
        </div>
      )}

      {/* Dark mode toggle button */}
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
