import refs from './refs';
import galleryTemplate from '../templates/gallery-item.hbs';

function updateMarkup(pictures) {
  const markup = galleryTemplate(pictures);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
