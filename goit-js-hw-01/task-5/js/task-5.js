let price;
const destination = prompt('Введите название страны назначения:', '');

if (destination === null) {
  console.log('Cancelled by User! Please refresh the page to continue...');
} else {
  switch (destination.toLowerCase()) {
    case 'китай':
      price = 100;
      break;

    case 'чили':
      price = 250;
      break;

    case 'австралия':
      price = 170;
      break;

    case 'индия':
      price = 80;
      break;

    case 'ямайка':
      price = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна!');
  }
  alert(`Доставка в ${destination} будет стоить ${price} кредитов`);
}
