console.log(
  '%c ---- Promisification ---- ',
  'color: palevioletred; font-size: 20px',
);
// Task-1
function task1() {
  console.log('%c Task-1', 'color: teal; font-size: 20px');
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  const logger = time => console.log(`Resolved after ${time}ms`);

  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
}
task1();

// Task-2
function task2() {
  console.log('%c Task-2', 'color: teal; font-size: 20px');

  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) =>
    new Promise(resolve => {
      resolve(
        allUsers.map(user =>
          user.name === userName ? { ...user, active: !user.active } : user,
        ),
      );
    });

  const logger = updatedUsers => console.table(updatedUsers);

  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
}
setTimeout(task2, 2500);

// Task-3
function task3() {
  console.log('%c Task-3', 'color: teal; font-size: 20px');
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = transaction => {
    return new Promise((resolve, reject) => {
      const delay = randomIntegerFromInterval(200, 500);
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
          resolve([transaction.id, delay]);
        }
        reject(transaction.id);
      }, delay);
    });
  };

  const logSuccess = arr => {
    console.log(`Transaction ${arr[0]} processed in ${arr[1]}ms`);
  };

  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };

  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);
}
setTimeout(task3, 3000);
