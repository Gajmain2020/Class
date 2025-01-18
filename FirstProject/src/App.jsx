import "./App.css";
import Card from "./components/Card";

// const { id, name } = obj; //destructuring the object
// console.log("this is id", id, name);
// console.log(obj);

// console.log("note", note); //this button
// console.log("xyz", xyz); //undefined
// console.log("title", title); //

// function MyButton(prop) {
//   /*
//      prop = {title: 'button1', className: 'btn'}
//      prop.title
//      prop.className
//      parameter === props === properties
//   */
//   console.log("properties are", prop);

//   return (
//     <>
//       <button>{prop.title}</button>
//       <p>{prop.note}</p>
//     </>
//   );
// }

function MyButton({ note, title, className, xyz }) {
  return (
    <>
      <button className="myBtn">{title}</button>
    </>
  );
}

function App() {
  const student = {
    id: "1",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJtJqOVt5rquasKononBHBRmeuwlIvUEfQw&s",
    rollNo: "1",
    name: "Dalima",
    dob: "1",
    blood: "a",
  };

  const student2 = {
    id: "2",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJtJqOVt5rquasKononBHBRmeuwlIvUEfQw&s",
    rollNo: "2",
    name: "Donkey",
    dob: "2",
    blood: "O",
  };

  var showData = false;

  function func() {
    showData = true;

    console.log("hello world", showData);
    // fetch("https://dummyjson.com/users/1")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  }

  return (
    <div className="container">
      <Card prop1="123" student={student} />
      {/* <Card student={student2} /> */}

      <button onClick={func}>Show data</button>

      <Card student={student} />
    </div>
  );
}

export default App;
