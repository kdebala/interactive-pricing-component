const slider = document.querySelector(".slider");
const view = document.getElementById("pageView");
let cost = document.getElementById("cost");
let toggle = document.querySelector(".checkbox");

let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let yearlyBilling = false;

slider.addEventListener("input", function () {
  updateValue();
  view.innerHTML = pageViews[slider.value];

  let value = this.value * 25;

  this.style.background = `linear-gradient(to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${value}%,
              hsl(224, 65%, 95%) 0%,
              hsl(224, 65%, 95%) 100%)`;
});

toggle.addEventListener("change", function () {
  if (yearlyBilling == false) {
    yearlyBilling = true;
  } else {
    yearlyBilling = false;
  }
  updateValue();
});

function updateValue() {
  if (yearlyBilling) {
    cost.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
  }
}
