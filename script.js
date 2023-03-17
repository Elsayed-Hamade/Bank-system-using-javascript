// Import Items
const logBtn = document.querySelector(".log-switch");
const signBtn = document.querySelector(".sign-switch");
const logInForm = document.querySelector(".log-in");
const signUpForm = document.querySelector(".sign-up");
const logSignBtn = document.querySelector(".btn");

// Styling Changes
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  logBtn.classList.add("switch-btn-active");
  signBtn.classList.remove("switch-btn-active");
  logInForm.classList.remove("inactive");
  signUpForm.classList.add("inactive");
  logSignBtn.textContent = "Log In"
});

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signBtn.classList.add("switch-btn-active");
  logBtn.classList.remove("switch-btn-active");
  logInForm.classList.add("inactive");
  signUpForm.classList.remove("inactive");
  logSignBtn.textContent = "Sign Up"
});
