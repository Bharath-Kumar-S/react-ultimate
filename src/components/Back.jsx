import { Link } from "react-router-dom";

export const Back = () => {
  return (
    <div style={{ position: "absolute", top: 50, left: 50 }}>
      <Link to={"/"}> Back </Link>
    </div>
  );
};
