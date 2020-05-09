const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const createItemRef = item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
};

const ingredientsRef = ingredients.map(product => createItemRef(product));

listRef.append(...ingredientsRef);
