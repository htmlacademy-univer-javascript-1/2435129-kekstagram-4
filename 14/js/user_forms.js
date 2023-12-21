import { isEscapeKey, showAlert} from './utils.js';
import { resetScale } from './scale.js';
//import { sendData } from './api.js';

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
  resetScale();
};

const openPhotoRedactor = function () {
  bodyElement.classList.add('modal-open');
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('.img-upload__preview').style.removeProperty('filter');
  document.querySelector('#effect-none').checked = true;
};

closeButton.addEventListener('click', () => {
  closePhotoRedactor();
});


const errorMessage = document.querySelector('#error');
const successMessage = document.querySelector('#success');

const addErrorMessage = function () {
  document.body.append(errorMessage.cloneNode(true));
};


const closeSuccessMessage = function () {
  document.querySelector('.success').remove();
};

const addSuccessMessage = function () {
  const message = successMessage.cloneNode(true);
  document.body.append(message);
  message.querySelector('.success__button').addEventListener('click', () => {
    closeSuccessMessage();
  });
};


const setUserSubmitForm = function (onSuccess) {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://29.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        })
        .then((response) => {
          if (response.ok) {
            addSuccessMessage();
            closePhotoRedactor();
            onSuccess();
          } else {
            addErrorMessage();
          }
          //return response.json();
        })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};

textHashTag.addEventListener('keydown', stopClose);
textDescription.addEventListener('keydown', stopClose);
imgUploadButton.addEventListener('change', openPhotoRedactor);

export {  closePhotoRedactor, openPhotoRedactor, setUserSubmitForm };
