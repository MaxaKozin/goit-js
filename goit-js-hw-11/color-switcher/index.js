const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
let onSwitchInterval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitcher = bgColors => {
  bodyRef.style.backgroundColor =
    bgColors[randomIntegerFromInterval(0, bgColors.length - 1)];
  console.log(`${bodyRef.style.backgroundColor} is applied`);
};

const onStartClick = () => {
  onSwitchInterval = setInterval(colorSwitcher, 1000, colors);
  startBtnRef.disabled = true;
};

const onStopClick = () => {
  clearInterval(onSwitchInterval);
  startBtnRef.disabled = false;
};

startBtnRef.addEventListener('click', onStartClick);
stopBtnRef.addEventListener('click', onStopClick);
