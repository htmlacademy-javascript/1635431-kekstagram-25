function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

// function checkLength (str, max) {
//   return str.legent > max;
// }
// checkLength(8,300);

// переменная id - рандом от 1 до 25 (не должно повторяться) число
// переменная url - адресная строка от 1 до 25 (не должно повторяться) строка
// переменная description - описание фотографии строка
// переменная likes - рандом от 15 до 200 число
// переменная comments - список коментариев (рандом из списка) строка = message =>Всё отлично!
const NUMBER_OF_IMAGES_DISPLAYED = 25;

const ids = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25'
];
const avatars = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
];
const messages = [
  'Всё  отлично!',
  'В  целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = [
  'Артём',
  'Марина',
  'Сергей',
  'Антон',
  'Слава',
  'Ира'
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
const urls = [
  'photos/1',
  'photos/2',
  'photos/3',
  'photos/4',
  'photos/5',
  'photos/6',
  'photos/7',
  'photos/8',
  'photos/9',
  'photos/10',
  'photos/11',
  'photos/12',
  'photos/13',
  'photos/14',
  'photos/15',
  'photos/16',
  'photos/17',
  'photos/18',
  'photos/19',
  'photos/20',
  'photos/21',
  'photos/22',
  'photos/23',
  'photos/24',
  'photos/25'
];

const LIKES = [15,200];
const randomLIKESIndex = getRandomInteger(0, LIKES.length - 1);
const randomUrlIndex = getRandomInteger(0, URL.length - 1);
const randomDescriptionIndex = getRandomInteger(0, descriptions.length - 1);

const getComments = () => {
  const randomIdIndex = getRandomInteger(0, ids.length - 1);
  if (ids.indexOf(randomIdIndex) !== -1) {
    ids.push(randomIdIndex);
  }
  const randomAvatarIndex = getRandomInteger(0, avatars.length - 1);
  if (avatars.indexOf(randomAvatarIndex) !== -1) {
    avatars.push(randomAvatarIndex);
  }
  const randomMessageIndex = getRandomInteger(0, messages.length - 1);
  if (messages.indexOf(randomAvatarIndex) !== -1) {
    messages.push(randomMessageIndex);
  }
  const randomNameIndex = getRandomInteger(0, names.length - 1);
  if (names.indexOf(randomNameIndex) !== -1) {
    names.push(randomNameIndex);
  }
  return {
    id: ids[randomIdIndex],
    avatar: avatars[randomAvatarIndex],
    message: messages[randomMessageIndex],
    name: names[randomNameIndex ],
  };
};

const generateData = () => {
  if (descriptions.indexOf(randomDescriptionIndex) !== -1) {
    descriptions.push(randomDescriptionIndex);
  }
  if (urls.indexOf(randomUrlIndex) !== -1) {
    urls.push(randomUrlIndex);
  }
  return {
    url: urls[randomUrlIndex],
    description: descriptions[randomDescriptionIndex],
    likes: LIKES[randomLIKESIndex],
    comments: getComments(),
  };
};
generateData();

const moreImages = Array.from({length: NUMBER_OF_IMAGES_DISPLAYED}, generateData);
moreImages();
