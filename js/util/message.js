import { isEscapeKey, removeElement } from './common.js';

const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');

const showMessage = (type) => {
  const templateElement = type === 'success'
    ? successMessageTemplateElement
    : errorMessageTemplateElement;

  const messageElement = templateElement.cloneNode(true);
  const messageBlockElement = messageElement.querySelector(`.${type}__inner`);
  const messageTitleElement = messageElement.querySelector(`.${type}__title`);

  const remove = () => {
    messageElement.remove();
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onEscapeKeydown);
  };

  function onEscapeKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      remove();
    }
  }

  function onClick(evt) {
    evt.preventDefault();
    if (messageBlockElement === evt.target || messageTitleElement === evt.target) {
      return;
    }

    remove();
  }

  document.body.append(messageElement);

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onEscapeKeydown);
};

const showSuccessMessage = () => showMessage('success');
const showErrorMessage = () => showMessage('error');

const showAlertMessage = (message, delay = 5000) => {
  const containerElement = document.createElement('div');
  const style = containerElement.style;
  style.zIndex = 100;
  style.position = 'absolute';
  style.left = 0;
  style.top = 0;
  style.right = 0;
  style.padding = '10px 3px';
  style.fontSize = '30px';
  style.textAlign = 'center';
  style.backgroundColor = 'red';

  containerElement.textContent = message;

  document.body.append(containerElement);

  setTimeout(removeElement, delay, containerElement);
};


export {
  showAlertMessage,
  showSuccessMessage,
  showErrorMessage,
};
