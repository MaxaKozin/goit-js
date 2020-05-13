const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.attributes['data-length'].value);

const setValid = event => {
  event.target.classList.add('valid');
  event.target.classList.remove('invalid');
};

const setInvalid = event => {
  event.target.classList.add('invalid');
  event.target.classList.remove('valid');
};

inputRef.addEventListener('change', event => {
  if (event.target.value.length === inputLength) {
    setValid(event);
    return;
  }
  setInvalid(event);
});
