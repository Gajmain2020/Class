import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    id: "",
    todoTitle: "",
    todoDescription: "",
    type: "",
    dueDate: "",
    completed: false,
  });
  const [allTodo, setAllTodo] = useState([]);

  function handleChange(e) {
    setTodo((todo) => ({ ...todo, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    console.log("submit clicked", todo);
    const newTodo = { ...todo, id: allTodo.length + 1 };
    console.log("new TODO", newTodo);
    setAllTodo([newTodo, ...allTodo]);
  }

  console.log(todo);
  return (
    <>
      <div className="text-4xl ">Todo</div>
      <div className=" mx-20 text-xl">
        NEW TODO
        <div className="bg-gray-300 px-2 py-3">
          <input
            className="border "
            type="text"
            name="todoTitle"
            onChange={handleChange}
            placeholder="Todo Title"
          />
          <input
            className="border "
            type="text"
            name="todoDescription"
            onChange={handleChange}
            placeholder="Todo Description"
          />
          <select
            onChange={handleChange}
            className="border "
            name="type"
            id="type"
          >
            <option value="">Select Priority</option>
            <option value="imp">Important</option>
            <option value="notImp">Not Important</option>
          </select>
          <div className="flex flex-col">
            <label htmlFor="date">due date</label>
            <input name="date" onChange={handleChange} type="date" id="date" />
          </div>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
      {/* FORM FOR TODO */}
    </>
  );
}

export default App;

// create a new project
// add best styling for todo app
// create heading for this

// make home page on landing
// give a button to it saying explore my todo app
// on clicking that button go to todo page

// create components don't put everything together
// check if any field is empty before adding it to all todos

// make a function to delete todo
// make a function to mark any todo as completed
// make a component to show all todos
