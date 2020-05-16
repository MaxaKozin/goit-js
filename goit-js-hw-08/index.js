import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');
const modalContent = document.querySelector('.lightbox__content');

const createItem = (galleryItem, indexCounter) => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.alt = galleryItem.description;
  image.src = galleryItem.preview;
  image.dataset.index = indexCounter;
  link.appendChild(image);
  item.appendChild(link);
  return item;
};

const createGallery = items => {
  const itemsRef = [];
  let indexCounter = 0;
  items.map(item => {
    itemsRef.push(createItem(item, indexCounter));
    indexCounter += 1;
    return itemsRef;
  });
  gallery.append(...itemsRef);
};
window.onload = createGallery(galleryItems);

const openModal = counter => {
  window.addEventListener('keydown', onPressEsc);
  window.addEventListener('keydown', onRightClick);
  window.addEventListener('keydown', onLeftClick);
  lightbox.classList.add('is-open');
  addSource(galleryItems, counter);
};

const closeModal = () => {
  window.removeEventListener('keydown', onPressEsc);
  window.removeEventListener('keydown', onRightClick);
  window.removeEventListener('keydown', onLeftClick);
  lightbox.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';
};

const addSource = (arr, counter) => {
  modalImage.src = arr[counter].original;
  modalImage.alt = arr[counter].description;
};

const swapImage = (items, add) => {
  const filtered = items.filter(item => item.original === modalImage.src);
  const currentImage = filtered[0];
  const currentIndex = items.indexOf(currentImage);
  if (currentIndex + add >= 0 && currentIndex + add < items.length) {
    addSource(galleryItems, currentIndex + add);
  }
};

const onPressEsc = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onGalleryClick = event => {
  event.preventDefault();
  const itemCounter = Number(event.target.dataset.index);
  if (event.currentTarget !== event.target) {
    openModal(itemCounter);
  }
};

const onButtonClick = event => {
  if (event.target === closeBtn) {
    closeModal();
  }
};

const onBackdropClick = event => {
  if (event.target === modalContent) {
    closeModal();
  }
};

const onLeftClick = event => {
  if (event.code === 'ArrowLeft') {
    swapImage(galleryItems, -1);
  }
};

const onRightClick = event => {
  if (event.code === 'ArrowRight') {
    swapImage(galleryItems, 1);
  }
};

gallery.addEventListener('click', onGalleryClick);
lightbox.addEventListener('click', onButtonClick);
lightbox.addEventListener('click', onBackdropClick);
