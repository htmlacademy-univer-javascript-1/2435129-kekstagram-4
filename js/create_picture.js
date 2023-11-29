import {createPhotoDescription} from './crete_photo_description.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const similarListFragment = document.createDocumentFragment('.pictures');
const photo = createPhotoDescription();

const createPicture = function (ulEl) {
  photo.forEach(({url, description, likes, comments}) => {
    const pictureElement = newPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').scr = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    similarListFragment.appendChild(pictureElement);
  });
  ulEl.appendChild(similarListFragment);
};

const deleteCreatePicture = function () {
  similarListFragment.innerHTML = '';
};

export {createPicture, deleteCreatePicture};
