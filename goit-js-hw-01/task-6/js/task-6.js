let total = 0;
let input;

while (input !== null) {
  input = prompt('Введите число:');
  total += Number(input);
}

alert(`Общая сумма чисел равна : ${total}`);
