import {createPicture, deleteCreatePicture} from './create_picture.js';
import {isEscapeKey} from './utils.js';
import {createCommentPicture} from './similar_picture.js';

const urlPicture = document.querySelector('.big-picture__img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const descrition = document.querySelector('.social__caption');
const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = userModalElement.querySelector('big-picture__cancel');
const userModalOpenlement = document.querySelector('.pictures');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeRenderingWindow();
  }
};

const openRenderingWindow = function() {
  userModalElement.classList.remove('hidden');
  createPicture();

  urlPicture.src = userModalOpenlement.querySelector('.picture__img').scr;
  likes.textContent = userModalOpenlement.querySelector('.picture__likes').textContent;
  comments.textContent = userModalOpenlement.querySelector('.picture__comments').length;
  createCommentPicture(commentList);
  descrition.textContent = userModalOpenlement.querySelector('.picture__img').alt;

  userModalElement.querySelector('.social__comment-count').classList.add('hiidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeRenderingWindow = function() {
  userModalElement.classList.add('hidden');
  deleteCreatePicture();

  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

userModalOpenlement.addEventListener('click', () => {
  openRenderingWindow();
});

userModalCloseElement.addEventListener('click', () => {
  closeRenderingWindow();
});


