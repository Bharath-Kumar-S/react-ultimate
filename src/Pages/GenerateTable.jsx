import { useState } from "react";

function Table({ rows, columns }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: columns }, () => 0).map((_, col) => (
              <td key={col}>
                {col % 2 === 0
                  ? rows * col + (row + 1)
                  : rows * (col + 1) - row}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const GenerateTable = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    setRows(Number(data.get("rows")));
    setColumns(Number(data.get("columns")));
    e.target.reset();
  };

  return (
    <div>
      GenerateTable
      <form
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          margin: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <input
          id="rows"
          name="rows"
          type="number"
          min={1}
          defaultValue={1}
          max={10}
          required
        />
        <input
          id="columns"
          name="columns"
          type="number"
          min={1}
          max={10}
          defaultValue={1}
          required
        />
        <button type="submit">Generate</button>
      </form>
      {Boolean(rows) && Boolean(columns) && (
        <Table rows={rows} columns={columns} />
      )}
    </div>
  );
};
