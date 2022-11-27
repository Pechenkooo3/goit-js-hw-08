// // Add imports above this line
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);

// const imgGalleryEl = document.querySelector('.gallery');
// const markupGallery = createMarkUp(galleryItems);
// imgGalleryEl.innerHTML = markupGallery;

// function createMarkUp(galleryItems) {
//   return galleryItems
//     .map(item => {
//       return `
//       <a class="gallery__item" href="${item.original}">
//     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
//     </a>
//      `;
//     })
//     .join('');
// }

// imgGalleryEl.insertAdjacentHTML('beforeend', galleryItems);
// // imgGalleryEl.addEventListener('click', onClickImg);

// // let instance = '';
// // function onClickImg(event) {
// //   event.preventDefault();
// //   if (event.target.nodeName !== 'IMG') {
// //     return;
// //   }

// new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
