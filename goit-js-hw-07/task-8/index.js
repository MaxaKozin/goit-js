const controlsRef = document.querySelector('#controls');
const inputRef = controlsRef.firstElementChild;
const createBtnRef = controlsRef.querySelector('button[data-action="render"]');
const clearBtnRef = controlsRef.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let width = 30;
let height = 30;
let boxItemsRef = [];

const randomBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r},${g},${b})`;
  return bgColor;
};

const createBox = () => {
  const boxRef = document.createElement('div');
  boxRef.style.width = `${width}px`;
  boxRef.style.height = `${height}px`;
  boxRef.style.backgroundColor = randomBgColor();
  return boxRef;
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    boxItemsRef.push(createBox());
    width += 10;
    height += 10;
  }
  boxesRef.append(...boxItemsRef);
};

createBtnRef.addEventListener('click', () => {
  createBoxes(Number(inputRef.value));
});

clearBtnRef.addEventListener('click', () => {
  while (boxesRef.firstChild) {
    boxesRef.firstChild.remove();
  }
  boxItemsRef = [];
  width = 30;
  height = 30;
});
