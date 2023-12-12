import {renderPictures} from './create_picture.js';
import {isEscapeKey} from './utils.js';
import {renderComments} from './similar_comments.js';

const userModalElement = document.querySelector('.big-picture');
const urlPicture = document.querySelector('.big-picture__img').querySelector('img');
const commentList = document.querySelector('.social__comments');
const button = userModalElement.querySelector('.comments-loader');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');
const countainerPictures = document.querySelector('.pictures');
const countNumber = userModalElement.querySelector('.social__comment-count');

const renderGallery = function (pictures) {
  countainerPictures.addEventListener('click', (evt) => {
    document.querySelector('.social__comments').innerHTML = '';
    const pictureElement = evt.target.closest('[data-id]');
    if (!pictureElement) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (miniature) => miniature.id === +pictureElement.dataset.id
    );

    openRenderingWindow(picture);
  });
  renderPictures(pictures, countainerPictures);
};

const closeRenderingWindow = function() {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', showComments);
};

const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeRenderingWindow();
  }
};

userModalCloseElement.addEventListener('click', () => {
  closeRenderingWindow();
});

const renderPictureDetails = function ({url, likes, description}) {
  urlPicture.src = url;
  urlPicture.alt = description;
  userModalElement.querySelector('.likes-count').textContent = likes;
  userModalElement.querySelector('.social__caption').textContent = description;
};

const openRenderingWindow = function(miniature) {
  userModalElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(miniature);
  renderComments(miniature.comments);

  const allComments = commentList.childElementCount;
  countNumber.textContent =  `${5 } из ${  allComments  } комментариев`;

  button.classList.remove('hidden');

  for (let i = 5; i < commentList.childElementCount; i++) {
    commentList.childNodes[i].classList.add('hidden');
  }

  if (commentList.childElementCount <= 5) {
    countNumber.textContent = `${ allComments } из ${ allComments } комментариев`;
    button.classList.add('hidden');
  }
};

const showComments = function () {
  const hidden = commentList.querySelectorAll('.hidden');
  const allComments = commentList.childElementCount;
  if (hidden.length > 5) {
    let i = 0;
    while (i !== 5) {
      hidden[i].classList.remove('hidden');
      i+=1;
    }
    countNumber.textContent =  `${allComments - hidden.length + 5} из ${ allComments } комментариев`;
  } else {
    let i = hidden.length;
    while (i !== 0) {
      hidden[i-1].classList.remove('hidden');
      i-=1;
    }
    button.classList.add('hidden');
    countNumber.textContent =  `${allComments } из ${ allComments } комментариев`;
  }
};

//button.onclick = showComments;
button.addEventListener('click', (evt) => {
  evt.preventDefault();
  showComments();
});

export {renderGallery};
