import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Log In Page</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="name"
            placeholder="Enter your Name"
            color="black"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            placeholder="Enter your Email"
            type="email"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="password"
            type="password"
            placeholder="password"
          ></input>
        </div>

        <button className="onsubmit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
