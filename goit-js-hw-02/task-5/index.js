'use strict';

const checkForSpam = function (message) {
  const string = message.toLowerCase();
  const res = string.includes('spam') || string.includes('sale');
  return res;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
