// ==========================================
// ACCOUNT CLASS
// ==========================================

class Account {

    constructor(id, accountNumber, owner, balance, accountType, status) {

        this.id = id;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
        this.status = status;
        this.rank = 0;
    }


    // ==========================================
    // DEPOSIT
    // ==========================================

    deposit(amount) {

        if (amount <= 0) {
            return "Invalid deposit amount.";
        }

        this.balance += amount;

        return "Deposit successful.";
    }


    // ==========================================
    // WITHDRAW
    // ==========================================

    withdraw(amount) {

        if (amount <= 0) {
            return "Invalid withdrawal amount.";
        }

        if (amount > this.balance) {
            return "Insufficient balance.";
        }

        this.balance -= amount;

        return "Withdrawal successful.";
    }


    // ==========================================
    // ACCOUNT STATUS
    // ==========================================

    getAccountStatus() {

        if (this.status === "Active") {
            return "ACTIVE";
        }

        if (this.status === "Inactive") {
            return "INACTIVE";
        }

        return "UNKNOWN";
    }


    // ==========================================
    // VALIDATE DATA
    // ==========================================

    validateData() {

        if (this.id <= 0)
            return "Invalid ID";

        if (this.accountNumber <= 0)
            return "Invalid account number";

        if (this.owner === "")
            return "Account owner is empty";

        if (this.balance < 0)
            return "Balance cannot be negative";

        if (this.accountType === "")
            return "Account type is empty";

        return null;
    }
}


// ==========================================
// PREMIUM ACCOUNT
// ==========================================

class PremiumAccount extends Account {

    // Method overriding
    getAccountStatus() {

        if (this.status === "Active") {
            return "PREMIUM ACTIVE";
        }

        if (this.status === "Inactive") {
            return "PREMIUM INACTIVE";
        }

        return "UNKNOWN";
    }
}


// ==========================================
// ACCOUNTS
// ==========================================

const accounts = [

    new Account(
        1,
        1001,
        "John",
        25000,
        "Savings",
        "Active"
    ),

    new Account(
        2,
        1002,
        "Mark",
        10000,
        "Savings",
        "Active"
    ),

    new Account(
        3,
        1003,
        "Sarah",
        50000,
        "Checking",
        "Active"
    ),

    new Account(
        4,
        1004,
        "Anna",
        5000,
        "Savings",
        "Inactive"
    ),

    new Account(
        5,
        1005,
        "Mike",
        80000,
        "Checking",
        "Active"
    ),

    new PremiumAccount(
        6,
        1006,
        "James",
        100000,
        "Premium",
        "Active"
    )
];


// ==========================================
// VALIDATION
// ==========================================

for (let account of accounts) {

    let error = account.validateData();

    if (error) {

        console.log(error);

        return;
    }
}

console.log("All account data is valid.");


// ==========================================
// SORT BY BALANCE
// HIGHEST FIRST
// ==========================================

accounts.sort((a, b) => b.balance - a.balance);


// ==========================================
// RANKING
// ==========================================

for (let i = 0; i < accounts.length; i++) {

    accounts[i].rank = i + 1;
}


// ==========================================
// ACCOUNT RANKING
// ==========================================

console.log("\n===== ACCOUNT RANKING =====");

for (let account of accounts) {

    console.log(
        account.rank +
        ". " +
        account.owner +
        " - ₱" +
        account.balance.toLocaleString()
    );
}


// ==========================================
// QUALIFIED ACCOUNTS
// ==========================================

// Balance must be at least ₱50,000
// AND account must be Active

const qualifiedAccounts = accounts.filter(account =>
    account.balance >= 50000 &&
    account.status === "Active"
);


console.log("\n===== QUALIFIED ACCOUNTS =====");

for (let account of qualifiedAccounts) {

    console.log(account.owner);
}


// ==========================================
// RICHEST ACCOUNT
// ==========================================

const richestAccount = accounts[0];

console.log("\n===== RICHEST ACCOUNT =====");

console.log(
    "Richest Account: " +
    richestAccount.owner
);

console.log(
    "Balance: ₱" +
    richestAccount.balance.toLocaleString()
);


// ==========================================
// FIND ACCOUNT
// ==========================================

function findAccount(accountNumber) {

    const account = accounts.find(
        account =>
            account.accountNumber === accountNumber
    );


    if (account) {

        console.log("\n===== ACCOUNT FOUND =====");

        console.log(
            "Account Number: " +
            account.accountNumber
        );

        console.log(
            "Owner: " +
            account.owner
        );

        console.log(
            "Balance: ₱" +
            account.balance.toLocaleString()
        );

        console.log(
            "Type: " +
            account.accountType
        );

        console.log(
            "Status: " +
            account.getAccountStatus()
        );

    } else {

        console.log("\nAccount not found.");
    }
}


// Test findAccount()
findAccount(1003);


// ==========================================
// TOTAL BANK BALANCE
// ==========================================

let totalBalance = 0;

for (let account of accounts) {

    totalBalance += account.balance;
}


console.log("\n===== BANK STATISTICS =====");

console.log(
    "Total Bank Balance: ₱" +
    totalBalance.toLocaleString()
);


// ==========================================
// AVERAGE BALANCE
// ==========================================

let averageBalance =
    totalBalance / accounts.length;


console.log(
    "Average Account Balance: ₱" +
    averageBalance.toLocaleString()
);


// ==========================================
// COUNT ACCOUNT TYPES
// ==========================================

let savingsCount = 0;
let checkingCount = 0;
let premiumCount = 0;


for (let account of accounts) {

    if (account.accountType === "Savings") {

        savingsCount++;

    } else if (account.accountType === "Checking") {

        checkingCount++;

    } else if (account.accountType === "Premium") {

        premiumCount++;
    }
}


console.log(
    "\nSavings Accounts: " +
    savingsCount
);

console.log(
    "Checking Accounts: " +
    checkingCount
);

console.log(
    "Premium Accounts: " +
    premiumCount
);


// ==========================================
// TRANSACTION FUNCTION
// ==========================================

function processTransaction(
    accountNumber,
    type,
    amount
) {

    const account = accounts.find(
        account =>
            account.accountNumber === accountNumber
    );


    // Check if account exists
    if (!account) {

        console.log("\nAccount not found.");

        return;
    }


    // Deposit
    if (type === "deposit") {

        const result =
            account.deposit(amount);

        console.log("\n===== TRANSACTION =====");

        console.log(
            "Account: " +
            account.accountNumber
        );

        console.log(
            "Deposit: ₱" +
            amount.toLocaleString()
        );

        console.log(result);

        console.log(
            "New Balance: ₱" +
            account.balance.toLocaleString()
        );

    }


    // Withdrawal
    else if (type === "withdraw") {

        const result =
            account.withdraw(amount);

        console.log("\n===== TRANSACTION =====");

        console.log(
            "Account: " +
            account.accountNumber
        );

        console.log(
            "Withdrawal: ₱" +
            amount.toLocaleString()
        );

        console.log(result);

        console.log(
            "New Balance: ₱" +
            account.balance.toLocaleString()
        );

    }


    // Invalid transaction
    else {

        console.log(
            "\nInvalid transaction type."
        );
    }
}


// ==========================================
// TEST TRANSACTIONS
// ==========================================

// Deposit ₱5,000 to John
processTransaction(
    1001,
    "deposit",
    5000
);


// Withdraw ₱3,000 from John
processTransaction(
    1001,
    "withdraw",
    3000
);


// Try to withdraw too much
processTransaction(
    1001,
    "withdraw",
    50000
);