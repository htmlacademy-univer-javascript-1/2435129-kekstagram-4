import {createPhotoDescription} from 'crete_photo_description.js';

//const description = Array.from({length : 25}, createPhotoDescription); наверное можно убрать?

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const similarListFragment = document.createDocumentFragment('.pictures');
const photo = createPhotoDescription();
const photoContainer = document.querySelector('.pictures');

photo.forEach(({url, description, likes, comments}) => {
  const pictureElement = newPictureTemplate.cloneNod(true);
  pictureElement.querySelector('.picture__img').scr = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  similarListFragment.appendChild(pictureElement);
});

photoContainer.appendChild(similarListFragment);
