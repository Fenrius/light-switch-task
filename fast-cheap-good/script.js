const fastBox = document.querySelector("#fast");
const cheapBox = document.querySelector("#cheap");
const goodBox = document.querySelector("#good");
lastCheckbox = null;

fastBox.addEventListener("change", function () {
  boxCheck(fastBox, cheapBox, goodBox);
});

cheapBox.addEventListener("change", function () {
  boxCheck(cheapBox, fastBox, goodBox);
});

goodBox.addEventListener("change", function () {
  boxCheck(goodBox, cheapBox, fastBox);
});
function boxCheck(clickedCheckbox, clickedBox2, clickedBox3) {
  if (clickedCheckbox.checked && clickedBox2.checked && clickedBox3.checked) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}
