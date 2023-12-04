import {createComment} from './create_comment.js';

const comment = Array.from({ length: 23 }, createComment);
const liComment = document.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();

const createCommentPicture = function (comments) {
  document.querySelector('.social__comments').innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    const commentElement = liComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    commentsListFragment.appendChild(commentElement);
  });
  document.querySelector('.social__comments').appendChild(commentsListFragment);
};

export {createCommentPicture};
