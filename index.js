let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let customInput = document.getElementById("custom-input");
let tipAmount = document.getElementById("tip-amount");
let totalPerPerson = document.getElementById("total-per-person");
let resetBtn = document.getElementById("reset-btn");
let customPercent = document.getElementById("custom-input");
let tipButtons = document.querySelectorAll(".tip-btn");

const reset = () => {
  tipAmount.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  customPercent.value = "";
  document.getElementById("bill-error-msg").style.display = "none";
  document.getElementById("people-error-msg").style.display = "none";
};

const calculateTip = (event) => {
  let billValue = parseInt(billInput.value);
  let peopleValue = parseInt(peopleInput.value);
  let tipPercentage = parseFloat(event.target.getAttribute("data-tip"));
  let amount;
  let amountPerPerson;

  document.getElementById("bill-error-msg").style.display = "none";
  document.getElementById("people-error-msg").style.display = "none";

  if (billInput.value == 0) {
    document.getElementById("bill-error-msg").style.display = "block";
    tipAmount.innerHTML = `$0.00`;
  } else {
    amount = (billValue * tipPercentage) / 100;
    amountPerPerson = amount / peopleValue;
    tipAmount.innerHTML = `$${amountPerPerson.toFixed(2)}`;
  }
  if (peopleInput.value == 0) {
    document.getElementById("people-error-msg").style.display = "block";
    totalPerPerson.innerHTML = `$0.00`;
  } else {
    totalPerPerson.innerHTML = `$${((billValue + amount) / peopleValue).toFixed(
      2
    )}`;
  }

  resetBtn.classList.remove("reset-btn-inactive");
  resetBtn.classList.add("reset-btn-active");
};

customPercent.addEventListener("input", (event) => {
  customPercent.setAttribute("data-tip", event.target.value);
  calculateTip(event);
});

tipButtons.forEach((button) => {
  button.addEventListener("click", calculateTip);
});
