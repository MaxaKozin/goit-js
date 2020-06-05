import * as basicLightbox from 'basiclightbox';
import LoadMoreButton from './js/LoadMoreButton';
import apiService from './js/apiService';
import updateMarkup from './js/updateMarkup';
import refs from './js/refs';
import 'basiclightbox/dist/basicLightbox.min.css';

import './styles.scss';

const loadMoreButton = new LoadMoreButton({
  selector: '.js-button',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', fetchPictures);
refs.gallery.addEventListener('click', event => {
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
  instance.show();
});

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearMarkup();
  apiService.resetPage();
  fetchPictures();
  form.reset();
}

function fetchPictures() {
  loadMoreButton.disable();

  apiService.fetchPictures().then(pictures => {
    updateMarkup(pictures);
    loadMoreButton.show();
    loadMoreButton.enable();
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
}

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
