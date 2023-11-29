import {createComment} from './create_comment.js';

const comment = createComment();
const similarComment = document.createDocumentFragment('.social__comments');
const liComment = document.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment('.social__comments');

const createCommentPicture = function () {
  comment.forEach(({avatar, name, message}) => {
    const commentElement = liComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentsListFragment);
  });
  similarComment.appendChild(commentsListFragment);
};

export {createCommentPicture};
