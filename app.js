/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = null;
let num2 = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/
const numberElements = document.querySelectorAll(".number");
const operatorElements = document.querySelectorAll(".operator");
const equalElements = document.querySelector(".equals");
const displayElements = document.querySelector(".display");

console.log(numberElements);
console.log(operatorElements);
console.log(equalElements);
console.log(displayElements);

/*-------------------------------- Functions --------------------------------*/
const preformCalculation = () => {
  let result = null;

  if (num1 && num2 && operation) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operation === "+") result = num1 + num2;
    else if (operation === "-") result = num1 - num2;
    else if (operation === "*") result = num1 * num2;
    else if (operation === "/") {
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
    }
    displayElements.textContent = String(result);
    num1 = result;
    num2 = null;
    operation = null;
  }
};
const setNumbers = (event) => {
  displayElements.textContent += event.target.textContent;

  if (!num1 && !num2 && !operation) num1 = event.target.textContent;
  else if (num1 && !num2 && !operation) num1 += event.target.textContent;
  else if (num1 && !num2 && operation) num2 = event.target.textContent;

  console.log(`Number 1 ${num1}`);
  console.log(`Number 2 ${num2}`);
};

const setOperation = (event) => {
  if (num1 && !num2 && !operation) {
    if (event.target.textContent !== "C") {
      displayElements.textContent =
        displayElements.textContent + event.target.textContent;
      operation = event.target.textContent;
    }
  }

  if (event.target.textContent === "C") {
    operation = event.target.textContent;
    displayElements.textContent = "";
    num1 = null;
    num2 = null;
    operation = null;
  }
  console.log(`Number 1 ${num1}`);
  console.log(`Number 2 ${num2}`);
  console.log(`Operation ${operation}`);
};

/*----------------------------- Event Listeners -----------------------------*/

equalElements.addEventListener("click", preformCalculation);

for (let number of numberElements) {
  number.addEventListener("click", setNumbers);
}

for (let operator of operatorElements) {
  operator.addEventListener("click", setOperation);
}
