// ДЗ 17.3. Клас "Банківський рахунок"
// Створіть клас BankAccount, який буде представляти банківський рахунок. 
// Додайте властивість балансу та методи для внесення та зняття грошей.
// class BankAccount {
// // Ваш код тут
// }
// const account1 = new BankAccount(1000);
// console.log(account1.getBalance()); // 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // 1300

class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Недостатньо коштів на рахунку");
        }
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300