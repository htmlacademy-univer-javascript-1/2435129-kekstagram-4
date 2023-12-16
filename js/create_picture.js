const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const similarListFragment = document.querySelector('.pictures');

const createPicture = ({url, description, likes, comments, id}) => {
  const pictureElement = newPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.id = id;

  return pictureElement;
};

const renderPictures = function (pictures, container) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.appendChild(pictureElement);
  });
  container.appendChild(fragment);
};

const deleteCreatePicture = function () {
  similarListFragment.innerHTML = '';
};

export {createPicture, deleteCreatePicture, renderPictures };
