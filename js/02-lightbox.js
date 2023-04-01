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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `)
        .join('');
}

function onGalleryElClick(evt) {
    evt.preventDefault();

    let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
}