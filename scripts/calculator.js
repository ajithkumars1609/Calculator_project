let calculator = localStorage.getItem("calculator") || "";
document.querySelector(".js-calcultor-display-box").innerHTML = 0;
function updateCalcualtor(calculatorValue) {
  calculator += calculatorValue;
  displayBox(calculator);
  saveStorage(calculator);
}
function calculatorSum() {
  calculator = eval(calculator);
  displayBox(calculator);
  saveStorage(calculator);
}
const buttonclear = document.querySelector(".js-clear-button");
buttonclear.addEventListener("click", () => {
  calculator = "";
  document.querySelector(".js-calcultor-display-box").innerHTML =
    calculator || "0";
  saveStorage(calculator);
});
const displayBox = (calculator) => {
  const buttonElment = document.querySelector(".js-calcultor-display-box");
  console.log(buttonElment);
  buttonElment.innerHTML = calculator;
};
const saveStorage = (calculator) => {
  localStorage.setItem("calculator", calculator);
};
