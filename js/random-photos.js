import { getRandomInteger, getRandomItemArray } from './random.js';
import {
  NAMES,
  MESSAGES,
  PICTURE_DESCRIPTIONS,
} from './data.js';

const createRandomComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomItemArray(MESSAGES),
  name: getRandomItemArray(NAMES),
});


const createComments = (min, max) => {
  const randomComment = getRandomInteger(min, max);

  const comments = [];
  for (let i = 0; i < randomComment; i++){
    const comment = createRandomComment(i);
    comments.push(comment);
  }

  return comments;
};

const createRandomDescription = () => getRandomItemArray(PICTURE_DESCRIPTIONS);
const createRandomLikeCount = () => getRandomInteger(15, 200);

const createRandomPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: createRandomDescription(),
  likes: createRandomLikeCount(),
  comments: createComments(), //this function
});

const createPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++){
    const photo = createRandomPhoto(i);
    photos.push(photo);
  }

  return photos;
};

export {createPhotos};
