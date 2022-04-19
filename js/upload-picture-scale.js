const ScaleValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const scaleValueElement = document.querySelector('.scale__control--value');
const scaleSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleBiggerButtonElement = document.querySelector('.scale__control--bigger');

let currentScale = ScaleValue.MAX;
let handleScaleChange = null;

const renderScale = (value) => {
  currentScale = value;
  scaleValueElement.value = `${value}%`;
  handleScaleChange(value);
};

const resetScale = () => {
  renderScale(ScaleValue.MAX);
};

const setScaleChangeHandler = (callback) => {
  handleScaleChange = callback;
};

scaleSmallerButtonElement.addEventListener('click', () => {
  const nextScale = currentScale - ScaleValue.STEP;
  if (nextScale >= ScaleValue.MIN) {
    renderScale(nextScale);
  }
});

scaleBiggerButtonElement.addEventListener('click', () => {
  const nextScale = currentScale + ScaleValue.STEP;
  if (nextScale <= ScaleValue.MAX) {
    renderScale(nextScale);
  }
});

export {
  resetScale,
  setScaleChangeHandler,
};
