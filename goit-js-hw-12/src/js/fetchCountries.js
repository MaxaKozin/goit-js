import createCard from './templating';
import refs from './refs';

export default function () {
  if (refs.inputRef.value.length > 0) {
    fetch(refs.url + refs.inputRef.value)
      .then(response => response.json())
      .then(data => createCard(data));
  } else {
    refs.menuRef.innerHTML = '';
  }
}
