const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItemArray = (items) => items[getRandomInteger(0, items.length - 1)];

export {
  getRandomInteger,
  getRandomItemArray,
};
