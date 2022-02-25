//Мои функции
function getRandomInteger(min, max) {
  if(min >= 0 && max >= 0 && min <= max){
    return (min + Math.random() * (max + 1 - min));
  }
  return 0;
}
getRandomInteger(2, 500);

// взял с: https://learn.javascript.ru/task/random-int-min-max

// eslint-disable-next-line arrow-body-style
const checkTextLength = (text, maxLength) => text.length < maxLength;

checkTextLength('мама мыла раму до суха', 12);
// сам написал
