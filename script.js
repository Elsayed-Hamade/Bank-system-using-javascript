// Log & Sign import
const logSwitchBtn = document.querySelector(".log-switch");
const signSwitchBtn = document.querySelector(".sign-switch");
const logBtn = document.querySelector(".btn");
const logInForm = document.querySelector(".log-in");
const signUpForm = document.querySelector(".sign-up");
const logSignBtn = document.querySelector(".btn");
const logInMail = document.querySelector(".e-mail");
const logInPassword = document.querySelector(".log-password");
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
const lowerPart = document.querySelector(".lower-part-container");
const message = document.querySelector(".message");
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

const changeClass2 = (div1, div2, class1, class2) => {
  div1.classList.add(class1);
  div2.classList.remove(class2);
};

logSwitchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeClass(logSwitchBtn, signUpForm, "switch-btn-active", "inactive", "add");
  changeClass(
    signSwitchBtn,
    logInForm,
    "switch-btn-active",
    "inactive",
    "remove"
  );
  logSignBtn.textContent = "Log In";
});

signSwitchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeClass(signSwitchBtn, logInForm, "switch-btn-active", "inactive", "add");
  changeClass(
    logSwitchBtn,
    signUpForm,
    "switch-btn-active",
    "inactive",
    "remove"
  );
  logSignBtn.textContent = "Sign Up";
});

// Pages
balancePageBtn.addEventListener("click", () => {
  changeClass2(balancePageBtn, movements, "btn-inactive", "inactive");
  changeClass(
    transferPageBtn,
    loanPageBtn,
    "btn-inactive",
    "btn-inactive",
    "remove"
  );
  changeClass(transfer, loan, "inactive", "inactive", "add");
});

transferPageBtn.addEventListener("click", () => {
  changeClass(
    balancePageBtn,
    loanPageBtn,
    "btn-active",
    "btn-active",
    "remove"
  );
  changeClass(movements, loan, "inactive", "inactive", "add");
  changeClass2(transferPageBtn, transfer, "btn-active", "inactive");
});

loanPageBtn.addEventListener("click", () => {
  changeClass(
    transferPageBtn,
    balancePageBtn,
    "btn-active",
    "btn-active",
    "remove"
  );
  changeClass(transfer, movements, "inactive", "inactive", "add");
  changeClass2(loanPageBtn, loan, "btn-active", "inactive");
});

profileBtn.addEventListener("click", () => {
  changeClass(pagesBtn, loan, "inactive", "inactive", "add");
  changeClass(transfer, movements, "inactive", "inactive", "add");
  changeClass2(lowerPart, profile, "inactive", "inactive");
});

/* BANK FUNCTIONALITY */
// Users
const sayedhamada = {
  firstName: "Elsayed",
  lastName: "Hamada",
  eMail: "elsayedhamada@gmail.com",
  gender: "Male",
  password: "12345678",
};

const bennyvaline = {
  firstName: "Benny",
  lastName: "Valine",
  eMail: "bennyvaline@gmail.com",
  gender: "Male",
  password: "87654321",
};

//  Main Variables
const accounts = [sayedhamada, bennyvaline];
let activeAccount;
/* Sign & Log functionality */
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (signUpForm.classList.contains("inactive")) {
    // LogIn
    const logMail = logInMail.value;
    const logPassword = logInPassword.value;

    const messageControl = (messContent) => {
      message.classList.add("active");
      message.textContent = messContent;
    };

    if (!logMail || !logPassword) {
      message.classList.remove("active")
      messageControl("Please enter your email and password");
    } else {
      accounts.forEach((acc) => {
        if (
          logMail === acc.eMail.trim(" ") &&
          logPassword === acc.password.trim(" ")
        ) {
          console.log("Logged In");
          activeAccount = acc;
          message.classList.remove("active")
        }
      });
      if (!activeAccount) {
        messageControl("Username or Password incorrect");
      }
    }
  } else if (logInForm.classList.contains("inactive")) {
    console.log("Sign Up Contains");
  }
});
