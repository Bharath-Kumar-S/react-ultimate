import { useState } from "react";
import { Back } from "../components/Back";

export const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.text();
      setValues({
        name: "",
        email: "",
        message: "",
      });
      alert(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Back />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5rem",
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) =>
              setValues((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "7rem",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Message</label>
          <input
            type="text"
            value={values.message}
            onChange={(e) =>
              setValues((prev) => {
                return {
                  ...prev,
                  message: e.target.value,
                };
              })
            }
          />
        </div>
        <button onClick={handleSubmit}>Enquire</button>
      </div>
    </>
  );
};
