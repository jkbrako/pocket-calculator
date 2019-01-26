var  expressionArray = [];
let currentValue = "0";
let valueOne;
let valueTwo;
var numDecimalInsert = false;
var placeInsert = false;
var exponentialAlert = false;
// Maximum length of characters
// to display for result.
const MAX_RESULT_LENGTH = 8;
// Maximum positive number to display
// which is dependent on MAX_RESULT_LENGTH.
const MAX_NUMBER = 9999999;
// Maximum number of decimal places

function calculatorStartup() {
  // to set screen to clear instead of adding 0's
  document.getElementById("screen").value += currentValue;
}

function updateDisplay() {
  var display = document.getElementById("screen");
  display.value = calculator.displayValue;
  updateDisplay();
}

function pi() {
  document.getElementById("screen").value += "3.14159265359";
}

function number(numb)  {
  if (screen.value === "0") {
    screen.value = "";
  }
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
document.getElementById("number(numb)");
}

function negate() {
  document.getElementById("screen").value = document.getElementById("screen").value * -1;
}
function percent() {
    document.getElementById("screen").value = document.getElementById("screen").value / 100;
}

function decimal() {
  document.getElementById("screen").value += ".";
  if (document.getElementById("screen").value = "") {
    document.getElementById("screen").value = "0.";
  }
}
console.log(5);
  
function clearScreen() {
  document.getElementById("screen").value = "0";
  document.getElementById("baby-screen").value = "";
}

 function divide() {
  let valueOne = document.getElementById("screen").value;
  document.getElementById("baby-screen").value = valueOne;
  document.getElementById("screen").value += " / ";
  document.getElementById("baby-screen").value += " / "
} 

function plus() {
  let valueOne = document.getElementById("screen").value;
  document.getElementById("baby-screen").value = valueOne;
  document.getElementById("screen").value += " + ";
  document.getElementById("baby-screen").value += " + "
}


function minus() {
  let valueOne = document.getElementById("screen").value;
  document.getElementById("baby-screen").value = valueOne;
  document.getElementById("screen").value += " - ";
  document.getElementById("baby-screen").value += " - "
}


function times() {
  let valueOne = document.getElementById("screen").value;
  document.getElementById("baby-screen").value = valueOne;
  document.getElementById("screen").value += " * ";
  document.getElementById("baby-screen").value += " * ";

}

function commasPlace() {
  if (placeInsert == false) {
    document.calc.display.value = document.calc.display.value + numb;
    expressionArray.push(numb)
    console.log("in array" , expressionArray.join(''))
  }
  
  if(Number(document.calc.display.value.length) <= 10) {
    document.calc.display.value
  } else {
    document.getElementById("numbers(numb)").disabled = true;
    document.getElementById("dot").disabled = true;
    
    if(decimalNumInsert == false){
      let commaInput = Number(document.getElementById("screen").value.split(",").join("")).toLocaleString;
      document.getElementById("screen").value = commaInput;
      document.getElementById("baby-screen").value = commaInput;
      
    }
  }
}

function equal() {
  result = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(document.getElementById("screen").value.toLocaleString("en"));
  console.log(result.toLocaleString("en"));
  notation();
  commasPlace();
  
}

function notation() {
  let numExpress = eval(expressionArray.join(''));
  if (expressionArray.join(",").includes("e")) {
    exponentialAlert = true;
    console.log(expressionArray)
    
  }
    expressionArray = [];
    expressionArray.push(numExpress);
    console.log("evaluated raw", numExpress);
  if (document.getElementById("screen").value > 999999999 || document.getElementById("screen").value < 999999999) {
    document.getElementById("screen").value = numb.length(9)
  } else {
    document.getElementById("screen").value = document.getElementById("screen").value.toLocaleString("en")
  }
  if(exponentialAlert == true) {
    document.getElementById("screen").value = numExpress;
  }
  
}

function error() {
  if (numb === Infinity || numb === NaN || numb === undefined) {
    numb = "Infinity";
  }
}
function rootx() {
  document.getElementById("screen").value = Math.sqrt((Number((document.getElementById("screen").value))));
}
