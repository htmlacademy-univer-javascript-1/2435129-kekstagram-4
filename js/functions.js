/* eslint-disable prefer-const */
/* eslint-disable semi */
function isRequiredLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;

  //return (string.length <= maxLength) ? true : false;
}

isRequiredLength('rdfewds', 3); //false
isRequiredLength('123456789', 9); // true
isRequiredLength('rtfgc', 6); // true

function isPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let invertedLine = '';

  for (let i = string.length - 1; i >= 0; i--) {
    invertedLine += string[i];
  }

  if (invertedLine === string) {
    return true;
  }
  return false;

  /*return invertedLine === string ? true : false;*/
}

isPalindrom('топот'); //true
isPalindrom('ДовОд'); //true
isPalindrom('Кекс'); //false
isPalindrom('Лёша на полке клопа нашёл'); //true
isPalindrom('ABcd ef g h 1 2 21 hgfe d cba'); // true

function returnDigit(string) {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      numbers += string[i];
    }
  }
  return numbers !== '' ? numbers : NaN;
}

returnDigit('eerer'); // NaN
returnDigit('ee-323rer'); //323
returnDigit('2023 год'); // 2023
returnDigit('ECMAScript 2022'); // 2022
returnDigit('1 кефир, 0.5 батона'); // 105
returnDigit('агент 007');  // 7
returnDigit('а я томат!!!!!!!!!!!!!!'); // NaN
returnDigit(2023); // 2023
returnDigit(-1);   // 1
returnDigit(1.5);  // 15
returnDigit(-11.5); // 115
