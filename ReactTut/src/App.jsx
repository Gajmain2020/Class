import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log("sayHello");
  }

  sayHello();

  return (
    <>
      <div>gajendra</div>
    </>
  );
}

export default App;
