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
const sum = "The sum of your numbers=" + add(number1, number2) + ", ";
const difference = "The difference of your numbers=" + subtract(number1, number2) + ",";
const product = "The product of your numbers =" + multiply(number1, number2) +", ";
const quotient = "The quotient of your numbers is " + divide(number1, number2) + ".";
window.alert(sum + product + difference + quotient);