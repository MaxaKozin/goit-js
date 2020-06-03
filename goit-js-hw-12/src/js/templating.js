import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';
import errorMessage from './errorNotify';
import refs from './refs';

const createCard = data => {
  if (data.length >= 2 && data.length <= 10) {
    refs.menuRef.innerHTML = countryList(data);
  }
  if (data.length === 1) {
    refs.menuRef.innerHTML = countryCard(data);
  }
  if (data.length > 10) {
    errorMessage();
  }
};

export default createCard;
