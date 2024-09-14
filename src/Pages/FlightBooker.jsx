import { useState } from "react";

export const FlightBooker = () => {
  const [type, setType] = useState("one-way");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (new Date(to) < new Date()) {
          alert("Invalid date");
          return;
        }
        if (type === "return" && new Date(from) < new Date(to)) {
          alert("Invalid date");
          return;
        }
        type === "one-way"
          ? alert(`You have booked a one-way flight on ${to}`)
          : alert(
              `You have booked a return flight, departing on ${to} and returning on ${from}`
            );
        setFrom("");
        setTo("");
        setType("one-way");
      }}
    >
      <label>Flight Booker</label>
      <select
        className="input"
        onChange={(e) => setType(e.target.value)}
        value={type}
      >
        <option value="one-way">One Way</option>
        <option value="return">Return</option>
      </select>
      <input
        required
        className="input"
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        required={type === "return"}
        className="input"
        hidden={type === "one-way"}
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
