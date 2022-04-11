import './js_modules/utils.js';
import './js_modules/data.js';
import {createImage} from './js_modules/create-image.js';
import {renderPictures} from './js_modules/picture.js';
import './js_modules/user-content.js';
import './js_modules/user-form.js';

const IMAGES_COUNT = 25;

export  {IMAGES_COUNT};

const images = Array.from({length: IMAGES_COUNT}, createImage);
// eslint-disable-next-line
console.log(images);

renderPictures(images);
