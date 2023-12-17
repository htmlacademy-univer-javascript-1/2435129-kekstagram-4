import { isEscapeKey } from './utils.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadButton = imgUploadForm.querySelector('.img-upload__start');
const imgUpload = imgUploadForm.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const textHashTag = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const closeButton = imgUpload.querySelector('.img-upload__cancel');
const MAX_SIMBOLS = 140;
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error-text',
});

const validateDescription = function (value) {
  return value.length < MAX_SIMBOLS;
};

pristine.addValidator(
  textDescription,
  validateDescription,
  `Комментарий должен содержать не более ${ MAX_SIMBOLS } символов`
);

const getHashArray = function (hashtags) {
  return hashtags.trim().split(' ');
};

const validateHashtag = function (value) {
  return getHashArray(value).every((tag) => hashtag.test(tag));
};

const validateCountHashtag = function (value) {
  const countHash = (getHashArray(value).filter((hash) => hash.length > 0)).length;
  return countHash <=5;
};

const validateCopyHashtag = function (value) {
  const uppperHash = getHashArray(value).map((tag) => tag.toUpperCase());
  const setHash = new Set(uppperHash);
  return setHash.size === uppperHash.length;
};


const stopClose = function (evt) {
  if (isEscapeKey) {
    evt.stopPropagation();
  }
};

pristine.addValidator(
  textHashTag,
  validateHashtag,
  'Неправильный или слишком длинный хэш-тег (более 20 символов)',
  1,
  true
);

pristine.addValidator(
  textHashTag,
  validateCountHashtag,
  'Хэш-тегов должно быть не больше 5',
  2,
  true
);

pristine.addValidator(
  textHashTag,
  validateCopyHashtag,
  'Хэш-тег повторяется',
  3,
  true
);

const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoRedactor();
  }
};

const closePhotoRedactor = function () {
  bodyElement.classList.remove('.modal-open');
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  textHashTag.value = '';
  textDescription.value = '';
};

const openPhotoRedactor = function () {
  bodyElement.classList.add('modal-open');
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', () => {
  closePhotoRedactor();
});

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

textHashTag.addEventListener('keydown', stopClose);
textDescription.addEventListener('keydown', stopClose);
imgUploadButton.addEventListener('change', openPhotoRedactor);
