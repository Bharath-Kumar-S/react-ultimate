import { useSearchParams } from "react-router-dom";

export const UseSearchParams = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      UseSearchParams
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>{JSON.stringify(Object.fromEntries(searchParams))}</p>
    </div>
  );
};
