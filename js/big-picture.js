import { renderComment } from './big-picture-comment.js';

const SHOW_COMMENTS_COUNT = 5;

const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const commentsCurrentElement = bigPictureElement.querySelector('.comments-current');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const cancelButtonElement = bigPictureElement.querySelector('#picture-cancel');
const socialCommentsListElement = bigPictureElement.querySelector('.social__comments');
const socialCaptioElement = bigPictureElement.querySelector('.social__caption');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');

let handleCancelButtonClick = null;
let count = 0;
let currentComments = [];

const setCancelButtonClickHandler = (callback) => {
  handleCancelButtonClick = callback;
};

const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  handleCancelButtonClick();
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const addComments = (comments) => {
  socialCommentsListElement.append(...comments.map(renderComment));
};

const removeComments = () => {
  socialCommentsListElement.innerHTML = '';
};

const onCommentsLoader = (evt) => {
  evt.preventDefault();

  const nextComments = currentComments.slice(count, count + SHOW_COMMENTS_COUNT);
  addComments(nextComments);
  count += nextComments.length;

  commentsCurrentElement.textContent = count;

  if (count >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
};

const showBigPicture = (picture) => {
  const { url, description, likes, comments } = picture;

  count = 0;
  currentComments = comments;

  const nextComments = currentComments.slice(0, SHOW_COMMENTS_COUNT);

  imageElement.src = url;
  imageElement.alt = description;
  socialCaptioElement.textContent = description;
  likesCountElement.textContent = likes;
  commentsCurrentElement.textContent = nextComments.length;
  commentsCountElement.textContent = currentComments.length;

  removeComments();
  addComments(nextComments);

  count += nextComments.length;

  document.body.classList.add('modal-open');
  bigPictureElement.classList.remove('hidden');

  if (currentComments.length > SHOW_COMMENTS_COUNT) {
    commentsLoaderElement.classList.remove('hidden');
    commentsLoaderElement.addEventListener('click', onCommentsLoader);
  } else {
    commentsLoaderElement.classList.add('hidden');
  }

  cancelButtonElement.addEventListener('click', onCancelButtonClick);
};

export {
  showBigPicture,
  hideBigPicture,
  setCancelButtonClickHandler,
};
