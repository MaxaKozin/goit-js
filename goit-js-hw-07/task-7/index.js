const fontSizeRef = document.querySelector('#font-size-control');
const outputTextRef = document.querySelector('#text');

fontSizeRef.addEventListener('input', event => {
  outputTextRef.style.fontSize = `${event.target.value}px`;
});
