import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryParent = document.querySelector('.gallery');

const galleryList = galleryItems.map(item => {
    const listItem = document.createElement('a');
    listItem.classList.add('gallery__item');
    listItem.href = item.original;

    const galleryPic = document.createElement('img');
    galleryPic.classList.add('gallery__image');
    galleryPic.src = item.preview;
    galleryPic.alt = item.description;
    
    listItem.append(galleryPic);

    return listItem;
});

galleryParent.append(...galleryList);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
