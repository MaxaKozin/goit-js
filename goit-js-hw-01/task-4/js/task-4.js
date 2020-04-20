'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let orderQuantity;
let totalPrice;

orderQuantity = prompt('Какое количество дроидов Вы хотите приобрести?');

if (orderQuantity === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(orderQuantity) * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${orderQuantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов`,
    );
  }
}
