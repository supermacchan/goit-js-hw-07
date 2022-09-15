import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

    // console.log(listItem); 

    return listItem;
});

const galleryParent = document.querySelector('.gallery');
galleryParent.append(...galleryList);


// добавить в делегирование снятие дефотла?
// const galleryLink = document.querySelectorAll('.gallery__link');
// galleryLink.addEventListener('click', (event) => {
//     event.preventDefault();
// })



// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) 
// файлы библиотеки.

// Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.