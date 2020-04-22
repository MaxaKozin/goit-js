'use strict';

let taId = 0; // Начальный счетчик ID транзакций

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    taId += 1;
    const transaction = {
      transactionId: taId,
      transactionAmount: amount,
      transactionType: type,
    };
    this.transactions.push(transaction);
  },

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, 'deposit');
    return `Операция прошла успешно, внесено ${amount} кредитов на Ваш счет`;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.createTransaction(amount, 'withdraw');
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
    let totalDeposit = 0;
    let totalWithdraw = 0;
    for (const transaction of this.transactions) {
      if (transaction.transactionType === 'deposit') {
        totalDeposit += transaction.transactionAmount;
      }
      if (transaction.transactionType === 'withdraw') {
        totalWithdraw += transaction.transactionAmount;
      }
    }
    if (type === 'deposit') {
      return totalDeposit;
    }
    if (type === 'withdraw') {
      return totalWithdraw;
    }
    return 'Wrong transaction type!';
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
console.log(account);
console.log(account.transactions);
