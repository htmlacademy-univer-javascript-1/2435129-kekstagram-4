import {createPhotoDescription} from './create_photo_description.js';
import {createCommentPicture} from './similar_comments.js'

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const similarListFragment = document.createDocumentFragment('.pictures');
const photo = Array.from({ length: 25 }, createPhotoDescription);

const createPicture = function (ulEl,) {
  photo.forEach(({url, description, likes, comments}) => {
    const pictureElement = newPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    createCommentPicture(comments);
    similarListFragment.appendChild(pictureElement);
  });
  ulEl.appendChild(similarListFragment);
};

const deleteCreatePicture = function () {
  similarListFragment.innerHTML = '';
};

export {createPicture, deleteCreatePicture};
