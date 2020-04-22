'use strict';

const findBestEmployee = function (employees) { //eslint-disable-line
  const tasks = Object.values(employees);
  const names = Object.keys(employees);
  let highestTasksCounter = 0;
  let employeeIndex = 0;
  // eslint-disable-next-line
  for (let task of tasks) {
    if (task > highestTasksCounter) {
      highestTasksCounter = task;
      employeeIndex = tasks.indexOf(task);
    }
  }
  return names[employeeIndex];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
