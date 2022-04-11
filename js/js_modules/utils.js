function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export  {getRandomInteger, isEscapeKey, isEnterKey};
