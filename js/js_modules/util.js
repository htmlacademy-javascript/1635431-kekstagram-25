function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const IMAGES_COUNT = 25;

export  {getRandomInteger , IMAGES_COUNT};
