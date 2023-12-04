import {createPicture, deleteCreatePicture} from './create_picture.js';
import {isEscapeKey} from './utils.js';
import {createCommentPicture} from './similar_comments.js';

const userModalElement = document.querySelector('.big-picture');
const urlPicture = document.querySelector('.big-picture__img').querySelector('img');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const descrition = document.querySelector('.social__caption');
const liComments = document.querySelectorAll('.social__comment');
const button = document.querySelector('.comments-loader');


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
  const hidden = commentList.querySelectorAll('.hidden');
  const allComments = commentList.childNodes.length;
  userModalElement.classList.remove('hidden');

  urlPicture.src = miniature.querySelector('.picture__img').src;
  likes.textContent = miniature.querySelector('.picture__likes').textContent;
  comments.textContent = miniature.querySelector('.picture__comments').textContent;
  descrition.textContent = miniature.querySelector('.picture__img').alt;
  //commentList.innerHTML = '';
  //createCommentPicture(commentList);

  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  for (let i = 5; i < commentList.childNodes.length; i++) {
    commentList.childNodes[i].classList.add('hidden');
  }

  if (commentList.childNodes.length < 5) {
    miniature.querySelector('.social__comment-count').textContent = `${allComments} из ${allComments} комментариев`;
  } else {
    miniature.querySelector('.social__comment-count').textContent = `${5 + allComments - hidden.length} из ${allComments} комментариев`;
  }

  button.classList.remove('hidden');
  //userModalElement.querySelector('.social__comment-count').textContent = `${liComments.length - hidden.length} из ${allComments} комментариев`;
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

const showComments = function () {
  const hidden = commentList.querySelectorAll('.hidden');
  const allComments = commentList.childNodes.length;
  if (hidden.length >= 5) {
    let i = 0;
    while (i !== 5) {
      hidden[i].classList.remove('hidden');
      i+=1;
    }
    document.querySelector('.social__comment-count').textContent = `${5 + allComments - hidden.length} из ${allComments} комментариев`;
  } else {
    let i = hidden.length;
    while (i !== 0) {
      hidden[i-1].classList.remove('hidden');
      i-=1;
    }
    button.classList.add('hidden');
    document.querySelector('.social__comment-count').textContent = `${allComments} из ${allComments} комментариев`;
  }
};

button.addEventListener('click', () => {
  showComments();
});


