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
  var display = document.getElementById("screen");
  display.value = calculator.displayValue;
  updateDisplay();
}

function pi() {
  document.getElementById("screen").value = 3.14159265359;
}
 function negate() {
   eval()
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


function percent() {

}
function decimal() {
  /* if (calculator.waitingForSecondOperand  === true) return;

    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }*/
  document.getElementById("screen").value += ".";
  console.log(5);
}

function clearScreen() {
  document.getElementById("screen").value = 0;
}

function handleOperator() {
  var lilScreen = document.getElementById("baby-screen").value += firstOperand + operator;
  var bigScreen = document.getElementById("screen").value = displayValue;

  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,
};

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
