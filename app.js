// require
const readlineSync = require('readline-sync')

// ******* //
// classes //
// ******* //

class User {
  constructor(username, password, log, accountBalance) {
    this.username = username;
    this.password = password;
    this.log = log;
    this.accountBalance = accountBalance;
  }
}

// ********* //
// variables //
// ********* //

let usersData = {};
let currentUser;
let mainMenu = [
  "Make a Deposit",
  "Make a Withdrawal",
  "View Transaction History",
  "Log Out"
]
let starDivider = (" * ").repeat(5)

// ********* //
// functions //
// ********* //

// user login
function checkUser() {
  // prompt for username
  let username = readlineSync.question("Please enter your username: ");
  // prompt for password
  let password = readlineSync.question("Please enter your password: ", { hideEchoBack: true });

  // if user is in usersData
  if (usersData[username]) {
    // check password
    console.log("Loggin in...");
    if (usersData[username]["password"] === password) {
      let password = readlineSync.question("Incorrect password. Please enter your password: ", { hideEchoBack: true });
    }
  } else { // if user is not in usersData, create account
    console.log("Creating account...\n");
    usersData[username] = new User (username, password);
    console.log("Success! Welcome " + username + "!\n");
    // assign current user
    currentUser = usersData[username];
    // console.log(currentUser);
    // console.log(usersData);
  }
  showMenu();
} // end user login

function showMenu(username) {
  console.log(starDivider + "Main Menu" + starDivider + "\n");
  console.log("Please select from the options below: ");
  let index = readlineSync.keyInSelect(mainMenu)

  switch (index+1) {
    case 1:
      makeDeposit();
      break;
    case 2:
      makeWithdrawl();
      break;
    case 3:
      viewTransactionHistory();
      break;
    case 4:
      console.log("Log Out");
      checkUser();
      break;
 }
}

function openLedger() {
  // weclome message
  console.log(starDivider + "Welcome to the World's Greatest Ledger" + starDivider + "\n");
  // user login
  checkUser();
} // end openLedger

openLedger();
