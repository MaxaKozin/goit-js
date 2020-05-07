'use strict';

const account = {
  balance: 0,
  taId: 0, // Начальный счетчик ID транзакций
  transactions: [],

  createTransaction(amount, type) {
    this.taId += 1;
    const transaction = {
      transactionId: this.taId,
      transactionAmount: amount,
      transactionType: type,
    };
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
    return `Операция прошла успешно, внесено ${amount} кредитов на Ваш счет`;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
    } else {
      return 'Недостаточно средств на счету!';
    }
    return `Операция прошла успешно! Снято ${amount} кредитов с Вашего счета`;
  },

  getBalance() {
    return `На Вашем счету ${this.balance} кредитов`;
  },

  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      if (trans.transactionId === id) {
        return trans;
      }
    }
    return 'ID does not exist';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const obj of this.transactions) {
      if (obj.transactionType === type) {
        total += obj.transactionAmount;
      }
    }
    return total;
  },
};

// Проверка и запуск методов

console.log(account.deposit(500));
console.log(account.deposit(500));
console.log(account.deposit(500));
console.log(account.deposit(500));
console.log(account.withdraw(320));
console.log(account.withdraw(320));
console.log(account.withdraw(320));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account);
console.log(account.transactions);
