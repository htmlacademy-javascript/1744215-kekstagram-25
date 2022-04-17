const makeFilter = (name, calculate) => (value) => `${name}(${calculate(value)})`;

const calcDecimal = (value) => Math.round(value) / 100;
const calcPercent = (value) => `${Math.round(value)}%`;
const calcPixels = (value) => `${Math.round(value * 3) / 100}px`;
const calcBrightness = (value) => Math.round(value * 2) / 100 + 1;

const effectToFilter = {
  chrome: makeFilter('grayscale', calcDecimal),
  sepia: makeFilter('sepia', calcDecimal),
  marvin: makeFilter('invert', calcPercent),
  phobos: makeFilter('blur', calcPixels),
  heat: makeFilter('brightness', calcBrightness),
  none: () => '',
};

const getFilter = (effect, value = 0) => effectToFilter[effect](value);

export {
  getFilter,
};