const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand : false,
  operator: null,
};

function calculatorStartup() {
  document.getElementById("screen").value = 0;
}

function updateDisplay() {
  const display = document.getElementById("screen");
  display.value = calculator.displayValue;
  updateDisplay();
}

 function negate() {

}

function numb(numb) {

// To check if numbers appear in console
if (document.getElementById("screen").value != "0") {
  console.log("1");
  document.getElementById("screen").value += numb;
}
//if (numb != 0) {
//  numb = numb;
else if (document.getElementById("screen").value == "0") {
  document.getElementById("screen").value = numb;
  console.log("2");
}

/*  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
  calculator.displayValue = number;
  calculator.waitingForSecondOperand = false;
} else {
  displayValue === '0' ? number : displayValue + number;
} */
}

function plus() {

}

function minus() {

}

function times() {

}

function divide() {

}

function percent() {

}
function decimal(numb) {
  /* if (calculator.waitingForSecondOperand  === true) return;

    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }*/
  document.getElementById("screen").value += numb;
  console.log(numb);
}

function clearScreen() {
  document.getElementById("screen").value = 0;
}

function handleOperator(nextOperator) {
/*  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator] (currentValue, inputValue);
    calculator.displayValue = String(result);
    calculator.displayValue;
  } */
}

function equal() {
  document.getElementById("equal-sign") == eval(expression.toString(numb));
  console.log(numb + numb);
}
//Nice-to-Haves//
function x2power() {

}

function x3power() {

}

function xypower() {

}
