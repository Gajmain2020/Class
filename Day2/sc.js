
  const button = document.querySelector(".login button"); 
  const input = document.querySelector(".login input"); 
  const content = document.getElementById("content");

  button.addEventListener("click", inputdisplay);
  function inputdisplay(){
    const inputValue = input.value.trim(); 
    if (inputValue) {
      content.textContent = `Hello, ${inputValue}!`; 
      input.value = ""; 
    } else {
      content.textContent = "Please enter your name!"; 
    }
  }