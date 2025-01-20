// import "./App.css";
// import Card from "./components/Card";

import { useState } from "react";

// // const { id, name } = obj; //destructuring the object
// // console.log("this is id", id, name);
// // console.log(obj);

// // console.log("note", note); //this button
// // console.log("xyz", xyz); //undefined
// // console.log("title", title); //

// // function MyButton(prop) {
// //   /*
// //      prop = {title: 'button1', className: 'btn'}
// //      prop.title
// //      prop.className
// //      parameter === props === properties
// //   */
// //   console.log("properties are", prop);

// //   return (
// //     <>
// //       <button>{prop.title}</button>
// //       <p>{prop.note}</p>
// //     </>
// //   );
// // }

// function MyButton({ note, title, className, xyz }) {
//   return (
//     <>
//       <button className="myBtn">{title}</button>
//     </>
//   );
// }

// function App() {
//   const student = {
//     id: "1",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJtJqOVt5rquasKononBHBRmeuwlIvUEfQw&s",
//     rollNo: "1",
//     name: "Dalima",
//     dob: "1",
//     blood: "a",
//   };

//   const student2 = {
//     id: "2",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJtJqOVt5rquasKononBHBRmeuwlIvUEfQw&s",
//     rollNo: "2",
//     name: "Donkey",
//     dob: "2",
//     blood: "O",
//   };

//   var showData = false;

//   function func() {
//     showData = true;

//     console.log("hello world", showData);
//     // fetch("https://dummyjson.com/users/1")
//     //   .then((res) => res.json())
//     //   .then((res) => console.log(res));
//   }

//   return (
//     <div className="container">
//       <Card prop1="123" student={student} />
//       {/* <Card student={student2} /> */}

//       <button onClick={func}>Show data</button>

//       <Card student={student} />
//     </div>
//   );
// }

// export default App;

// function Login() {
//   return <>this is login</>;
// }
// function Feed() {
//   return (
//     <>
//       <div>this is post 1</div>
//       <div>this is posst picture</div>
//       <div>this is post body</div>
//     </>
//   );
// }

// export default function App() {
//   // user ko kya dikhana hai depending on the basis of conditions -> conditional rendering

//   //api data
//   // var userLoggedIn = false;
//   // var toShow = "name";

//   const user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//   };

//   function handleSwitch() {
//     console.log("handleSwitchClicked");
//     toShow = "email";
//   }

//   return (
//     <>
//       <div>hello world</div>
//       <div>this is wonderful</div>
//       <button onClick={handleSwitch}>switch</button>
//       <div>{toShow === "name" ? user.name : user.email}</div>
//       {userLoggedIn ? <Feed /> : <Login />}
//     </>
//   );
// }

// if (userLoggedIn) {
//   return <Feed />;
// }

// return <Login />;

// {userLoggedIn ? <Feed /> : <Login />}

// if(userLoggedIn)return <Feed/>
// else return <Login />

export default function App() {
  // var loggedIn = false;

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [name, setName] = useState("");

  //  const [variable, variableSetterFunction] = useState(initialState)

  // variableSetterFunction( value ) => variable = value
  // variableSetterFunction(callback(x)) => value retured by callback will be put on the variable x will be the holded value of variable

  // function handleChangeClick() {
  //   // console.log("look here", loggedIn);
  //   // if (loggedIn === false) {
  //   //   console.log("clickedd");
  //   //   setLoggedIn(true);
  //   //   setName("Jone");
  //   // } else {
  //   //   setLoggedIn(false);
  //   //   setName("");
  //   // }

  //   setLoggedIn((val) => !val);
  //   setName((x) => x + "1");
  // }

  const [user, setUser] = useState(null);

  function handleFetchData() {
    console.log("fetchData");

    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }

  console.log("currently user", user);

  return (
    <>
      {/* <button onClick={handleChangeClick}>login</button> */}
      {/* {loggedIn ? <div>Logged In</div> : <div>Login karr le bhai</div>} */}
      {/* <div>Name = {name !== "" && name}</div> */}
      <button onClick={handleFetchData}>{user ? "reset" : "fetch data"}</button>

      {!user ? (
        <div>please fetch data</div>
      ) : (
        <div>user is there and here i will show card</div>
      )}
    </>
  );
}

// create component for card and show it only if the user is there (use above fetch call to get dummy user)
// make above fetch button to be able to reset the data in the user as null

// create a counter app
