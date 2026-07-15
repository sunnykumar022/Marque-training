function createBankAccount(accHolder, mobile, email, balance = 0) {
    return {
        accountHolder: accHolder,
        mobile: mobile,
        email: email,
        balance: balance,

        deposit(amount) {
            this.balance += amount;
        },

        withdraw(amount) {
            this.balance -= amount;
        },

        checkBalance() {
            console.log(`Your balance is ${this.balance}`);
        },

        checkBankProfile() {
            console.log(`Account Holder = ${accHolder}`);
            console.log(`Mobile no. = ${mobile}`);
            console.log(`Email = ${email}`);
            console.log(`Account Balance = ${this.balance}`);
        }
    };
}


let account1 = createBankAccount(
    "Sunny Kumar",
    "9876543210",
    "sunny@gmail.com",
    1000
);

account1.checkBankProfile();

account1.deposit(500);
account1.checkBalance();

account1.withdraw(200);
account1.checkBalance();