import {createComment} from './data.js';
import {getRandomInteger} from './utils.js';

const pictureContainer = document.getElementById('picture');
const pictureListFragment = document.createDocumentFragment();

const pictureImage = {
  scr: 'picture.imageUrl',
  comments: createComment,
  likes: getRandomInteger(15 , 200),
};
const userPictures = [
  'src',
  'comments',
  'likes',
];

userPictures.forEach((userPicture) => {
  const pictureListItem = document.createElement('div');

  pictureListItem.classList.add('picture');
  pictureListItem.classList.add(`picture__${userPicture}`);
  pictureListItem.textContent = pictureImage[userPicture];

  pictureContainer.append(pictureListItem);
});

pictureContainer.innerHTML = '';
pictureContainer.append(pictureListFragment);
