const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand : false,
  operator: null,
};

// Maximum length of characters
// to display for result.
const MAX_RESULT_LENGTH = 8;
// Maximum positive number to display
// which is dependent on MAX_RESULT_LENGTH.
const MAX_NUMBER = 9999999;
// Maximum number of decimal places

function calculatorStartup() {
  // to set screen to clear instead of adding 0's
  document.getElementById("screen").value += 0;
}

function updateDisplay() {
  var display = document.getElementById("screen");
  display.value = calculator.displayValue;
  updateDisplay();
}

function pi() {
  document.getElementById("screen").value = 3.14159265359;
}

function numb(numb)  {

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

function negate(numb) {
  // console.log(numb);
  // console.log(typeof numb);
  numb = Number(numb);
  // 
  
  if (document.getElementById("screen").value != "0") {
  numb = negate;
  }  else {
    document.getElementById("screen").value = 0
    }
    console.log("negate");
    document.getElementById("screen").value = negate ; 
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
  document.getElementById("baby-screen").value += (calculator.firstOperand + calculator.operator);
  document.getElementById("screen").value = displayValue;

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
  '%': (firstOperand, secondOperand) => firstOperand / 100,
};

function equal() {
  document.getElementById("equal-sign").value == eval(expression.toString(numb));
  console.log(numb + numb);
}
