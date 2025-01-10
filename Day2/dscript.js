let head = document.getElementById("header");

// attribute means class

let items = document.getElementsByClassName("item");

let btn = document.getElementsByTagName("button");

console.log("getElements by class", items);

console.log("getElementByTagName", btn);

items[0].innerHTML = "i changed it";

head.innerHTML = "<b>hello</b>";
// head.innerText = "Jone";
// head.textContent = "lorem50";
head.style.backgroundColor = "red";
head.style.fontSize = "30px";

console.log("Get elemetn by id", head);

//Query selector
const bt1 = document.querySelector(".btn");
const allBtns = document.querySelectorAll(".btn");

console.log(bt1);
console.log(allBtns);

const button = document.getElementById("btn");
let uname = "";
const input = document.getElementById("nameInput");

//adding change event listner to input
input.addEventListener("input", handleInputChange);

button.addEventListener("click", sayHello);

function handleInputChange() {
  uname = input.value;
}

function sayHello() {
  alert("hello there!");
  console.log(uname);
  head.innerText = "clicked";
  head.style.backgroundColor = "skyblue";
}
