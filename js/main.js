import './js_modules/utils.js';
import './js_modules/data.js';
import {createImage} from './js_modules/create-image.js';

const IMAGES_COUNT = 25;

export  {IMAGES_COUNT};

const images = Array.from({length: IMAGES_COUNT}, createImage);
// eslint-disable-next-line
console.log(images);
