function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

import {IMAGES_COUNT} from '../main.js';

export  {getRandomInteger , IMAGES_COUNT};
