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
const profileBtn = document.querySelector(".profile-icon");
const profile = document.querySelector(".profile-container");
const pagesBtn = document.querySelector(".pages-btn");
/* STYLING FUNCTIONALITY */
//Sign & Log

const changeClass = (div1, div2, class1, class2, action) => {
  if (action === "add") {
    div1.classList.add(class1);
    div2.classList.add(class2);
  } else if (action === "remove") {
    div1.classList.remove(class1);
    div2.classList.remove(class2);
  }
};

logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeClass(logBtn, signUpForm, "switch-btn-active", "inactive", "add")
  changeClass(signBtn, logInForm, "switch-btn-active", "inactive", "remove")
  logSignBtn.textContent = "Log In";
});

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeClass(signBtn, logInForm, "switch-btn-active", "inactive", "add")
  changeClass(logBtn, signUpForm, "switch-btn-active", "inactive", "remove")
  logSignBtn.textContent = "Sign Up";
});

// Pages
balancePageBtn.addEventListener("click", () => {
  balancePageBtn.classList.add("btn-active");
  movements.classList.remove("inactive");
  changeClass(transferPageBtn, loanPageBtn, "btn-inactive", "btn-inactive", "remove")
  changeClass(transfer, loan, "inactive", "inactive", "add")
});

transferPageBtn.addEventListener("click", () => {
  changeClass(balancePageBtn, loanPageBtn, "btn-active", "btn-active", "remove")
  changeClass(movements, loan, "inactive", "inactive", "add")
  transferPageBtn.classList.add("btn-active");
  transfer.classList.remove("inactive");
});

loanPageBtn.addEventListener("click", () => {
  changeClass(transferPageBtn, balancePageBtn, "btn-active", "btn-active", "remove")
  changeClass(transfer, movements, "inactive", "inactive", "add")
  loanPageBtn.classList.add("btn-active");
  loan.classList.remove("inactive");
});

profileBtn.addEventListener("click", () => {
  changeClass(pagesBtn, loan, "inactive", "inactive", "add")
  changeClass(transfer, movements, "inactive", "inactive", "add")
  profile.classList.remove("inactive");
});

/* BANK FUNCTIONALITY */
