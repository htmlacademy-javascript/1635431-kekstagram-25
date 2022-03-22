function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const IMAGES_COUNT = 25;

const names = [
  'Артём',
  'Марина',
  'Сергей',
  'Антон',
  'Слава',
  'Ира',
];
const messages = [
  'Всё  отлично!',
  'В  целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
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

const createComment = (_, index) => {
  const randomNamesIndex = getRandomInteger(0, names.length - 1);
  const randomMessageIndex = getRandomInteger(0, messages.length - 1);
  return {
    id: index + 1,
    avatar: `img/avatar${index + 1}.svg`,
    message: messages[randomMessageIndex],
    name: names[randomNamesIndex],
  };
};

const createImage = (_, index) =>
  ({
    id: index + 1,
    url: `photos/${ index + 1}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15 , 200),
    comments: Array.from({length: getRandomInteger(0, 9)}, createComment),
  });

const images = Array.from({length: IMAGES_COUNT}, createImage);

// eslint-disable-next-line
console.log(images);
