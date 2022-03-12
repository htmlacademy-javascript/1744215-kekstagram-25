const checkTextLength = (text, maxLength) => text.length <= maxLength;

checkTextLength('мама мыла раму до суха', 12);


// взял с: https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItemArray = (items) => items[getRandomInteger(0, items.length - 1)];

const PICTURE_DESCRIPTIONS = [
  'Природа',
  'Закат',
  'Городской сюжет',
  'Осеннее настроение',
  'Котики',
  'Животные в зоопарке',
  'В кафе', 'Вечер с любимыми',
  'Роза ветров',
  'Настоящие чувства',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алексей',
  'Кекс',
  'Гарри',
  'Рональд',
  'Стив',
  'Леонардо',
  'Форест',
  'Ричард',
  'Дональд',
];

const createRandomComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomItemArray(MESSAGES),
  name: getRandomItemArray(NAMES),
});

const createComments = () => {
  const randomComment = getRandomInteger(1, 3);
  const comments = [];
  for (let i = 0; i < randomComment; i++){
    const comment = createRandomComment(i);

    comments.push(comment);
  }
  return comments;
};

const createRandomDescription = () => getRandomInteger(0, PICTURE_DESCRIPTIONS.length - 1);
const createRandomLikeCount = () => getRandomInteger(15, 200);

const createRandomPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: createRandomDescription(),
  likes: createRandomLikeCount(),
  comments: createComments(),
});

const createPhotos = (count) => {
  const photoArray = [];
  for (let i = 1; i <= count; i++){
    const photo = createRandomPhoto(i);
    photoArray.push(photo);
  }
  return photoArray;
};


const photos = createPhotos(2);
console.log(photos);
