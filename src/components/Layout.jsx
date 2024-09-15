import { useLocation, Link } from "react-router-dom";
import { Back } from "./Back";
import { FaGit } from "react-icons/fa";

export const Header = () => {
  const location = useLocation();
  return (
    <>
      <div style={{ display: "flex", gap: "3rem" }}>
        <p style={{ fontWeight: "bolder", marginRight: "1rem" }}>
          React ultimate{"  "}
          <Link to="https://github.com/Bharath-Kumar-S/react-ultimate">
            <FaGit />
          </Link>
        </p>
        <p>{location.pathname !== "/react-ultimate/" && <Back />}</p>
      </div>
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </div>
    </>
  );
};
