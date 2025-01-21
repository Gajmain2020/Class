function Button({ title, clickHandle }) {
  return (
    <button
      onClick={clickHandle}
      className="bg-blue-400 px-2 py-1 m-5 rounded hover:bg-blue-500"
    >
      {title}
    </button>
  );
}
export default Button;
