import {createComment} from './data.js';
import {getRandomInteger , IMAGES_COUNT} from './util.js';

const descriptions = [
  'Нарисовааные на заборе деревья',
  'Эйфелева башня',
  'Девушка в воде',
  'Вода',
  'Девушка',
  'Кусочек Парижа',
  'Деревья в горшочках',
  'Два дерева',
  'Вода и песок',
  'Солнце',
  'День',
  'Закат',
  'Достопримечательность Парижа',
  'Девушка в купальнике',
  'Пейзаж',
  'Деревья',
  'Красота',
  'Волны',
  'Отдых',
  'Купальник',
  'Парк перед Башней',
  'Рисунок на заборе',
  'Закат в Париже',
  'День на пляже',
  'Красота нашего пляжа',
];

const createImage = (_, index) =>
  ({
    id: index + 1,
    url: `photos/${ index + 1}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15 , 200),
    comments: Array.from({length: getRandomInteger(0, 9)}, createComment),
  });

const images = Array.from({length: IMAGES_COUNT}, createImage);

export  {images};
