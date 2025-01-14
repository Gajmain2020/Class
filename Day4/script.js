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
  // Fetch data from the API
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      // Display the fetched data in the HTML
      title.innerText = data.title; // Set the title in the #title element
      body.innerText = data.body; // Set the body text in the #body element
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Get references to the HTML elements
const button = document.getElementById("getTodo");
const title = document.getElementById("title");
const body = document.getElementById("body");

// Add event listener to the button
button.addEventListener("click", fetchData);
