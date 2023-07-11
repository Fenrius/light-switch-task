const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");
const hexColor = document.querySelector("#hexCode");

function inputValueToHex(v) {
  v = Number.parseInt(v);
  return ("0" + v.toString(16)).substr(-2);
}
document.body.addEventListener("input", () => {
  const red = inputValueToHex(redInput.value);
  const green = inputValueToHex(greenInput.value);
  const blue = inputValueToHex(blueInput.value);
  const hexColorValue = "#" + red + green + blue;
  document.body.style.backgroundColor = hexColorValue;
  hexColor.innerText = hexColorValue;
});
