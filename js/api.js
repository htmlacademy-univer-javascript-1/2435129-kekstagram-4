const getData = () => fetch(
  'https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json());

// const sendData = function (body) {
//   fetch(
//     'https://29.javascript.pages.academy/kekstagram',
//     {
//       method: 'POST',
//       body,
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(() => {
//       throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };

export { getData };
