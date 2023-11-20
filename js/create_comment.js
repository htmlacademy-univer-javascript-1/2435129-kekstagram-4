import {getCommentID, getRandomNumber, getRandomRepeatableElementArray} from './utils.js';
import {NAMES, MESSAGES} from './constants.js';

const createComment = function() {
  return {
    id: getCommentID(),       //ID делаю по порядку вызовов, поэтому сделала отдельную функцию createIdGenerator
    avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`, //аватарки могут повторяться, поэтому функция getRandomNumber
    message: getRandomRepeatableElementArray(MESSAGES),    //
    name: getRandomRepeatableElementArray(NAMES), //имена могут повторяться, поэтому getRandomRepeatableElementArray
    likes: getRandomNumber(15, 200) //лайки тоже могут повторяться
  };
};

export {createComment};
