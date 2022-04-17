const imageFiltersElement = document.querySelector('.img-filters');
const filterButtonElements = document.querySelectorAll('.img-filters__form button');

let handleFilterChange = null;

const setFilterChangeHandler = (callback) => {
  handleFilterChange = callback;
};

const showFilters = () => {
  imageFiltersElement.classList.remove('img-filters--inactive');
};

const onButtonClick = (evt) => {
  const currentButtonElement = evt.target;
  const activeButtonElement = imageFiltersElement.querySelector('button.img-filters__button--active');

  if (activeButtonElement !== currentButtonElement) {
    activeButtonElement.classList.remove('img-filters__button--active');
    currentButtonElement.classList.add('img-filters__button--active');
  }

  handleFilterChange(currentButtonElement.id);
};

filterButtonElements.forEach((buttonElement) => {
  buttonElement.addEventListener('click', onButtonClick);
});

export {
  showFilters,
  setFilterChangeHandler,
};
