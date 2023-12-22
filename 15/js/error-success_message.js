import {isEscapeKey} from './utils.js';
import { unblockSubmitButton } from './user_forms.js';

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const closeErrorMessage = function () {
  const errorContainer = document.querySelector('.error');
  unblockSubmitButton();
  if (errorContainer) {
    errorContainer.remove();
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const errorMouseClick = (evt) => {
  const errorContainer = document.querySelector('.success_button');
  if (evt.target !== errorContainer) {
    closeErrorMessage();
  }
};

const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const addErrorMessage = function () {
  const message = errorMessage.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', escapeCloseError);
  document.addEventListener('click', errorMouseClick);

  document.removeEventListener('keydown', onDocumentKeydown);
  message.style.zIndex = '100';
  document.body.append(message);
};

const escapeCloseError = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const closeSuccessMessage = function () {
  document.removeEventListener('keydown', escapeCloseSuccess);
  const successContainer = document.querySelector('.success');

  if (successContainer) {
    successContainer.remove();
  }
};

const addSuccessMessage = function () {
  const message = successMessage.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
  document.addEventListener('click', successMouseClick);
  document.addEventListener('keydown', escapeCloseSuccess);
  message.style.zIndex = '100';
  document.body.append(message);
};

const successMouseClick = (evt) => {
  const successContainer = document.querySelector('.success__inner');
  if (evt.target !== successContainer) {
    closeSuccessMessage();
  }
};

const escapeCloseSuccess = function (evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

export {addSuccessMessage, addErrorMessage};
