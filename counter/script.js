let counter = 0;
let colorCount = 0;
const main = document.querySelector("main");
const number = document.querySelector(".number");
const btn = document.querySelector("button");

main.style.setProperty("--backgroundSize", colorCount + "%");

function increaseCount() {
  counter++;
  colorCount++;
  number.textContent = counter;
  resetBackground();
  main.style.setProperty("--backgroundSize", colorCount + "%");
}
function resetBackground() {
  if (colorCount === 101) {
    colorCount = 0;
    main.style.setProperty("--backgroundSize", colorCount + "%");
  }
}
function resetCount() {
  counter = 0;
  colorCount = 0;
  number.textContent = 0;
  main.style.setProperty("--backgroundSize", colorCount + "%");
}
btn.addEventListener("click", resetCount);
main.addEventListener("click", increaseCount);
document.addEventListener("keypress", (e) => {
  if ([" ", "Enter"].includes(e.key)) {
    increaseCount();
  }
});
