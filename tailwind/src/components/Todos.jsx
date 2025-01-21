function Todos({ todos, deleteFunction }) {
  return (
    <div>
      {todos.length > 0
        ? todos.map((todo, idx) => (
            <div>
              {idx + 1}. {todo}
              <button
                onClick={() => deleteFunction(idx)}
                className="bg-red-500"
              >
                ☠️
              </button>
            </div>
          ))
        : "no todos to show "}
    </div>
  );
}

export default Todos;
