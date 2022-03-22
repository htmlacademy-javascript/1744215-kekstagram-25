import { createPhotos as createPictures } from './random-photos.js';
import { renderPicture } from './picture.js';
import { showBigPicture, hideBigPicture } from './big-picture.js';

const pictures = createPictures(25,
  {
    comments: {
      min: 10,
      max: 25,
    },
  });


const picturesElement = document.querySelector('.pictures');

const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = renderPicture(picture);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(picture);
    });

    fragment.appendChild(pictureElement);
  });

  picturesElement.appendChild(fragment);
};

addPictures(pictures);
