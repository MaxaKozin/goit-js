let total = 0;
let input;

do {
  input = prompt('Введите число:', '');
  total += Number(input);
} while (input !== null);

alert(`Общая сумма чисел равна : ${total}`);
