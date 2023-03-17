// Log & Sign import
const logBtn = document.querySelector(".log-switch");
const signBtn = document.querySelector(".sign-switch");
const logInForm = document.querySelector(".log-in");
const signUpForm = document.querySelector(".sign-up");
const logSignBtn = document.querySelector(".btn");
// Pages import
const balancePageBtn = document.querySelector(".balance-btn");
const transferPageBtn = document.querySelector(".transfer-btn");
const loanPageBtn = document.querySelector(".loan-btn");
const movements = document.querySelector(".movements-container");
const transfer = document.querySelector(".transfer-container");
const loan = document.querySelector(".loan-container");
const profileBtn = document.querySelector(".profile-icon")
const profile = document.querySelector(".profile-container")
const pagesBtn = document.querySelector(".pages-btn")

/* STYLING FUNCTIONALITY */
//Sign & Log
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  logBtn.classList.add("switch-btn-active");
  signBtn.classList.remove("switch-btn-active");
  logInForm.classList.remove("inactive");
  signUpForm.classList.add("inactive");
  logSignBtn.textContent = "Log In";
});

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signBtn.classList.add("switch-btn-active");
  logBtn.classList.remove("switch-btn-active");
  logInForm.classList.add("inactive");
  signUpForm.classList.remove("inactive");
  logSignBtn.textContent = "Sign Up";
});

// Pages
const addClasses = ()=>{
  transfer.classList.add("inactive");
  movements.classList.add("inactive");
}

balancePageBtn.addEventListener("click", () => {
  balancePageBtn.classList.add("btn-active");
  transferPageBtn.classList.remove("btn-active");
  loanPageBtn.classList.remove("btn-active");
  loan.classList.add("inactive");
  transfer.classList.add("inactive");
  movements.classList.remove("inactive");
});

transferPageBtn.addEventListener("click", () => {
  balancePageBtn.classList.remove("btn-active");
  transferPageBtn.classList.add("btn-active");
  loanPageBtn.classList.remove("btn-active");
  movements.classList.add("inactive");
  loan.classList.add("inactive");
  transfer.classList.remove("inactive");
});

loanPageBtn.addEventListener("click", () => {
  balancePageBtn.classList.remove("btn-active");
  transferPageBtn.classList.remove("btn-active");
  loanPageBtn.classList.add("btn-active");
  addClasses()
  loan.classList.remove("inactive");
});

profileBtn.addEventListener("click", ()=>{
  pagesBtn.classList.add("inactive")
  loan.classList.add("inactive")
  addClasses()
  profile.classList.remove("inactive")
})

/* BANK FUNCTIONALITY */