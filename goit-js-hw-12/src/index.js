import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import './styles.scss';
import refs from './js/refs';

refs.inputRef.addEventListener('input', debounce(fetchCountries, 500));
