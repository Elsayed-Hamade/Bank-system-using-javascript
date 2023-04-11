"use strict";
// Log & Sign import
const logBtn = document.querySelector(".btn");
const logContainer = document.querySelector(".log-container");
const logInForm = document.querySelector(".log-in");
const logInMail = document.querySelector(".e-mail-log");
const logInPassword = document.querySelector(".log-password");
const firstName = document.querySelector(".first-name");
// Pages import
const balancePageBtn = document.querySelector(".balance-btn");
const balanceTitle = document.querySelector(".balance");
const transferPageBtn = document.querySelector(".transfer-btn");
const loanPageBtn = document.querySelector(".loan-btn");
const movements = document.querySelector(".movements-container");
const movementsScroll = document.querySelector(".movements-container-scroll");
const transfer = document.querySelector(".transfer-container");
const loan = document.querySelector(".loan-container");
const profileBtn = document.querySelector(".profile-icon");
const profile = document.querySelector(".profile-container");
const pagesBtn = document.querySelector(".pages-btn");
const lowerPart = document.querySelector(".lower-part-container");
const upperPart = document.querySelector(".upper-part-container");
const message = document.querySelector(".message");
const inNum = document.querySelector(".in-num");
const outNum = document.querySelector(".out-num");
const interestNum = document.querySelector(".interest-num");
const nameEl = document.querySelector(".name");
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
  password: "12345678",
  movs: [100, -1000, 3000, -50, 1000],
};

const bennyvaline = {
  firstName: "Benny",
  lastName: "Valine",
  eMail: "bennyvaline@gmail.com",
  password: "87654321",
  movs: [400, 6700, -40, -300, 230],
};

//  Main Variables
const accounts = [sayedhamada, bennyvaline];

// Display Movements
const displayMovements = () => {
  movementsScroll.innerHTML = "";

  activeAccount.movs.forEach((mov) => {
    const movType = mov > 0 ? "DEPOSIT" : "WITHDRAWAL";
    const movIcon = movType === "DEPOSIT" ? "left-down" : "left-top";

    const movHtml = `
    <div class="movement">
    <div class="movement-type">
    <i class="bx bx-${movIcon}-arrow-circle movement-type-icon"></i>
    <p class="movement-type-text">${movType}</p>
    </div>
    <div class="movement-amount">${Math.abs(mov)} $</div>
    </div>
    `;
    movementsScroll.insertAdjacentHTML("afterbegin", movHtml);
  });
};

let activeAccount;
let balance = 0;

// Calc Balance
const calcBalance = () => {
  activeAccount.movs.map((mov) => (balance += mov));
  balanceTitle.textContent = balance + "$";
};

// Calc interest, totalIn,out
const calcOther = () => {
  let inTotal = 0;
  let outTotal = 0;
  activeAccount.movs.map((mov) =>
    mov > 0 ? (inTotal += mov) : (outTotal += Math.abs(mov))
  );
  inNum.textContent = inTotal + " $";
  outNum.textContent = outTotal + " $";
  interestNum.textContent = balance * 0.2 + " $";
};

// Change Name
const changeName = () => {
  nameEl.textContent = activeAccount.firstName;
};

/* LogIn functionality */
logBtn.addEventListener("click", (e) => {
  const messageControl = (messContent) => {
    message.classList.add("active");
    message.textContent = messContent;
  };

  e.preventDefault();
  // LogIn
  const logMail = logInMail.value;
  const logPassword = logInPassword.value;

  if (!logMail || !logPassword) {
    message.classList.remove("inactive");
    messageControl("Please enter your email and password");
  } else {
    accounts.forEach((acc) => {
      if (
        logMail === acc.eMail.trim(" ") &&
        logPassword === acc.password.trim(" ")
      ) {
        lowerPart.classList.remove("inactive");
        upperPart.classList.remove("inactive");
        movements.classList.remove("inactive");
        logContainer.classList.add("inactive");
        activeAccount = acc;

        displayMovements();
        calcBalance();
        calcOther();
        changeName()

        message.classList.add("inactive");
      }
    });
    if (!activeAccount) {
      messageControl("Username or Password incorrect");
    }
  }
});
