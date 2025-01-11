// console.log("hello world");

// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("Start");
// for (let i = 0; i < 1e9; i++) {} // Time-consuming task
// console.log("End");

// ASYNCHRONOUS
// setTimeout => it performs something after given amount of time
// ()=>{}  anonymous function
// console.log("this is first");
// setTimeout(() => {
//   console.log("hello");
// }, 5000);
// console.log("this is end");

// CURRENT MACHINE SE BAHAR KARNA PADA TO ASYNCHRONOUS
// website->async(api servre)->asycn(file processing)

// INTERVIEW QUESTION (GUESS THE OUTPUT)
// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 0);
// console.log("Third");
// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 5000);
// console.log("Third");

// CALLBACK
// function sayHello() {
//   console.log("hello from sayHello");
// }

// function greetUser(name, argName) {
//   console.log("This is from greet user hello ", name);
//   argName();
// }

// greetUser("gajendra", sayHello);

//! sort of interview question to manage the flow according to interviewer
// function greet(name, callback) {
//   //   console.log("Hello, ", name);
//   console.log(`Hello, ${name}!!`);

// //   const data = "process";

//   //   setTimeout(() => {
//   //     sayHelloAgain();
//   //   }, 0);

//   callback(data); // Calling the callback function
// }

// function sayGoodbye(data) {
//   console.log("Goodbye!", data);
// }

// greet("Dalima", sayGoodbye);
// // Output:
// // Hello, Alice!
// // Goodbye!
// // fuckoff

// function calculate(a, b, op) {
//   const result = op(a, b);
//   console.log("Result:", result);
// }
// function add(x, y) {
//   return x + y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// calculate(5, 3, add);
// calculate(5, 3, multiply);
// calculate(5, 3, subtract);

// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback("Sample Data");
//   }, 2000); // Simulates a 2-second delay
//   console.log("hello world");
// }

// function processData(data) {
//   console.log("Processing:", data);
// }

// fetchData(processData);

// setTimeout(function,time)

// fetchingdatat
// datafetched
// processing sample data
//

// !   INTERVIEW QUESTION
console.log("start");

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
      setTimeout(() => {
        console.log("Step 3");
        setTimeout(() => {
          console.log("Step 3");
          setTimeout(() => {
            console.log("Step 3");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("end");

//start end step 1 step 2 step 3

function sayHello() {
  console.log("hello");
}
