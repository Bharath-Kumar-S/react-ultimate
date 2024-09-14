import { Back } from "./Back";

export const Header = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Back />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>React ultimate</h2>
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
