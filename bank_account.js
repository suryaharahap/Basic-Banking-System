class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  async deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          this.balance += amount;
          resolve(
            `Deposit of $${amount} successful. New balance: $${this.balance}`
          );
        } else {
          reject("Invalid deposit amount.");
        }
      }, 2000);
    });
  }

  async withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          if (this.balance >= amount) {
            this.balance -= amount;
            resolve(
              `Withdrawal of $${amount} successful. New balance: $${this.balance}`
            );
          } else {
            reject("Insufficient funds for withdrawal.");
          }
        } else {
          reject("Invalid withdrawal amount.");
        }
      }, 2000);
    });
  }
}

module.exports = BankAccount;
