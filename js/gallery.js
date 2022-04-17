import { renderPicture } from './picture.js';
import {
  showBigPicture,
  hideBigPicture,
  setCancelButtonClickHandler,
} from './big-picture.js';

import { isEscapeKey } from './util/common.js';

const picturesElement = document.querySelector('.pictures');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = renderPicture(picture);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      showBigPicture(picture);
      document.addEventListener('keydown', onEscapeKeydown);
    });

    fragment.appendChild(pictureElement);
  });

  picturesElement.appendChild(fragment);

  setCancelButtonClickHandler(() => {
    hideBigPicture();
    document.removeEventListener('keydown', onEscapeKeydown);
  });
};

const removePictures = () => {
  picturesElement.querySelectorAll('.picture').forEach((pictureElement) => {
    pictureElement.remove();
  });
};

export {
  addPictures,
  removePictures,
};
