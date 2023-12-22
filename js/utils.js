const ALERT_SHOW_TIME = 50000;

const getRandomNumber = function(min, max) {
  const lower = Math.ceil(Math.min(max, min));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqNumber = function(min, max) {
  const numbers = [];
  return function () {
    let current = getRandomNumber(min, max);
    if (numbers.length >= (max - min + 1)) {
      return null;
    }
    while (numbers.includes(current)) {
      current = getRandomNumber(min, max);
    }
    numbers.push(current);
    return current;
  };
};

const getRandomElementArray = function(element) {
  return element[getUniqNumber(0, element.length - 1)()];
};

//функция для создания элементов с повторениями
const getRandomRepeatableElementArray = function(element) {
  return element[getRandomNumber(0, element.length - 1)];
};

const createIdGenerator = function() {
  let id = 0;
  return function () {
    id += 1;
    return id;
  };
};
const getCommentID = createIdGenerator();
const getID = createIdGenerator();

const isEscapeKey = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    return true;
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'white';
  alertContainer.style.height = '50px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const shuffleArray = (array) => {
  for (let indexOne = array.length - 1; indexOne > 0; indexOne--) {
    const indexTwo = Math.floor(Math.random() * (indexOne + 1));
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  }
  return array;
};

const debounce = function (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomNumber,
  getUniqNumber,
  getRandomElementArray,
  getRandomRepeatableElementArray,
  getCommentID,
  getID, isEscapeKey, showAlert, shuffleArray, debounce };
