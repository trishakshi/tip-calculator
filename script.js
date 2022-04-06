let keys = document.querySelectorAll("#key");
let tipAmount = 0;
let form = document.getElementById("form");
let totalTip = document.getElementById("total-tip-amount");
let totalBill = document.getElementById("total-bill-amount");
const reset = document.getElementById("reset");
let errorMsg = document.getElementById("error-msg");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    tipAmount = key.value;
  });
});

const calculateTip = () => {
  let billAmount = document.getElementById("bill-amount").value;
  let person = document.getElementById("person").value;
  let customTip = document.getElementById("custom-tip").value / 100;

  if (customTip != "") {
    tip = (billAmount * customTip) / person;
    totalTip.innerText = `$ ${tip.toFixed(2)}`;

    bill = (billAmount * (customTip + 1)) / person;
    totalBill.innerText = `$ ${bill.toFixed(2)}`;

    reset.classList.remove("disabled");
  } else {
    tip = (billAmount * tipAmount) / person;
    totalTip.innerText = `$ ${tip.toFixed(2)}`;

    bill = (billAmount * (parseFloat(tipAmount) + 1)) / person;
    totalBill.innerText = `$ ${bill.toFixed(2)}`;

    reset.classList.remove("disabled");
  }

  if (person === "") {
    errorMsg.innerText = "Can't be Zero";
    document.getElementById("person-input").classList.add("error");
  }
};

form.addEventListener("keyup", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    e.preventDefault();
    calculateTip();
  }
});

reset.addEventListener("click", () => {
  totalTip.innerText = "$ 0.00";
  totalBill.innerText = "$ 0.00";
  document.getElementById("bill-amount").value = "";
  document.getElementById("person").value = "";
  tipAmount = "";

  if (document.getElementById("custom-tip").value != "") {
    document.getElementById("custom-tip").value = "";
  }

  reset.classList.add("disabled");

  errorMsg.innerText = "";
  document.getElementById("person-input").classList.remove("error");
});
