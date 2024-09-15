import { useEffect } from "react";

export const UseComponentDidMount = () => {
  useEffect(() => {
    alert("Component Did Mount");
  }, []);
  return <div>UseComponentDidMount</div>;
};
