console.log("this is a file for oops in javascript");

function BankAccount(username , balance = 0){
    this.userName = username;
    this.accountNumber = Date.now();
    this.balance = balance;

    // functions in a class is calleld methods 
    this.deposite = function(amount){
        this.balance = this.balance + amount;
    }
}

const mohit = new BankAccount("Mohit", 10000);

mohit.deposite(5200); // this will add 5200 amount in your bank account

console.log(mohit);