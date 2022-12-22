console.log("this is a file for oops in javascript");

function BankAccount(username , balance = 0){
    this.userName = username;
    this.accountNumber = accNum;
    this.balance = balance;
}

const mohit = new BankAccount("Mohit", 10000);
console.log(mohit);