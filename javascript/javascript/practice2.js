class Bank {
    constructor (account_name, account_number, balance, transac) {
        this.account_name = account_name
        this.account_number = account_number
        this.balance = balance
        this.transac = transac
    }

    Transaction () {
        console.log("Account Holder: " + this.account_name);
        console.log("Account Number: " + this.account_number);
        console.log("Balance: " + this.balance)
    }

    deposit (amount) {
        this.amount = amount
        this.balance += amount
        console.log("Deositing: " + amount)
        console.log("New Balance: " + this.balance)
    }

    withdraw (amount) {
        this.amount = amount
        this.balance -= amount
        console.log("Withdraw: " + amount)
        console.log("New Balance: " + this.balance)
    }
}

function print(Bank) {
    console.log("========= Transaction Receipt =========");
    console.log("Account Holder: " + account.account_name);
    console.log("Transaction: " + account.transac);
    console.log("Amount: " + account.amount)
    console.log("Remaining Balance: " + account.balance)
}

const account = new Bank ("Erick", 123456, 300 ,"deposit" );

account.Transaction()
account.deposit(200)
print(account)