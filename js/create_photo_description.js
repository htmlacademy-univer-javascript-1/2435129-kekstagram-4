import {getID,
    getUniqNumber,
    getRandomElementArray,
    getRandomNumber} from 'utils.js';
import {DESCRIPTION} from 'constants.js';
import createComment from 'create_comment.js';

const createPhotoDescription = function() {
    return {
    id: getID(),
    url: 'photos/' + getUniqNumber(1, 25)() + '.jpg',
    description: getRandomElementArray(DESCRIPTION),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length : getRandomNumber(0,30)}, createComment) //создаю массив комментариев с помощью функции createComment
    };
};

export {createPhotoDescription};