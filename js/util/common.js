const ESCAPE_KEYS = [
  'Escape',
  'Esc',
];

const isEscapeKey = (evt) => ESCAPE_KEYS.includes(evt.key);

const checkDuplicates = (items) => items.some((hashtag, i) => items.indexOf(hashtag, i + 1) > 0); 

const removeElement = (element) => {
  element.remove();
};

export {
  isEscapeKey,
  checkDuplicates,
  removeElement,
};