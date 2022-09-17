import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryParent = document.querySelector('.gallery');
// const instance = basicLightbox.create(`
//         <div class="modal">
//             <img class="modal__image" src="" alt="" />
//         </div>
//     `);

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

let gallery = new SimpleLightbox('.gallery a');

// galleryParent.addEventListener('click', onImageClick);

// function onImageClick(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }

//     instance.show();

//     const modalImage = document.querySelector('.modal__image');
//     modalImage.src = e.target.dataset.source;
//     modalImage.alt = e.target.alt;

//     window.addEventListener('keydown', (evt) => {
//         if (instance.visible() && evt.code === "Escape") {
//         instance.close();
//         }
//         return;
//     });

//     const modal = document.querySelector('.modal');
//     modal.addEventListener('click', (event) => {
//         instance.close();
//     });
// }
