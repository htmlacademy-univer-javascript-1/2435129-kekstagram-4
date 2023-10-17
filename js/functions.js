let isRequiredLength = function (string, maxLength) {
  return string.length <= maxLength;
}

isRequiredLength('rdfewds', 3); //false
isRequiredLength('123456789', 9); // true
isRequiredLength('rtfgc', 6); // true

let isPalindrom = function (string) {
  //изменяю входяющую строку string и сохраняю изменения в str
  let str = string.replaceAll(' ', '');
  str = str.toLowerCase();
  let invertedLine = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertedLine += str[i];
  }
  return invertedLine === str;
}

isPalindrom('топот'); //true
isPalindrom('ДовОд'); //true
isPalindrom('Кекс'); //false
isPalindrom('Лёша на полке клопа нашёл'); //true
isPalindrom('ABcd ef g h 1 2 21 hgfe d cba'); // true

let returnDigit = function (string) {
  let str = string.toString();
  let numbers = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      numbers += str[i];
    }
  }
  return numbers !== '' ? numbers : NaN;
}

returnDigit('eerer'); // NaN
returnDigit('ee-323rer'); //323
returnDigit('2023 год'); // 2023
returnDigit('ECMAScript 2022'); // 2022
returnDigit('1 кефир, 0.5 батона'); // 105
returnDigit('агент 007');  // 007
returnDigit('а я томат!!!!!!!!!!!!!!'); // NaN
returnDigit(2023); // 2023
returnDigit(-1);   // 1
returnDigit(1.5);  // 15
returnDigit(-11.5); // 115
