import { useParams } from "react-router-dom";

export const UsePathParams = () => {
  const { id } = useParams();
  return <div>useParams: {id}</div>;
};
