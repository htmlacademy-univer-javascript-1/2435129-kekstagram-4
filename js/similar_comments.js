const liComment = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

const createCommentPicture = function ({avatar, name, message}) {

  const commentElement = liComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = function (comments) {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const bigPictureComment = createCommentPicture(comment);
    fragment.appendChild(bigPictureComment);
  });
  commentList.appendChild(fragment);
};

export {renderComments};
