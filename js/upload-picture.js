import { isEscapeKey } from './util/common.js';

import { getFilter } from './css-filter.js';
import { resetScale, setScaleChangeHandler } from './upload-picture-scale.js';
import { showSlider, hideSlider, resetSlider, setSliderUpdateHandler } from './upload-picture-slider.js';
import { setCurrentEffect, getCurrentEffect, setEffectChangeHandler } from './upload-picture-effects.js';
import { 
  validateMask, 
  validateQuantity,
  validateDuplicates,
  validateLength,
} from './upload-picture-hashtags.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const EFFECT_DEFAULT = 'none';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadOverlayElement = document.querySelector('.img-upload__overlay');
const previewImageElement = uploadFormElement.querySelector('.img-upload__preview img');
const hashtagsElement = uploadFormElement.querySelector('.text__hashtags');
const textareaElement = uploadFormElement.querySelector('.img-upload__text textarea');
const uploadInputElement = uploadFormElement.querySelector('.img-upload__input');
const cancelButtonElement = uploadFormElement.querySelector('#upload-cancel');
const submitButtonElement = uploadFormElement.querySelector('#upload-submit');

const validator = new window.Pristine(uploadFormElement, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});

let handleUploadPictureSubmit = null;

const setUploadPictureSubmitHandler = (callback) => {
  handleUploadPictureSubmit = callback;
};

const setPreviewImage = (file) => {
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((ext) => fileName.endsWith(ext));
  
  if (matches) {
    previewImageElement.src = URL.createObjectURL(file);
  }
};

const resetUploadPicture = () => {
  resetScale();
  setCurrentEffect(EFFECT_DEFAULT);
  hideSlider();
  validator.reset();
};

const showUploadPicture = () => {
  resetUploadPicture();
  
  document.body.classList.add('modal-open');
  uploadOverlayElement.classList.remove('hidden');

  document.addEventListener('keydown', onEscapeKeydown);
};

const hideUploadPicture = () => {
  uploadFormElement.reset();
  URL.revokeObjectURL(previewImageElement.src);
  previewImageElement.src = '';
  resetUploadPicture();
  
  document.body.classList.remove('modal-open');
  uploadOverlayElement.classList.add('hidden');
  
  document.removeEventListener('keydown', onEscapeKeydown);
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
};

const isTextInput = (element) => element === hashtagsElement || element === textareaElement;

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt) && ! isTextInput(evt.target)) {
    evt.preventDefault();
    hideUploadPicture();
  }
};

setScaleChangeHandler((value) => {
  previewImageElement.style.transform = `scale(${value / 100})`;
})

setSliderUpdateHandler((volume) => {
  previewImageElement.style.filter = getFilter(getCurrentEffect(), volume);
})

setEffectChangeHandler((currentEffect, previousEffect) => {
  previewImageElement.classList.remove(`effects__preview--${previousEffect}`);
  previewImageElement.classList.add(`effects__preview--${currentEffect}`);

  if (currentEffect === EFFECT_DEFAULT) {
    hideSlider();
  } else {
    showSlider();
  }

  resetSlider();
})

validator.addValidator(hashtagsElement, validateQuantity, 'не более 5 хеш-тегов', 1, true);
validator.addValidator(hashtagsElement, validateLength, 'максимальная длина одного хэш-тега 20 символов, включая решётку', 1, true);
validator.addValidator(hashtagsElement, validateMask, 'недопустимые символы', 1, true);
validator.addValidator(hashtagsElement, validateDuplicates, 'хеш-теги не должны повторяться', 1, true);

cancelButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  hideUploadPicture();
})

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const value = hashtagsElement.value.trim();

  console.log('validate', validator.validate());
  
  if (value === '' || validator.validate()) {
    const formData = new FormData(evt.target)
    handleUploadPictureSubmit(formData);
  }
});

uploadInputElement.addEventListener('change', (evt) => {
  setPreviewImage(evt.target.files[0]);
  showUploadPicture();
});

export {
  showUploadPicture,
  hideUploadPicture,
  blockSubmitButton,
  unblockSubmitButton,
  setUploadPictureSubmitHandler,
};