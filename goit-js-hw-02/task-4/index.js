'use strict';

const formatString = function (string) {
  let modifiedString = string;
  const stringEnding = '...';

  if (string.length > 40) {
    const stringSliced = string.slice(0, 40);
    modifiedString = stringSliced + stringEnding;
  }

  return modifiedString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
