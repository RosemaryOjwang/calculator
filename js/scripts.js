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
const number1 = parseInt(prompt("Enter a number", "00"));
const number2 = parseInt(prompt("Enter another number", "00"));
const sum = number1 + " + "+ number2 +"="+ add(number1, number2) + ", ";
const difference = number1 + " - " + number2 + " = " + subtract(number1, number2) + ", ";
const product = number1 + " * " + number2 + " = " + multiply(number1, number2) +", ";
const quotient = number1 + " / " + number2 + " = " + divide(number1, number2) + ".";
window.alert(sum + product + difference + quotient);