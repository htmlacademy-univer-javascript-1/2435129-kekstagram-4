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

export {getRandomNumber,
  getUniqNumber,
  getRandomElementArray,
  getRandomRepeatableElementArray,
  getCommentID,
  getID, isEscapeKey};
