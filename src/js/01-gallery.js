import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryParent = document.querySelector('.gallery');
const instance = basicLightbox.create(`
        <div class="modal">
            <img class="modal__image" src="" alt="" />
        </div>
    `);

const galleryList = galleryItems.map(item => {
    const listItem = document.createElement('div');
    listItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryPic = document.createElement('img');
    galleryPic.classList.add('gallery__image');
    galleryPic.src = item.preview;
    galleryPic.dataset.source = item.original;
    galleryPic.alt = item.description;
    
    listItem.append(galleryLink);
    galleryLink.append(galleryPic);

    return listItem;
});

galleryParent.append(...galleryList);

galleryParent.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    instance.show();

    const modalImage = document.querySelector('.modal__image');
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;

    window.addEventListener('keydown', (evt) => {
        if (instance.visible() && evt.code === "Escape") {
        instance.close();
        }
        return;
    });

    const modal = document.querySelector('.modal');
    modal.addEventListener('click', (event) => {
        instance.close();
    });
}

