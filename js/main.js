function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const NUMBER_OF_IMAGES_DISPLAYED = 25;

const IDS = getRandomInteger(1 , 25);
const LIKES = getRandomInteger(15 , 200);

const URLS = `photos/${ getRandomInteger(1,25)  }.jpg`;
const avatars = `img/avatar${ getRandomInteger(1,6)  }.svg`;

const names = [
  'Артём',
  'Марина',
  'Сергей',
  'Антон',
  'Слава',
  'Ира'
];
const messages = [
  'Всё  отлично!',
  'В  целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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
  'Красота нашего пляжа'
];
const randomDescriptionIndex = getRandomInteger(0, descriptions.length - 1);
const getComments = () => {
  const randomAvatarIndex = getRandomInteger(0, avatars.length - 1);
  const randomMessageIndex = getRandomInteger(0, messages.length - 1);
  if (messages.indexOf(randomAvatarIndex) !== -1) {
    messages.push(randomMessageIndex);
  }
  const randomNameIndex = getRandomInteger(0, names.length - 1);
  if (names.indexOf(randomNameIndex) !== -1) {
    names.push(randomNameIndex);
  }
  return {
    id: IDS,
    url: URLS,
    description: descriptions[randomDescriptionIndex],
    likes: LIKES,
    comments: messages,
  };
};
getComments();

const IMAGES = Array.from({length: NUMBER_OF_IMAGES_DISPLAYED}, getComments);
console.log(IMAGES);
