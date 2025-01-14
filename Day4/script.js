// console.log("hello world");
//promises

// setTimeout(callback fn,delay)

// basic human language me promise(vada)??

// if i will get 10lpa job i will buy a car or else i will buy bike // PROMISE

// 11lpa
// fullfill/resolve
//error reject
//pending state -> still in process

// HOW DO WE CREATE PROMISE

// const myPromise = new Promise((resolve, reject) => {
//   //some crucial operations
//   // fetch(api) -> error/data
//   let success = true;

//   if (success) {
//     resolve({
//       name: "gajendra",
//       age: "23",
//     });
//   } else {
//     reject({
//       error: "this is error from promise",
//       desc: "this is description from error",
//     });
//   }
// });

// // console.log("THIS IS MY PROMISE", myPromise);
// myPromise
//   .then((res) => {
//     console.log(res);
//     return res.name;
//   })
//   .then((res) => console.log("this name is", res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("promise is done")); //helps to know that promise has been completed

// const myFetching = fetch("https://jsonplaceholder.typicode.com/todos/10");

// myFetching
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("this is error", err);
//   })
//   .finally(() => {
//     console.log("code completed");
//   });
// fetch("https://jsonplaceholder.typicode.com/todos/10")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => console.error("Error fetching data:", error));

function fetchData() {
  //there should be a fetch call to jsonplaceholder for a post
  // url  "https://jsonplaceholder.typicode.com/posts/1"

  body.innerText = "data";
  title.innerText = "hello";
}

const button = document.getElementById("getTodo");
const title = document.getElementById("title");
const body = document.getElementById("body");

button.addEventListener("click", fetchData);
