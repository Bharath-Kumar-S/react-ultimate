export const UnControlledForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    alert(formData.password, formData.username);
  };

  return (
    <div>
      <div>unControlledForm</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <button>Submit</button>
      </form>
      <pre>
        <code>
          {`
export const UnControlledForm = () => {
const handleSubmit = (e) => { 
    e.preventDefault();
    const formData = {
        username: e.target.username.value,
        password: e.target.password.value,
    };
    console.log(formData);
};

return (
    <div>
        <div>unControlledForm</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" />
                <input type="text" name="password" />
                <button>Submit</button>
            </form>
        </div>
    </div>
);
        `}
        </code>
      </pre>
    </div>
  );
};
