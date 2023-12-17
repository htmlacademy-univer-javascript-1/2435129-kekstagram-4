import {getCommentID,
  getUniqNumber,
  getRandomElementArray,
  getRandomNumber,
  getRandomRepeatableElementArray} from './utils.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;

const NAMES = [
  'Кира',
  'Леон',
  'Макс',
  'Агата',
  'Илья',
  'Давид',
  'Мия',
  'Адам',
  'Николь',
  'Марк',
  'Диана',
  'Роберт',
  'Артур',
  'Дарья',
  'Владислав',
  'Мирослава',
  'Милана',
  'Владимир',
  'Есения'
];

const DESCRIPTION = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
  'описание 5',
  'описание 6',
  'описание 7',
  'описание 8',
  'описание 9',
  'описание 10',
  'описание 11',
  'описание 12',
  'описание 13',
  'описание 14',
  'описание 15',
  'описание 16',
  'описание 17',
  'описание 18',
  'описание 19',
  'описание 20',
  'описание 21',
  'описание 22',
  'описание 23',
  'описание 24',
  'описание 25',
  'описание 26',
  'описание 27',
  'описание 28',
  'описание 29',
  'описание 30',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createComment = function() {
  return {
    id: getCommentID(),       //ID делаю по порядку вызовов, поэтому сделала отдельную функцию createIdGenerator
    avatar: `img/avatar-${  getRandomNumber(1, AVATAR_COUNT)  }.svg`, //аватарки могут повторяться, поэтому функция getRandomNumber
    message: getRandomRepeatableElementArray(MESSAGES),    //
    name: getRandomRepeatableElementArray(NAMES), //имена могут повторяться, поэтому getRandomRepeatableElementArray
    /*likes: getRandomNumber(LIKE_MIN_COUNT, LIKE_MAX_COUNT) //лайки тоже могут повторяться */
  };
};

const createPhotoDescription = function(index) {
  return {
    id: index,
    url: `photos/${  getUniqNumber(1, PICTURE_COUNT)()  }.jpg`,
    description: getRandomElementArray(DESCRIPTION),
    likes: getRandomNumber(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: Array.from({length : getRandomNumber(0, COMMENT_COUNT)}, createComment) //создаю массив комментариев с помощью функции createComment
  };
};

const getPictures = function () {
  return Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => createPhotoDescription(pictureIndex + 1));
};

export {createComment, getPictures};
