const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const cancelButtonElement = bigPictureElement.querySelector('#picture-cancel');


const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  hideBigPicture();
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const showBigPicture = (picture) => {
  const { url, description } = picture;

  imageElement.src = url;
  imageElement.alt = description;

  document.body.classList.add('modal-open');
  bigPictureElement.classList.remove('hidden');

  cancelButtonElement.addEventListener('click', onCancelButtonClick);
};

export {
  showBigPicture,
  hideBigPicture,
};
