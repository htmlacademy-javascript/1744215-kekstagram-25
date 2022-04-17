import { addPictures, removePictures } from './gallery.js';
import { showFilters, setFilterChangeHandler } from './filter-form.js';
import { filterPictures } from './filters.js';
import {
  showUploadPicture,
  hideUploadPicture,
  blockSubmitButton,
  unblockSubmitButton,
  setUploadPictureSubmitHandler,
} from './upload-picture.js';

import { getData, sendData } from './api.js';
import { debounce } from './util/debounce.js';
import { showAlertMessage, showSuccessMessage, showErrorMessage } from './util/message.js';

let pictures = [];

getData(
  (data) => {
    pictures = data;

    addPictures(pictures);
    showFilters();

    setFilterChangeHandler(debounce((filterId) => {
      removePictures();
      addPictures(filterPictures(filterId, pictures));
    }));
  },
  showAlertMessage,
);

setUploadPictureSubmitHandler((formData) => {
  blockSubmitButton();
  sendData(
    formData,
    showSuccessMessage,
    showErrorMessage,
    () => {
      unblockSubmitButton();
      hideUploadPicture();
    },
  );
});
