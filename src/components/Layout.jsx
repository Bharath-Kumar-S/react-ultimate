import { useLocation } from "react-router-dom";
import { Back } from "./Back";

export const Header = () => {
  const location = useLocation();
  return (
    <>
      <div style={{ display: "flex", gap: "3rem" }}>
        <p style={{ fontWeight: "bolder" }}>React ultimate</p>
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
