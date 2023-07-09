const password = document.querySelector("#password");
const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    btn.innerText = "Hide Password";
  } else {
    password.type = "password";
    btn.innerText = "Show Password";
  }
});
