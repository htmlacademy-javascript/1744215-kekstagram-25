//Мои функции
function myRandom(min, max) {
  //случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
myRandom(2, 500);

// взял с: https://learn.javascript.ru/task/random-int-min-max

function isLength(str, maxLength) {
  if(str.length < maxLength) {
    return true;
  }
  return false;
}
isLength('мама мыла раму до суха', 12);
// сам написал
