import {createPicture, deleteCreatePicture} from './create_picture.js';
import {isEscapeKey} from './utils.js';
import {createCommentPicture} from './similar_comments.js';

const userModalElement = document.querySelector('.big-picture');
const urlPicture = document.querySelector('.big-picture__img').querySelector('img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const descrition = document.querySelector('.social__caption');

const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');
const countainerPictures = document.querySelector('.pictures');
createPicture(countainerPictures);
const userModalOpenlement = countainerPictures.querySelectorAll('.picture');

const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeRenderingWindow();
  }
};


const openRenderingWindow = function(miniature) {
  userModalElement.classList.remove('hidden');

  urlPicture.src = miniature.querySelector('.picture__img').src;
  likes.textContent = miniature.querySelector('.picture__likes').textContent;
  comments.textContent = miniature.querySelector('.picture__comments').textContent;
  descrition.textContent = miniature.querySelector('.picture__img').alt;
  commentList.innerHTML = '';
  createCommentPicture(commentList);

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

userModalCloseElement.addEventListener('click', () => {
  closeRenderingWindow();
});

for (const miniature of userModalOpenlement) {
  miniature.addEventListener('click', () => {
    openRenderingWindow(miniature);
  });
}
