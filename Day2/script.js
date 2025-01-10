// Loops
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

let a = 10;
const b = 20; // immutable
var c = 30;

// Operators
console.log("==", a == b);
console.log("===", a === b);

// types
// String
let str = "Hello";
console.log(str, typeof str);

// Number
let num = 10;
console.log(num, typeof num);

// Boolean
let bool = true;
console.log(!bool, typeof bool);

// Arrays
// int arr[10] = {1, 2, 3, 4, 5}; // C++
let arr = [1, 2, 3];
console.log(arr, typeof arr);
// arr[0] arr[1]

// Objects
let obj = {
  name: "Kittu",
  age: 20,
};
// obj.key1 obj.key2
// obj["key1"] obj["key2"]
console.log(obj, typeof obj);
console.log("here", obj.xyz, typeof obj);
console.log("here2", obj["name"]);

let obj2 = { name: "Jone" };
console.log(obj2, typeof obj2);

console.log("==", 1 == "1"); // do not focus on type
console.log("===", 1 === "1"); // focuses on type

// function declaration
function functionName(x = 10, y, z) {
  console.log(x, y);
  console.log("this is from function");
}

// functionName(a, b, c); // calling function
functionName(); // calling function

// funciton declaration
const func = () => {
  console.log("fat arrow function");
};

// function calling
func();
