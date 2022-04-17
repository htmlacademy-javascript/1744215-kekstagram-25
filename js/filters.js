const SHUFFLED_LIMIT = 10;

const getShuffledPictures = (pictures) => pictures.slice().sort(() => Math.random() - 0.5).slice(0, SHUFFLED_LIMIT);
const getDiscussedPictures = (pictures) => pictures.slice().sort((a, b) => b.comments.length - a.comments.length);

const filterIdToFilter = {
  'filter-default': (pictures) => pictures.slice(),
  'filter-random': getShuffledPictures,
  'filter-discussed': getDiscussedPictures,
};

const filterPictures = (filterId, pictures = []) => filterIdToFilter[filterId](pictures);

export {
  filterPictures,
};