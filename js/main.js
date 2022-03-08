function getRandomInteger(min , max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
getRandomInteger(50,300);

function checkLength (str, max) {
  return str.legent > max;
}
checkLength(8,300);

// переменная id - рандом от 1 до 25 (не должно повторяться) число
// переменная url - адресная строка от 1 до 25 (не должно повторяться) строка
// переменная description - описание фотографии строка
// переменная likes - рандом от 15 до 200 число
// переменная comments - список коментариев (рандом из списка) строка = message =>Всё отлично!

const dataGeneration = () => {
  const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

  const COMMENTS = () => {
    const ID = [
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
      '25',
    ];
    const randomIDIndex = getRandomPositiveInteger(0, ID.length - 1);
    if (ID.indexOf(randomIDIndex) !== -1) {

      ID.push(randomIDIndex);
    }

    const AVATAR = [
      'img/avatar-1.svg',
      'img/avatar-2.svg',
      'img/avatar-3.svg',
      'img/avatar-4.svg',
      'img/avatar-5.svg',
      'img/avatar-6.svg',
    ];
    const randomAvatarIndex = getRandomPositiveInteger(0, AVATAR.length - 1);
    if (AVATAR.indexOf(randomAvatarIndex) !== -1) {

      AVATAR.push(randomAvatarIndex);
    }

    const MESSAGE = [
      'Всё  отлично!',
      'В  целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ];
    const randomMessageIndex = getRandomPositiveInteger(0, MESSAGE.length - 1);
    if (MESSAGE.indexOf(randomAvatarIndex) !== -1) {

      MESSAGE.push(randomMessageIndex);
    }

    const NAME = [
      'Артём',
      'Марина',
      'Сергей',
      'Антон',
      'Слава',
      'Ира',
    ];

    const randomNameIndex = getRandomPositiveInteger(0, NAME.length - 1);
    if (NAME.indexOf(randomNameIndex) !== -1) {
      NAME.push(randomNameIndex);
    }

    return {
      id: ID[randomIDIndex],
      avatar: AVATAR[randomAvatarIndex],
      message: MESSAGE[randomMessageIndex],
      name: NAME[randomNameIndex ],
    };
  };
  const DESCRIPTION = [
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

  const URL = [
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
    'photos/25',
  ];
  const LIKES = [15,200];
  const randomLIKESIndex = getRandomPositiveInteger(0, LIKES.length - 1);
  const randomUrlIndex = getRandomPositiveInteger(0, URL.length - 1);
  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
  if (DESCRIPTION.indexOf(randomDescriptionIndex) !== -1) {
    DESCRIPTION.push(randomDescriptionIndex);
  }
  if (URL.indexOf(randomUrlIndex) !== -1) {
    URL.push(randomUrlIndex);
  }

  return {
    url: URL[randomUrlIndex],
    description: DESCRIPTION[randomDescriptionIndex],
    Likes: LIKES[randomLIKESIndex],
    Comments: COMMENTS(),
  };
};
dataGeneration();
