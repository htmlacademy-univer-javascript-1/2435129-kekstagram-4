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
]

const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const getRandomNumber = function(min, max) {
    const lower = Math.ceil(Math.min(max, min));
    const upper = Math.floor(Math.max(min, max));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getUniqNumber = function(min, max) {
    const numbers = [];
    return function () {
        let current = getRandomNumber(min, max)
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

//функция для создания элемонтов без повторений
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

const createComment = function() {
    return {
    id: getCommentID(),       //ID делаю по порядку вызовов, поэтому сделала отдельную функцию createIdGenerator
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg', //аватарки могут повторяться, поэтому функция getRandomNumber
    message: getRandomRepeatableElementArray(MESSAGES),    //
    name: getRandomRepeatableElementArray(NAMES), //имена могут повторяться, поэтому getRandomRepeatableElementArray
    likes: getRandomNumber(15, 200) //лайки тоже могут повторяться
    };
};

const createPhotoDiscription = function() {
    return {
    id: getID(),
    url: 'photos/' + getUniqNumber(1, 25)() + '.jpg',
    description: getRandomElementArray(DESCRIPTION),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length : getRandomNumber(0,30)}, createComment) //создаю массив комментариев с помощью функции createComment
    };
};

const description = Array.from({length : 25}, createPhotoDiscription);