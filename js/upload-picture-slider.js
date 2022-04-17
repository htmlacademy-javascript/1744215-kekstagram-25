const sliderElement = document.querySelector('.effect-level__slider');
const sliderLevelElement = document.querySelector('.img-upload__effect-level');

let handleSliderUpdate = null;

const showSlider = () => {
  sliderLevelElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderLevelElement.classList.add('hidden');
};

const updateSliderVolume = () => {
  const volume = sliderElement.noUiSlider.get(true);
  
  if (handleSliderUpdate !== null) {
    handleSliderUpdate(volume);
  }
};

const resetSlider = () => {
  sliderElement.noUiSlider.reset();
};

const setSliderUpdateHandler = (callback) => {
  handleSliderUpdate = callback;
};

noUiSlider.create(sliderElement, {
  start: 100,
  step: 1,
  range: {
    min: 0,
    max: 100,
  },
});

sliderElement.noUiSlider.on('update', () => {
  updateSliderVolume();
});      

export {
  showSlider,
  hideSlider,
  resetSlider,
  setSliderUpdateHandler,
};