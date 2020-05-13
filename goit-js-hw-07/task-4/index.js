const counterWrapperRef = document.querySelector('#counter');
const decrementBtnRef = counterWrapperRef.firstElementChild;
const incrementBtnRef = counterWrapperRef.lastElementChild;
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);
console.log(counterValue);

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
