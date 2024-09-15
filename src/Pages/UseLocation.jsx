import { useLocation } from "react-router-dom";

export const UseLocation = () => {
  const location = useLocation();
  return <div>Your location path is {location.pathname}</div>;
};
