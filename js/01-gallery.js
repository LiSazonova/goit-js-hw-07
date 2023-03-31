import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const addGalleryItems = galleryCreateMarkup(galleryItems);

galleryEl.innerHTML = addGalleryItems;
galleryEl.addEventListener('click', onGalleryElClick);

function galleryCreateMarkup(items) {
    return items
        .map(({ preview, original, description }) =>
        `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `,)
        .join('');
}

function onGalleryElClick(evt) {
    evt.preventDefault();
    console.log(evt.target);

    const imgSource = evt.target.dataset.source;
    console.log(imgSource);
    const instance = basicLightbox.create(
    `
    <img src="${imgSource}" width="800" height="600">
`)
    instance.show();
}
