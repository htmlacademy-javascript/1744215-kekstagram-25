const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, timeoutDelay, ...rest);
  };
};

export {
  debounce,
};