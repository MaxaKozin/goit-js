const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.attributes['data-length'].value);

inputRef.addEventListener('change', event => {
  if (event.target.value.length === inputLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
    return;
  }
  event.target.classList.add('invalid');
  event.target.classList.remove('valid');
});
