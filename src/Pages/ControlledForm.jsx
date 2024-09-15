import { useState } from "react";

export const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>

      <pre>
        <code>
          {`            import { useState } from "react";
            export const ControlledForm = () => {
            const [formData, setFormData] = useState({
                name: "",
                email: "",
            });

            const handleSubmit = (event) => {
                event.preventDefault();
            };

            const handleChange = (event) => {
                const { name, value } = event.target;
                setFormData({
                ...formData,
                [name]: value,
                });
            };

            return (
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
                </form>
            );
            `}
        </code>
      </pre>
    </form>
  );
};
