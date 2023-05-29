// Basic Forms
// http://localhost:3000/isolated/exercise/06.js
import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  //const [error, setError] = React.useState(null); //state and mechanism to change the stat
  const usernameInputRef = React.useRef();
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault(); //Avoids a full page reload
    //console.dir(event.target[0]);
    //const value = event.target[0].value; //Not a very good idea since this way is specific to the order of elements of the form
    const value = event.target.elements.usernameInput.value;
    //const value = usernameInputRef.current.value;
    onSubmitUsername(value);
  }

  function handleChange(event) {
    const { value } = event.target;
    //const isLowerCase = value === value.toLowerCase();
    //setError(isLowerCase ? null : "Username must be lower case");
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>{" "}
        {/* Establishes that this label is for a certain ID, when I click the label I'm directed to the input */}
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
      {/*
      <div style={{ color: "red" }}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button> */}
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
