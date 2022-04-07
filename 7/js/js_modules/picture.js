const picturesContainer = document.querySelector('.pictures');
const template = document.getElementById('picture').content;

function renderPictures (pictures) {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    fragment.appendChild(photoElement);
  });

  picturesContainer.append(fragment);
}

export {renderPictures};
