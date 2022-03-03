function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
getRandomInteger();

function checkLength (str, max) {
  return (str > max) ? 'перенос на новую строку' : 'true';
}
checkLength();
