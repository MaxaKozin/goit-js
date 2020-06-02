import debounce from 'lodash.debounce';
import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { error } from '../../node_modules/@pnotify/core/dist/PNotify';

export default function () {
  const menuRef = document.querySelector('.js-cards');
  const inputRef = document.querySelector('.js-input');
  const url = `https://restcountries.eu/rest/v2/name/`;
  const errorMessage = () => {
    error({
      title: 'Too many matches found!',
      text: 'Please enter more specific query...',
    });
  };
  const createCard = data => {
    if (data.length >= 2 && data.length <= 10) {
      menuRef.innerHTML = countryList(data);
    }
    if (data.length === 1) {
      menuRef.innerHTML = countryCard(data);
    }
    if (data.length > 10) {
      errorMessage();
    }
  };
  const fetchCountries = () => {
    if (inputRef.value.length > 0) {
      fetch(url + inputRef.value)
        .then(response => response.json())
        .then(data => createCard(data));
    } else {
      menuRef.innerHTML = '';
    }
  };
  inputRef.addEventListener('input', debounce(fetchCountries, 500));
}
