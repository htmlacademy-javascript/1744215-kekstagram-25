const effectListElement = document.querySelector('.effects__list');

let currentEffect = 'none';
let handleEffectChange = null;

const getCurrentEffect = () => currentEffect;

const setCurrentEffect = (effect) => {
  currentEffect = effect;
};

const setEffectChangeHandler = (callback) => {
  handleEffectChange = callback;
};

effectListElement.addEventListener('change', (evt) => {
  evt.preventDefault();

  const previousEffect = currentEffect;
  currentEffect = evt.target.value;
  
  handleEffectChange(currentEffect, previousEffect);
});

export {
  getCurrentEffect,
  setCurrentEffect,
  setEffectChangeHandler,
};