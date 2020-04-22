'use strict';

const countProps = function (obj) {
  const keys = Object.keys(obj);
  let total = 0;
  // eslint-disable-next-line
  for (const key of keys) {
    total += 1;
  }
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
