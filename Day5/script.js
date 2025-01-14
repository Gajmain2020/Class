// console.log("hello world");
// all async calls returns promise

// setTimeout(function,delay)

// async function functionName() {
//   console.log("this is async function");

//   //heavy task db call, fetch call

//   let success = true;

//   if (!success) {
//     throw new Error("this is error");
//   }

//   //! instead of writing this
//   //   new Promise((resolve, reject) => {
//   //     resolve("done");
//   //   });
//   //! we used async function
//   return "done";
// }

// const returnValue = functionName();

// returnValue.then((res) => console.log(res)).catch((err) => console.log(err));

//! old fetch function
// function fetchData() {
//     // Fetch data from the API
//     fetch("https://jsonplaceholder.typicode.com/posts/10")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // Parse JSON response
//       })
//       .then((data) => {
//         // Display the fetched data in the HTML
//         title.innerText = data.title; // Set the title in the #title element
//         body.innerText = data.body; // Set the body text in the #body element
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }

//* always use try catch in async function
//* await can only be used inside async function

// async function fetchData() {
//   try {
// const response = await fetch(
//   "https://jsonplaceholder.typicode.com/posts/10"
// ); // waits for fetch to complete(resolve/reject)
// const responseInJson = await response.json();
// console.log(responseInJson);
// return responseInJson;
//   } catch (error) {
// console.log("error", error);
//   }
// }
//
// async function printResponse() {
//   try {
// const response = await fetchData();
// console.log(response);
//   } catch (error) {
// console.log(error);
//   }
// }
//
// printResponse();

// grid and flexbox

const add2 = (a) => a + 2;
// const val = add2(10);
// console.log(val);

// map filter
// console.log("this is array", arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// .map(para)
// array transformation and interation
// array.map(val=>{ return something})
// para is a callback function

//

// [1, 2, 3, 4, 5] => [2,4,6,8,10]
// [1, 1,1,1,1]

// const newArr = arr.map((a) => a * 2);

// console.log("new Array", newArr);

// filter
// selected item ko pakadna
//ek array dega

// const arr = [1, 2, 3, 4, 5];

// const evArray = arr.filter((a) => {
//   if (a % 2 === 0) return a;
// });

// console.log(evArray);

// async function functionName()
// const myfn  = async()=>{}
