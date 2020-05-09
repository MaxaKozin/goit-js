const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => {
  outputRef.textContent = e.target.value;
  if (!e.target.value) {
    outputRef.textContent = 'незнакомец';
  }
});
