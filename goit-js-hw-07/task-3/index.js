const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// 1 вариант

const listRef = document.querySelector('#gallery');

// const createItemRef = item => {
//   const itemRef = document.createElement('li');
//   itemRef.classList.add('gallery__item');
//   const imgRef = document.createElement('img');
//   imgRef.classList.add('gallery__img');
//   imgRef.src = item.url;
//   imgRef.alt = item.alt;
//   itemRef.append(imgRef);
//   return itemRef;
// };
// const itemsRef = images.map(image => createItemRef(image));
// listRef.append(...itemsRef);

// 2 вариант

let htmlText = ``;
images.forEach(image => {
  htmlText += `<li class="gallery__item"><img class="gallery__img" src=${image.url} alt=${image.alt}></li>`;
});

listRef.insertAdjacentHTML('afterbegin', htmlText);
