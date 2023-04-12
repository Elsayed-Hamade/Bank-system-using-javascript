"use strict";
/* Log & Sign import*/
const logBtn = document.querySelector(".btn");
const logContainer = document.querySelector(".log-container");
const logInForm = document.querySelector(".log-in");
const logInMail = document.querySelector(".e-mail-log");
const logInPassword = document.querySelector(".log-password");

/* Pages import*/
//Pages Btn
const balancePageBtn = document.querySelector(".balance-btn");
const transferPageBtn = document.querySelector(".transfer-btn");
const loanPageBtn = document.querySelector(".loan-btn");
const profileBtn = document.querySelector(".profile-icon");
const pagesBtn = document.querySelector(".pages-btn");
// Pages
const transfer = document.querySelector(".transfer-container");
const loan = document.querySelector(".loan-container");
// User
const balanceTitle = document.querySelector(".balance");
const movements = document.querySelector(".movements-container");
const movementsScroll = document.querySelector(".movements-container-scroll");
const lowerPart = document.querySelector(".lower-part-container");
const upperPart = document.querySelector(".upper-part-container");
const message = document.querySelector(".message");
const inNum = document.querySelector(".in-num");
const outNum = document.querySelector(".out-num");
const interestNum = document.querySelector(".interest-num");
const nameEl = document.querySelector(".name");
const sortBtn = document.querySelector(".sort");
// Transfer
const transferTo = document.querySelector(".input-to");
const transferAmount = document.querySelector(".input-amount");
const transferPassword = document.querySelector(".input-password");
const transferButton = document.querySelector(".transfer-button");
const transferTitle = document.querySelector(".transfer-title");

//Loan
const loanButton = document.querySelector(".loan-button");
const loanAmount = document.querySelector(".loan-amount");
const loanPassword = document.querySelector(".loan-password");
const loanTitle = document.querySelector(".loan-title");
//Profile
const profile = document.querySelector(".profile-container");
const profileName = document.querySelector(".profile-name");
const profileMail = document.querySelector(".profile-mail");
const profilePassword = document.querySelector(".profile-password");
const deleteAccount = document.querySelector(".delete-account");

/* STYLING FUNCTIONALITY */
//LogIn

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
  changeClass2(balancePageBtn, movements, "btn-active", "inactive");
  changeClass(
    transferPageBtn,
    loanPageBtn,
    "btn-active",
    "btn-active",
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

/* Main Page */
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
let accounts = [sayedhamada, bennyvaline];

// Display Movements
const displayMovements = (movs) => {
  movementsScroll.innerHTML = "";

  movs.forEach((mov) => {
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
  interestNum.textContent = (inTotal - outTotal) * 0.2 + "$";
};

// Change Name
const changeName = () => {
  nameEl.textContent = "Mr." + activeAccount.firstName;
};

// Sort Movements
let sorted = false;
const sortMovs = (movs) => {
  if (sorted === false) {
    sorted = true;
    displayMovements(movs.sort((a, b) => a - b));
  } else {
    displayMovements(movs.sort((a, b) => b - a));
    sorted = false;
  }
};
sortBtn.addEventListener("click",() =>  sortMovs(activeAccount.movs));

/* Transfer Page */
const changeElementTitle = (el, message, color) => {
  el.textContent = message;
  el.style.color = color;
};

transferButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (balance > transferAmount.value) {
    if (
      activeAccount.password === transferPassword.value.trim(" ") &&
      transferAmount.value
    ) {
      activeAccount.movs.push(Number("-" + transferAmount.value));
      displayMovements(activeAccount.movs);
      balance = 0;
      calcBalance();
      calcOther();
      changeElementTitle(transferTitle, "Mony Transferred", "#00ff95");
    } else {
      changeElementTitle(transferTitle, "Enter Amount & Password", "red");
    }
  } else
    changeElementTitle(transferTitle, "You don't have enough money", "red");
});

/* Loan Page*/
loanButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    activeAccount.password === loanPassword.value.trim(" ") &&
    loanAmount.value
  ) {
    if (balance > loanAmount.value) {
      activeAccount.movs.push(Number(loanAmount.value));
      displayMovements(activeAccount.movs);
      balance = 0;
      calcBalance();
      calcOther();
      changeElementTitle(loanTitle, "Done", "#00ff95");
    } else
      changeElementTitle(
        loanTitle,
        "You don't have enough mony to get loan",
        "red"
      );
  } else changeElementTitle(loanTitle, "Enter Amount & Password", "red");
});

/* Profile Page */
profileBtn.addEventListener("click", () => {
  profileName.textContent = `${activeAccount.firstName} ${activeAccount.lastName}`;
  profileMail.textContent = activeAccount.eMail;
  profilePassword.textContent = activeAccount.password;
});

//delete account
deleteAccount.addEventListener("click", () => {
  accounts.map((acc) => {
    if (acc.eMail === activeAccount.eMail) {
      const i = accounts.indexOf(acc);
      accounts.splice(i, 1);
      changeClass(upperPart, profile, "inactive", "inactive", "add");
      logContainer.classList.remove("inactive");
    }
  });
});

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
        logInMail.value = "";
        logInPassword.value = "";

        activeAccount = acc;

        displayMovements(activeAccount.movs);
        calcBalance();
        calcOther();
        changeName();

        message.classList.add("inactive");
      }
    });
    if (!activeAccount) {
      messageControl("Username or Password incorrect");
    }
  }
});
