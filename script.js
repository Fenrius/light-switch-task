const btn = document.querySelector("button");
const bodyBack = document.querySelector("body");
let siteTitle = document.querySelector("title");

btn.addEventListener("click", function (e) {
  bodyBack.classList.toggle("backgroundColorSwitch");
  btn.classList.toggle("buttonSwitch");
  if (bodyBack.classList.value === "backgroundColorSwitch") {
    siteTitle.innerText = "Good Night";
  } else {
    siteTitle.innerText = "Good Morning";
  }
});
