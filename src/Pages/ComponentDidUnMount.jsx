import { useEffect } from "react";

export const ComponentDidUnMount = () => {
  useEffect(() => {
    const handleUnmount = () => {
      // Perform any cleanup or finalization tasks here
      alert("Component is unmounted");
    };

    return () => {
      handleUnmount();
    };
  }, []);
  return <div>Component Did UnMount, Click Back!</div>;
};
