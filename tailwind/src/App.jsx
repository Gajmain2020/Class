import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Todos from "./components/Todos";

function App() {
  function onButton1Click() {
    console.log("button 1 was clicked");
  }

  function onButton3Click() {
    console.log("button 3 was clicked");
  }

  const [todo, setTodo] = useState("");
  const [allTodo, setAllTodo] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo() {
    // [] todo=> bartan dhona hai => ['bartan dhona hai']
    // ['bartan dhona hai'] todo=>hagna hai => ['bartan dhona hai', "hagna hai"]
    setAllTodo((allTodo) => [todo, ...allTodo]);
    setTodo("");
  }

  function handleDelete(index) {
    console.log("delete called", index);

    //use filter => alltodo => alltod->index agar wo passed wale index dono same nai hai to usko store karna hai
  }

  return (
    <>
      <div className="bg-red-200 ">
        <Button clickHandle={onButton1Click} title="button 1" />
        <Button
          clickHandle={() => alert("button 2 was clicked")}
          title="button 2"
        />
        <Button clickHandle={onButton3Click} title="button 3" />
      </div>

      {/* Tod Application */}
      <div className="bg-pink-400 px-20 py-10">
        <div className="font-semibold font-2xl">TODO APP</div>
        {/* input field */}
        <div className="flex gap-4">
          <input
            value={todo}
            type="text"
            className="border bg-green-200 rounded px-2 py-0.5"
            placeholder="Write your todo here."
            onChange={handleChange}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-300 px-2 rounded hover:bg-blue-500 transition"
          >
            ADD
          </button>
        </div>

        {/* To show todos */}
        <Todos deleteFunction={handleDelete} todos={allTodo} />
      </div>

      {/* Weather Application */}
      <div>
        <div className="text-2xl font-semibold">Weather app</div>
      </div>
    </>
  );
}

export default App;

// parent (APP.jsx is parent) -> child(s) -> child(s)

// Homework ->
// make this todo a bit stylish
// make above handleDelete function to be operating

// from slides =>
// make weather app
// requirements
// input field to search the city
// search button
// if any error happens in api call for weather forecast give them error
// if you get the data then show the data
// brain stormer=> fetch => time => when api do not send anything till then the search should be disabled (ChatGPT allowed)
