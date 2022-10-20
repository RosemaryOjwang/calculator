//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
//user interface logic
const number1 = parseInt(prompt("Enter a number","00"));
const number2 = parseInt(prompt("Enter another number","00"));
window.alert("The sum is " + add(number1, number2) + ".");
window.alert("The difference is " + subtract(number1, number2) + ".");
window.alert("The product is " + multiply(number1, number2) + ".");
window.alert("The quotient is " + divide(number1, number2) + ".");