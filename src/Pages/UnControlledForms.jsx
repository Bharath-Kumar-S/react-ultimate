import { useRef } from "react";
export const UnControlledForm = () => {
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: username.current.value,
      password: password.current.value,
    };
    alert(formData.password, formData.username);
  };

  return (
    <div>
      <div>unControlledForm</div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={username} name="username" />
        <input type="text" ref={password} name="password" />
        <button>Submit</button>
      </form>
      <pre>
        <code>
          {`
import { useRef } from "react";
export const UnControlledForm = () => {
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: username.current.value,
      password: password.current.value,
    };
    alert(formData.password, formData.username);
  };

  return (
    <div>
      <div>unControlledForm</div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={username} name="username" />
        <input type="text" ref={password} name="password" />
        <button>Submit</button>
        </div>
    </div>
);
        `}
        </code>
      </pre>
    </div>
  );
};
