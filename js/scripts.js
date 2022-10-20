//business logic
function add(number1, number2) {
  return number1 + number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number","00"));
const number2 = parseInt(prompt("Enter another number","00"));
window.alert(add(number1, number2));